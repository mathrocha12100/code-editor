import {
	CtxMenuProps,
	CtxMenuType,
	contextMenu,
	contextMenuType,
} from "@/atoms/sidebar";
import { useRecoilState } from "recoil";

function useContextMenu() {
	const [ctxMenu, setCtxMenu] = useRecoilState(contextMenu);
	const [ctxMenuType, setCtxMenuType] = useRecoilState(contextMenuType);

	const closeCtxMenu = () => {
		setCtxMenu(() => ({
			path: null,
			name: null,
			type: null,
			state: { open: false, x: 0, y: 0 },
		}));

		setCtxMenuType(() => null);
	};

	const openCtxMenu = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
		data: Omit<CtxMenuProps, "state">,
		type: CtxMenuType,
	) => {
		const { path, name, type: currentType } = data;

		e.preventDefault();
		e.stopPropagation();

		if (ctxMenu.state.open) {
			closeCtxMenu();
			return;
		}

		setCtxMenu(() => ({
			path,
			name,
			type: currentType,
			state: { open: true, x: e.pageX, y: e.pageY },
		}));
		setCtxMenuType(() => type);
	};

	return {
		ctxMenuType,
		ctxMenu,
		openCtxMenu,
		closeCtxMenu,
	};
}

export default useContextMenu;
