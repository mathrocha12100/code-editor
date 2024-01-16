import { CodeFamilyProps } from "@/atoms/editor";
import useEditorCommands from "@/hooks/useEditorCommands";
import { invoke } from "@tauri-apps/api/tauri";
import parse from "html-react-parser";
import { KeyboardEvent, useEffect, useRef } from "react";
import { SetterOrUpdater } from "recoil";
import Lines from "./Lines";

type HighlightSyntaxResult = {
	html_code: string;
	lines: number;
};

type CodeEditorProps = {
	filePath: string;
	code: string;
	extension: string;
	lines: number;
	setState: SetterOrUpdater<CodeFamilyProps>;
};

function CodeEditor({ filePath, code, extension, lines, setState }: CodeEditorProps) {
	const { onKeyUp } = useEditorCommands();
	const isFocus = useRef(false);
	const inputRef = useRef<HTMLPreElement>(null);
	const textContent = useRef("");

	//solution momentanea
	useEffect(() => {
		async function load() {
			if (inputRef.current && code) {
				inputRef.current.innerText = code;
				await handleOnChange(code);
			}
		}

		load();
	}, [filePath]);

	const toggleFocus = (focus: boolean) => {
		isFocus.current = focus;
	};

	const handleOnChange = async (value: string) => {
		const { html_code: html, lines: newLines } = await invoke<HighlightSyntaxResult>("highlight_syntax", {
			code: value,
			syntaxExtension: extension,
		});

		textContent.current = html;

		setState(({ extension }) => ({
			code: value,
			lines: newLines || 1,
			extension,
			loaded: true,
		}));
	};

	const onKeyUpHandler = async (event: KeyboardEvent<HTMLPreElement>) => {
		if (!inputRef.current) return;

		onKeyUp(event, inputRef, isFocus.current);
		await handleOnChange(inputRef.current.innerText);
	};

	return (
		<div className='flex w-full h-full overflow-y-scroll max-h-fit'>
			<div className='flex w-full  min-h-full h-fit'>
				<Lines lines={lines} />

				<div className='flex relative w-full '>
					<pre
						ref={inputRef}
						spellCheck={false}
						contentEditable='plaintext-only'
						onInput={({ currentTarget }) => handleOnChange(currentTarget.innerText)}
						onBlur={() => toggleFocus(false)}
						onFocus={() => toggleFocus(true)}
						onKeyUp={onKeyUpHandler}
						className='bg-transparent min-w-full text-transparent min-h-full w-min h-max overflow-hidden  outline-none p-4 caret-white-primary  absolute z-[1] text-lg font-jbrains-mono selection:text-transparent selection:bg-purple-primary/20'
					/>

					<pre
						onClick={() => inputRef.current?.focus()}
						className='min-h-full h-max min-w-full bg-primary  w-min absolute z-0 p-4 text-lg font-jbrains-mono overflow-hidden'>
						{parse(textContent.current)}
					</pre>
				</div>
			</div>
		</div>
	);
}

export default CodeEditor;
