import { useRecoilValue } from "recoil";

import ListFile from "../File";
import FolderTree from "../FolderTree";

import { projectBasePathValue, projectFilesValue } from "@/atoms/sidebar";
import Menu from "@/components/Menu";

import useContextMenu from "../../hooks/useContextMenu";
import useMenuItems from "../../hooks/useMenuItems";

function List() {
	const list = useRecoilValue(projectFilesValue);
	const projectBasePath = useRecoilValue(projectBasePathValue);
	const { openCtxMenu, closeCtxMenu, ctxMenuType, ctxMenu } = useContextMenu();
	const { items } = useMenuItems(ctxMenu, ctxMenuType);

	if (!list) return <h4>empty</h4>;

	return (
		<div
			className='overflow-y-auto p-3 select-none h-full'
			onContextMenu={(e) =>
				openCtxMenu(
					e,
					{
						name: null,
						path: projectBasePath,
						type: "root",
					},
					"create",
				)
			}>
			<Menu
				state={ctxMenu.state}
				setState={() => {
					closeCtxMenu();
				}}
				items={items}
			/>

			{list.map((folderOrFile) =>
				folderOrFile.children ? (
					<FolderTree isRoot key={folderOrFile.path} folder={folderOrFile} />
				) : (
					<ListFile isRoot key={folderOrFile.path} file={folderOrFile} />
				),
			)}
		</div>
	);
}

export default List;
