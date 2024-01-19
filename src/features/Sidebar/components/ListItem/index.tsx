import { currentSelected } from "@/atoms/sidebar";
import DevIcon, { getFileExt } from "@/components/DevIcon";
import { FolderType } from "@/components/DevIcon/constants/settings";
import { Copy, Edit2, Scissors } from "lucide-react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { tv } from "tailwind-variants";
import RenameItem from "./RenameItem";

const listItem = tv({
	base:
		"flex items-center justify-between p-1 cursor-pointer hover:bg-tertiary rounded-md",
	variants: {
		editing: {
			true: "bg-tertiary",
		},
		active: {
			true: "bg-tertiary",
		},
	},
});

type ListItemProps = {
	text?: string;
	path: string;
	type: FolderType;
};

function RenderIcon({ type, text = "" }: Pick<ListItemProps, "type" | "text">) {
	if (type === "file") {
		return (
			<DevIcon
				className='mr-1.5 h-5 w-5 text-red-primary'
				type='file'
				icon={{
					name: getFileExt(text),
					fullName: text,
				}}
			/>
		);
	}

	return (
		<DevIcon
			className='mr-1.5 h-5 w-5 text-editor-functions'
			type={type}
			icon={{ name: text }}
		/>
	);
}

function ListItem({ text, path, type }: ListItemProps) {
	const [name, setName] = useState(text || "");
	const [current, setCurrent] = useRecoilState(currentSelected);

	const onBlur = () => {
		setName(text || "");
		setCurrent((state) => ({ action: "selected", path: state.path }));
	};

	const isActive = current.path?.includes(path);

	const isCopy = isActive && current.action === "copy";
	const isCut = isActive && current.action === "cut";
	const isEditing = isActive && current.action === "editing";

	return (
		<div className={listItem({ active: current.path?.includes(path) })}>
			<div className='flex'>
				<RenderIcon type={type} text={name} />

				{isEditing ? (
					<RenameItem name={name} setName={setName} onBlur={onBlur} />
				) : (
					<span className='text-sm font-inter font-medium text-editor-primary overflow-hidden whitespace-nowrap text-ellipsis'>
						{name}
					</span>
				)}
			</div>

			{isCopy && <Copy className='ml-1.5 h-4 w-4 text-red-primary' />}
			{isCut && <Scissors className='ml-1.5 h-4 w-4 text-red-primary' />}
			{isEditing && <Edit2 className='ml-1.5 h-4 w-4 text-red-primary' />}
		</div>
	);
}

export default ListItem;
