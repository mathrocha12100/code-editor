import { projectFilesValue } from "@/atoms/sidebar";
import { useState } from "react";

import { OPEN_FLOATING_FILE_SEARCHER } from "@/commands";
import File from "@/features/Sidebar/components/File";
import useRegisterCommand from "@/hooks/useRegisterCommand";
import { Search } from "lucide-react";
import { useRecoilValue } from "recoil";
import Input from "../Input";
import InputRoot from "../Input/InputRoot";
import Moldal from "../Modal";

// WIP
function FloatingFileSearcher() {
	const [open, setOpen] = useState(false);
	const files = useRecoilValue(projectFilesValue);

	useRegisterCommand(OPEN_FLOATING_FILE_SEARCHER, () => {
		setOpen((state) => !state);
	});

	return (
		<Moldal className='top-1/3 w-2/3' open={open} onClose={() => setOpen(false)}>
			<div className='bg-secondary p-2 rounded-md border-1 border-tertiary shadow-md flex flex-col'>
				<InputRoot>
					<Search className='absolute top-[9px] left-2 w-5 h-5 text-red-primary' />
					<Input className='w-full pl-9' placeholder='Search files by name' />
				</InputRoot>
				<div className='flex flex-col max-h-64 overflow-y-auto mt-2'>
					{files.map((file) => (
						<File key={file.path} file={file} />
					))}
				</div>
			</div>
		</Moldal>
	);
}

export default FloatingFileSearcher;
