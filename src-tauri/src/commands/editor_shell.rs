use encoding_rs::WINDOWS_1252;
use encoding_rs_io::DecodeReaderBytesBuilder;
use std::collections::HashMap;
use std::io::{BufRead, BufReader, Write};
use std::process::{Command, Stdio};
use std::sync::{
    atomic::{AtomicBool, Ordering},
    Arc, Mutex,
};
use std::thread;
use tauri::{State, Window};

pub struct Terminal {
    stdin: Arc<Mutex<std::process::ChildStdin>>,
    control_flag: Arc<AtomicBool>,
}

pub struct TerminalManager {
    terminals: Arc<Mutex<HashMap<String, Terminal>>>,
}

impl TerminalManager {
    pub fn new() -> Self {
        Self {
            terminals: Arc::new(Mutex::new(HashMap::new())),
        }
    }

    pub fn create_terminal(&self, id: String, window: Window) -> Result<(), String> {
        let control_flag = Arc::new(AtomicBool::new(true));

        let mut child = Command::new("cmd")
            .stdin(Stdio::piped())
            .stdout(Stdio::piped())
            .stderr(Stdio::inherit())
            .spawn()
            .map_err(|e| e.to_string())?;

        let stdin = Arc::new(Mutex::new(child.stdin.take().unwrap()));
        let stdout = child.stdout.take().unwrap();

        let control_flag_clone = Arc::clone(&control_flag);
        let id_clone = id.clone();

        thread::spawn(move || {
            let decoder = BufReader::new(
                DecodeReaderBytesBuilder::new()
                    .encoding(Some(WINDOWS_1252))
                    .build(stdout),
            );

            let reader = BufReader::new(decoder);

            for line in reader.lines() {
                if !control_flag_clone.load(Ordering::SeqCst) {
                    break;
                }
                if let Ok(line) = line {
                    window.emit(&id_clone, format!("{} \n", line)).unwrap();
                }
            }

            println!("--- stoped! ---");
        });

        self.terminals.lock().unwrap().insert(
            id,
            Terminal {
                stdin,
                control_flag,
            },
        );

        Ok(())
    }

    pub fn run_command_in_terminal(&self, id: &str, command: &str) -> Result<(), String> {
        let terminals = self.terminals.lock().unwrap();
        let terminal = terminals
            .get(id)
            .ok_or_else(|| "Terminal not found".to_string())?;

        let mut stdin = terminal.stdin.lock().unwrap();
        let cmd = format!("{} \n", command);
        stdin.write_all(cmd.as_bytes()).map_err(|e| e.to_string())?;
        stdin.flush().map_err(|e| e.to_string())?;

        Ok(())
    }

    pub fn stop_listener(&self, id: &str) {
        if let Some(terminal) = self.terminals.lock().unwrap().get(id) {
            terminal.control_flag.store(false, Ordering::SeqCst);
        }
    }

    pub fn remove_terminal(&self, id: &str) -> Result<(), String> {
        self.stop_listener(id);

        let mut terminals = self.terminals.lock().unwrap();
        terminals.remove(id);

        Ok(())
    }
}

#[tauri::command]
pub fn create_terminal_instance(
    state: State<TerminalManager>,
    window: Window,
    id: String,
) -> Result<(), String> {
    state.create_terminal(id, window)
}

#[tauri::command]
pub fn delete_terminal_instance(state: State<TerminalManager>, id: String) -> Result<(), String> {
    state.remove_terminal(&id)
}

#[tauri::command]
pub fn run_command_in_terminal_instance(
    state: State<TerminalManager>,
    id: String,
    command: String,
) -> Result<bool, String> {
    state
        .run_command_in_terminal(&id, &command)
        .map_err(|e| format!("Failed to run command: {}", e))?;

    Ok(true)
}
