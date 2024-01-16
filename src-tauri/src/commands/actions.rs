use std::fs;
use std::process::Command;

#[tauri::command]
pub fn show_in_os_explorer(path: String) {
    // shell::open(&path, None::<Program>).map_err(|e| e.to_string())
    Command::new("explorer")
        .args(["/select,", &path]) // The comma after select is not a typo
        .spawn()
        .unwrap();
}

#[tauri::command]
pub fn delete_file(path: String) -> Result<(), String> {
    fs::remove_file(path).map_err(|e| e.to_string())
}

#[tauri::command]
pub fn delete_folder(path: String) -> Result<(), String> {
    fs::remove_dir_all(path).map_err(|e| e.to_string())
}
