import { FileEntry } from "@tauri-apps/api/fs";

export type FileTab = Omit<FileEntry, "children">;
