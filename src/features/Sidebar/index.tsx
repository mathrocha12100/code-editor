import "@/styles/sidebarScroll.css";

import { projectNameValue } from "@/atoms/sidebar";
import { useRecoilValue } from "recoil";

import Header from "./components/Header";
import List from "./components/List";
import SelectPath from "./components/SelectPath";

function Sidebar() {
	const name = useRecoilValue(projectNameValue);

	return (
		<div className='h-full bg-secondary flex flex-col rounded-md min-w-[24vw]'>
			<Header />
			<div className='bg-primary mx-2 rounded-md mb-2 flex items-center justify-center'>
				<span className='text-editor-functions text-sm p-1 uppercase font-semibold'>
					{name}
				</span>
			</div>
			{/* <ConfirmModal
				langs={{
					cancel: "Cancelar",
					confirm: "Confirmar",
					description: "Suas alteracoes serao perdidas",
					title: "Tem certeza que voce quer apagar esse arquivo ?",
				}}
				open
				setOpen={() => null}
			/> */}
			{name ? <List /> : <SelectPath />}
		</div>
	);
}

export default Sidebar;
