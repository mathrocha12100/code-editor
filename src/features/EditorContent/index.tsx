import Terminal from "../Terminal";
import CodeStudio from "./components/CodeStudio";

function EditorContent() {
	return (
		<div className='text-white bg-secondary h-full rounded-md overflow-y-hidden'>
			<CodeStudio />

			{false && (
				<div className='p-2'>
					<Terminal />
				</div>
			)}
		</div>
	);
}

export default EditorContent;
