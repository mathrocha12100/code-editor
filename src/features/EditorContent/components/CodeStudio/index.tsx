import { codeFamily } from "@/atoms/editor";
import { selectedFileValue } from "@/atoms/global";
import CodeEditor from "@/components/CodeEditorM";
import { useRecoilState, useRecoilValue } from "recoil";
import "./ts.theme.css";

function CodeStudio() {
	const file = useRecoilValue(selectedFileValue);
	const [{ code, extension, lines, loaded }, setState] = useRecoilState(codeFamily(file?.path));

	return (
		<div className='h-full max-h-[55vh] p-2'>
			{file?.path && loaded && (
				<CodeEditor code={code} extension={extension} lines={lines} setState={setState} filePath={file.path} />
			)}
		</div>
	);
}

export default CodeStudio;
