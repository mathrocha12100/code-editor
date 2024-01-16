import { FileEntry } from "@tauri-apps/api/fs";
import { Fragment, MouseEvent, useState } from "react";

import { currentSelected } from "@/atoms/sidebar";
import { useSetRecoilState } from "recoil";
import { tv } from "tailwind-variants";
import useContextMenu from "../../hooks/useContextMenu";
import File from "../File";
import ListItem from "../ListItem";

type FolderTreeProps = {
	folder: FileEntry;
	isRoot?: boolean;
};

const folderTreeContainer = tv({
	base: "flex flex-col",
	variants: {
		notRoot: {
			true: "ml-2",
		},
	},
});

function FolderTree({ folder, isRoot }: FolderTreeProps) {
	const [open, setOpen] = useState(false);
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
				name: folder.name || null,
				path: folder.path,
				type: "folder",
			},
			"actions",
		);
	};

	const handleFolder = () => {
		setCurrent(() => ({ action: "selected", path: [folder.path] }));
		setOpen(!open);
	};

	return (
		<div className={folderTreeContainer({ notRoot: !isRoot })}>
			<div onClick={handleFolder} onContextMenu={handleOpenOptions}>
				<ListItem
					path={folder.path}
					type={open ? "folder-open" : "folder-closed"}
					text={folder.name}
				/>
			</div>
			{open && (
				<>
					{folder?.children?.map((file) => {
						return (
							<Fragment key={file.path}>
								{file.children ? <FolderTree folder={file} /> : <File file={file} />}
							</Fragment>
						);
					})}
				</>
			)}
		</div>
	);
}

export default FolderTree;
