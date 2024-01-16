import ButtonIcon from "@/components/ButtonIcon";

import { invoke } from "@tauri-apps/api";
import { ChevronRight, Loader2, TerminalSquare, X } from "lucide-react";
import { FormEvent, Fragment, useRef, useState } from "react";
import useTerminal, { createTerminalId } from "./hooks/useTerminal";

function Terminal() {
	const inputRef = useRef<HTMLInputElement>(null);
	const terminalRef = useRef<HTMLDivElement>(null);
	const [init, setInit] = useState(false);

	const { runCommand, data, isLoading } = useTerminal({
		onCommandComplete: () => {
			setTimeout(() => {
				// terminalRef.current?.scrollTo(0, terminalRef.current?.scrollHeight);
				inputRef.current?.focus();
			}, 100);
		},
		id: "1",
	});

	const focusOnInput = () => {
		if (isLoading) return;

		inputRef.current?.focus();
	};

	const sendCommand = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!inputRef.current || !inputRef.current.value) return;

		const { value } = inputRef.current;

		await runCommand(value);

		inputRef.current.value = "";
	};

	const create = async () => {
		const t = await invoke("create_terminal_instance", {
			id: createTerminalId("1"),
		});

		setInit(true);
	};

	const close = async () => {
		const t = await invoke("delete_terminal_instance", {
			id: createTerminalId("1"),
		});
		setInit(false);
	};

	return (
		<div className='w-full p-2 bg-primary'>
			<header className='flex items-center justify-between'>
				<div className='flex items-center'>
					<TerminalSquare className='mr-3 text-red-primary h-6 w-6' />
					<span className='text-lg font-semibold select-none text-editor-primary'>
						TERMINAL
					</span>
				</div>
				<ButtonIcon unselected>
					<X />
				</ButtonIcon>
			</header>
			<div
				ref={terminalRef}
				className='bg-primary h-[26vh] w-full flex flex-col cursor-text overflow-x-scroll'
				onClick={focusOnInput}>
				<pre className='font-jbrains-mono text-editor-primary'>
					{data.map((r, i) => (
						<Fragment key={`${i}-x`}>{r}</Fragment>
					))}
				</pre>
				<div className='flex mt-2'>
					<ChevronRight />
					<form onSubmit={sendCommand} className='w-full'>
						<input
							disabled={isLoading}
							ref={inputRef}
							type='text'
							className='w-full outline-none border-none bg-primary caret-white'
						/>
					</form>
					{!init ? (
						<button onClick={create} type='button' className='bg-teal-600'>
							init terminal
						</button>
					) : (
						<>
							<button onClick={close} type='button' className='bg-orange-600'>
								close terminal
							</button>
						</>
					)}{" "}
					{isLoading && (
						<Loader2 className='animate-spin text-editor-functions mr-2' />
					)}
				</div>
			</div>
		</div>
	);
}

export default Terminal;
