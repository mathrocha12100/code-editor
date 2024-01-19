import { OpenProps } from "@/components/Menu";
import { FileEntry } from "@tauri-apps/api/fs";
import { atom, selector } from "recoil";

export type CtxMenuProps = {
	path: string | null;
	name: string | null;
	type: "folder" | "file" | "root" | null;
	state: OpenProps;
};

export type CurrentSelectedProps = {
	path: string[] | null;
	action: "editing" | "cut" | "copy" | "selected" | null;
};

export type CtxMenuType = "actions" | "create" | null;

export const projectFiles = atom<FileEntry[]>({
	default: [],
	key: "projectFiles",
});

export const loadingProjectList = atom<boolean>({
	default: false,
	key: "loadingProjectList",
});

export const projectBasePath = atom<string | null>({
	default: null,
	key: "projectBasePath",
});

export const projectName = atom<string>({
	default: "",
	key: "projectName",
});

export const sidebarOption = atom<"explorer" | "search">({
	default: "explorer",
	key: "sidebarOption",
});

export const currentSelected = atom<CurrentSelectedProps>({
	key: "currentSelected",
	default: {
		action: null,
		path: null,
	} as CurrentSelectedProps,
});

export const contextMenuType = atom<CtxMenuType>({
	default: null,
	key: "contextMenuType",
});

export const contextMenu = atom<CtxMenuProps>({
	default: {
		state: {
			open: false,
			x: 0,
			y: 0,
		},
		type: null,
		path: null,
		name: null,
	},
	key: "contextMenu",
});

export const loadingProjectListValue = selector({
	key: "loadingProjectListValue",
	get: ({ get }) => get(loadingProjectList),
});

export const projectBasePathValue = selector({
	key: "projectBasePathValue",
	get: ({ get }) => get(projectBasePath),
});

export const currentSelectedValue = selector({
	key: "currentSelectedValue",
	get: ({ get }) => get(currentSelected),
});

export const contextMenuValue = selector({
	key: "contextMenuValue",
	get: ({ get }) => get(contextMenu),
});

export const contextMenuTypeValue = selector({
	key: "contextMenuTypeValue",
	get: ({ get }) => get(contextMenuType),
});

export const projectNameValue = selector({
	key: "projectNameValue",
	get: ({ get }) => get(projectName),
});

export const projectFilesValue = selector({
	key: "projectFilesValue",
	get: ({ get }) => get(projectFiles),
});
