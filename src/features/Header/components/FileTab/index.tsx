import { codeFamily } from "@/atoms/editor";
import { selectedFile } from "@/atoms/global";
import { fileTabs } from "@/atoms/header";
import ButtonIcon from "@/components/ButtonIcon";
import DevIcon, { getFileExt } from "@/components/DevIcon";
import useToast from "@/hooks/useToast";
import { readTextFile } from "@tauri-apps/api/fs";
import { extname } from "@tauri-apps/api/path";
import { X } from "lucide-react";
import { useCallback } from "react";
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from "recoil";
import { tv } from "tailwind-variants";
import { FileTab as FileTabType } from "../../types/FileTabs";

const fileTab = tv({
	base:
		"flex justify-between items-center bg-secondary max-w-fit pl-2 pr-2 rounded-md cursor-pointer border-1 border-tertiary",
	variants: {
		active: {
			true: "bg-primary",
		},
	},
});

type FileTabProps = {
	file: FileTabType;
};

function FileTab({ file }: FileTabProps) {
	const handleFiles = useSetRecoilState(fileTabs);
	const { showToast } = useToast();

	const selected = useRecoilValue(selectedFile);

	const getFile = useCallback(async (path: string) => {
		try {
			const content = await readTextFile(path);
			const extension = await extname(path);

			return { content, extension };
		} catch (err) {
			return {
				content: "An error ocurred while opening this file :/",
				extension: "",
				error: true,
			};
		}
	}, []);

	const setSelected = useRecoilCallback(
		({ set, snapshot, reset }) =>
			async (newState: FileTabType | null) => {
				set(selectedFile, newState);

				const codeState = await snapshot.getPromise(codeFamily(file.path));

				if (!newState && codeState) reset(codeFamily(file.path));

				if (newState && !codeState.loaded) {
					const { content, extension, error } = await getFile(newState.path);

					if (error) {
						showToast({ message: content, type: "error" });
						return;
					}

					set(codeFamily(file.path), {
						code: content,
						extension: extension,
						lines: 1,
						loaded: true,
					});
				}
			},
		[],
	);

	const isActive = selected?.path === file.path;

	function removeFile(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.stopPropagation();

		handleFiles((state) => state.filter(({ path }) => path !== file.path));

		if (isActive) setSelected(null);
	}

	function selectFile() {
		setSelected(file);
	}

	return (
		<div onClick={selectFile} className={fileTab({ active: isActive })}>
			<div className='flex items-center mr-1'>
				<DevIcon
					className='h-4 w-4'
					icon={{ name: getFileExt(file.name || ""), fullName: file?.name || "" }}
					type='file'
				/>
				<span className='text-editor-primary text-xs ml-2 tracking-wide font-inter select-none'>
					{file?.name || "New File"}
				</span>
			</div>
			<ButtonIcon onClick={removeFile} unselected>
				<X className='text-editor-primary h-4 w-4' />
			</ButtonIcon>
		</div>
	);
}

export default FileTab;
