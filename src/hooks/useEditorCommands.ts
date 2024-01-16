import { RefObject } from "react";

const DEFAULTS = {
	IDENTATION: "    ",
};

function useEditorCommands() {
	function onKeyUp(
		event: React.KeyboardEvent<HTMLPreElement>,
		ref: RefObject<HTMLPreElement>,
		isFocus: boolean,
	) {
		event.preventDefault();

		// console.log(ref);

		if (!isFocus) return;

		switch (event.key) {
			case "Tab": {
				document.execCommand("insertText", false, DEFAULTS.IDENTATION);
				break;
			}
			default:
				break;
		}
	}

	return { onKeyUp };
}

export default useEditorCommands;
