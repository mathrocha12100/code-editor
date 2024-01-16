import { fileTabs } from "@/atoms/header";
import { MouseEvent } from "react";
import { useSetRecoilState } from "recoil";
import ListItem from "../ListItem";

import { currentSelected } from "@/atoms/sidebar";
import { FileEntry } from "@tauri-apps/api/fs";
import { tv } from "tailwind-variants";
import useContextMenu from "../../hooks/useContextMenu";

type ListFileProps = {
	file: FileEntry;
	isRoot?: boolean;
};

const listFileContainer = tv({
	base: "mt-0.5 mb-0.5",
	variants: {
		notRoot: {
			true: "ml-2",
		},
	},
});

function ListFile({ file, isRoot }: ListFileProps) {
	const handleFiles = useSetRecoilState(fileTabs);
	const setCurrent = useSetRecoilState(currentSelected);
	const { openCtxMenu } = useContextMenu();

	const handleOpenOptions = (
		e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
	) => {
		e.preventDefault();
		e.stopPropagation();

		openCtxMenu(
			e,
			{
				name: file.name || null,
				path: file.path,
				type: "file",
			},
			"actions",
		);
	};

	function handleSelectFile() {
		setCurrent(() => ({ action: "selected", path: [file.path] }));
		handleFiles((state) => {
			if (state.find(({ path }) => path === file.path)) {
				return state;
			}

			return [...state, file];
		});
	}

	return (
		<div
			onContextMenu={handleOpenOptions}
			className={listFileContainer({
				notRoot: !isRoot,
			})}
			onClick={handleSelectFile}>
			<ListItem path={file.path} type='file' text={file.name} />
		</div>
	);
}

export default ListFile;
