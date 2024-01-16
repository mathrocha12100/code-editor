import Button from "@/components/Button";
import { FolderInput, Loader2 } from "lucide-react";
import useList from "../../hooks/useList";

function SelectPath() {
	const { getFiles, isLoading } = useList();

	async function getData() {
		await getFiles();
	}

	return (
		<div className='flex items-center justify-center flex-col p-2 h-full'>
			{isLoading ? (
				<Loader2 className='text-red-primary h-10 w-10 animate-spin' />
			) : (
				<>
					<FolderInput className='text-red-primary h-10 w-10' />
					<Button className='mt-3' onClick={getData}>
						Open Explorer
					</Button>
				</>
			)}
		</div>
	);
}

export default SelectPath;
