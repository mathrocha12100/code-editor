import { useRecoilValue } from "recoil";

import "@/styles/headerScroll.css";

import { fileTabs } from "@/atoms/header";
import FileTab from "./components/FileTab";

function Header() {
	const tabs = useRecoilValue(fileTabs);

	return (
		<header className='flex gap-2 rounded-md bg-secondary min-h-[60px] max-h-full p-2 overflow-x-auto'>
			{tabs.map((tab) => (
				<FileTab key={tab.path} file={tab} />
			))}
		</header>
	);
}

export default Header;
