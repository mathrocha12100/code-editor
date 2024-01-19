import {
	CtxMenuProps,
	CtxMenuType,
	currentSelected,
	projectFiles,
} from "@/atoms/sidebar";
import { MenuItem } from "@/components/Menu";
import Item from "@/components/Menu/Item";
import useToast from "@/hooks/useToast";
import { invoke } from "@tauri-apps/api/tauri";
import {
	Copy,
	File,
	FileEdit,
	Folder,
	FolderOpenDot,
	Scissors,
	Trash2,
} from "lucide-react";
import { useSetRecoilState } from "recoil";
import useList from "./useList";

function useMenuItems(ctxMenu: CtxMenuProps, type: CtxMenuType) {
	const { removeListEntry } = useList();
	const { showToast } = useToast();
	const setCurrent = useSetRecoilState(currentSelected);
	const setList = useSetRecoilState(projectFiles);

	const openInExplorer = async () => {
		if (!ctxMenu.path) return;

		await invoke("show_in_os_explorer", { path: ctxMenu.path });
	};

	const deleteAction = async () => {
		if (!ctxMenu.path || !ctxMenu.type || ctxMenu.type === "root") return;

		try {
			const fnName = ctxMenu.type === "file" ? "delete_file" : "delete_folder";

			await invoke(fnName, {
				path: ctxMenu.path,
			});

			setList((state) => {
				const newList = removeListEntry(state, ctxMenu.path as string);

				return newList;
			});
		} catch (err) {
			showToast({ message: String(err), type: "error" });
		}
	};

	const copyAction = async () => {};

	const renameAction = () => {
		if (!ctxMenu.path) return;

		setCurrent({ action: "editing", path: [ctxMenu.path] });
	};

	const getMenuItems = (): MenuItem[] => {
		switch (type) {
			case "create":
				return [
					{
						action: () => 0,
						content: <Item text='Create file' Icon={File} />,
					},
					{
						action: () => 0,
						content: <Item text='Create folder' Icon={Folder} />,
						spacing: true,
					},
					{
						action: openInExplorer,
						content: <Item text='Open in explorer' Icon={FolderOpenDot} />,
					},
				];
			case "actions":
				return [
					{
						content: <Item text='Copy' Icon={Copy} />,
						action: () => 0,
					},
					{
						content: <Item text='Cut' Icon={Scissors} />,
						action: () => 0,
						spacing: true,
					},
					{ action: renameAction, content: <Item text='Rename' Icon={FileEdit} /> },
					{
						action: deleteAction,
						content: <Item text='Delete' Icon={Trash2} />,
						spacing: true,
					},
					{
						action: openInExplorer,
						content: <Item text='Open in explorer' Icon={FolderOpenDot} />,
					},
				];
			default:
				return [];
		}
	};

	const items = getMenuItems();

	return {
		items,
	};
}

export default useMenuItems;
