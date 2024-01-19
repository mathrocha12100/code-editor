type RenameItemProps = {
	name: string;
	setName: (arg: string) => void;
	onBlur: () => void;
};

function RenameItem({ name, setName, onBlur }: RenameItemProps) {
	return (
		<input
			autoFocus
			onBlur={onBlur}
			spellCheck={false}
			tabIndex={-1}
			value={name}
			onChange={({ target }) => setName(target.value)}
			className='text-sm font-inter text-editor-primary font-medium w-[90%] bg-transparent caret-purple-primary outline-none'
		/>
	);
}

export default RenameItem;
