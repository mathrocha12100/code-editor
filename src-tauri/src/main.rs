// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use commands::editor_shell::TerminalManager;

extern crate lazy_static;

mod commands;

fn main() {
    let terminal_manager = TerminalManager::new();

    tauri::Builder::default()
        .manage(terminal_manager)
        .invoke_handler(tauri::generate_handler![
            commands::editor::highlight_syntax,
            commands::editor_shell::create_terminal_instance,
            commands::editor_shell::delete_terminal_instance,
            commands::editor_shell::run_command_in_terminal_instance,
            commands::actions::show_in_os_explorer,
            commands::actions::delete_file,
            commands::actions::delete_folder
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
