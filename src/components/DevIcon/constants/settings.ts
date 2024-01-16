import { AvailableFileIcons, getFileIcon } from "./file";
import {
	AvailableClosedFolderIcons,
	getIconFolderClosed,
} from "./folderClosed";
import { AvailableOpenFolderIcons, getIconFolderOpen } from "./folderOpen";

// index.ts
// index.test.ts
// a.md
// yarn.lock

const DEFAULT_FILE_CONFIG: Record<string, AvailableFileIcons> = {
	".ts": "ts",
	".d.ts": "ts",
	".tsx": "reactTs",
	".test.ts": "ts-test",
	".test.js": "jsTest",
	".js": "js",
	".json": "bracketsYellow",
	".html": "codeOrange",
	".ttf": "font",
	"package.json": "node",
	"package-lock.json": "node",
	".gitignore": "git",
	".md": "markdown",
	"tailwind.": "tailwind",
	"tsconfig.json": "tsconfig",
	"tsconfig.node.json": "tsconfig",
	"vite.": "vite",
	".css": "bracketsSky",
	".conf.json": "bracketsYellow",
	"biome.json": "biome",
	".prettierrc": "prettier",
	".txt": "text",
	".lock": "lock",
	"yarn.lock": "yarn",
	"vite.config.ts": "vite",
	"vite.config.js": "vite",
	"tailwind.config.js": "tailwind",
	"postcss.config.js": "postcss",
	".rs": "rust",
	".toml": "gear",

	// image/svg files
	".svg": "svg",
	".ico": "svg",
	".tiff": "svg",
	".png": "image",
	".jpg": "image",
	".jpeg": "image",
	".apng": "image",
	".webp": "image",
	".avif": "video",
	".gif": "video",

	fallback: "document",
};

const DEFAULT_CLOSED_FOLDER_CONFIG: Record<string, AvailableClosedFolderIcons> =
	{
		src: "folder-sky-dev-closed",
		styles: "folder-sky-dev-closed",
		features: "folder-app-closed",
		hooks: "folder-blue-outlined-dot-closed",
		components: "folder-components-closed",
		assets: "folder-assets-closed",
		atoms: "folder-context-closed",
		pages: "folder-layout-closed",
		public: "folder-purple-outlined-dot-closed",
		node_modules: "folder-green-dot-closed",
		dist: "folder-purple-outlined-dot-closed",
		".vscode": "folder-blue-dot-closed",
		target: "folder-target-closed",
		"src-tauri": "folder-orange-outlined-dot-closed",
		fallback: "fallback",
	};

const DEFAULT_OPEN_FOLDER_CONFIG: Record<string, AvailableOpenFolderIcons> = {
	src: "folder-sky-dev-open",
	styles: "folder-sky-dev-open",
	features: "folder-app-open",
	hooks: "folder-blue-outlined-dot-open",
	components: "folder-components-open",
	assets: "folder-assets-open",
	atoms: "folder-context-open",
	pages: "folder-layout-open",
	public: "folder-purple-outlined-dot-open",
	node_modules: "folder-green-dot-open",
	dist: "folder-purple-outlined-dot-open",
	".vscode": "folder-blue-dot-open",
	target: "folder-target-open",
	"src-tauri": "folder-orange-outlined-dot-open",
	fallback: "fallback",
};

export type FolderType = "file" | "folder-closed" | "folder-open";

function getDevIcon(iconName: string, type: FolderType, fullName?: string) {
	switch (type) {
		case "file":
			return getFileIcon(
				DEFAULT_FILE_CONFIG[fullName || ""] ||
					DEFAULT_FILE_CONFIG[iconName] ||
					DEFAULT_FILE_CONFIG.fallback,
			);
		case "folder-open":
			return getIconFolderOpen(DEFAULT_OPEN_FOLDER_CONFIG[iconName] || "fallback");
		case "folder-closed":
			return getIconFolderClosed(
				DEFAULT_CLOSED_FOLDER_CONFIG[iconName] || "fallback",
			);
	}
}

export { getDevIcon };
