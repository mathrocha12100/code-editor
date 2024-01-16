import { currentSelectedValue } from "@/atoms/sidebar";
import DevIcon, { getFileExt } from "@/components/DevIcon";
import { FolderType } from "@/components/DevIcon/constants/settings";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { tv } from "tailwind-variants";

const listItem = tv({
	base: "flex items-center p-1 cursor-pointer hover:bg-tertiary rounded-md",
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
				className='mr-1.5 h-[18px] w-[18px] text-red-primary'
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
	const current = useRecoilValue(currentSelectedValue);

	const onBlur = () => {
		setName(text || "");
	};

	const isActive = current.path?.includes(path);
	const isEditing = isActive && current.action === "editing";

	return (
		<div className={listItem({ active: current.path?.includes(path) })}>
			<RenderIcon type={type} text={name} />

			{isEditing ? (
				<input
					onBlur={onBlur}
					spellCheck={false}
					tabIndex={-1}
					value={name}
					onChange={({ target }) => setName(target.value)}
					className='text-sm font-light text-editor-primary w-[90%] bg-transparent caret-purple-primary outline-none'
				/>
			) : (
				<span className='text-sm font-inter font-medium text-editor-primary overflow-hidden whitespace-nowrap text-ellipsis'>
					{name}
				</span>
			)}
		</div>
	);
}

export default ListItem;
