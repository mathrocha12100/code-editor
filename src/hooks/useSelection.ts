function useSelection() {
	const getSelection = () => {
		const selection = window.getSelection();
		const range = selection?.getRangeAt(0);

		return { selection, range };
	};

	const moveSelection = () => {};

	return { moveSelection, getSelection };
}

export default useSelection;
