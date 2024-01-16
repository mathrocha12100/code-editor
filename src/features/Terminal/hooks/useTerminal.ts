import { invoke } from "@tauri-apps/api";
import { listen } from "@tauri-apps/api/event";
import { useEffect, useRef, useState } from "react";

const CLEAR_COMMANDS = ["clear", "cls"];
const TERMINAL_BASE_NAME = "terminal";

export const createTerminalId = (id: string) => {
	return `${TERMINAL_BASE_NAME}-${id}`;
};

const isClearCommand = (cmd: string) => {
	return CLEAR_COMMANDS.includes(cmd);
};

type UseTerminalProps = {
	onCommandComplete: (data: string) => void;
	id: string;
};

function useTerminal({ onCommandComplete, id }: UseTerminalProps) {
	const terminalHistory = useRef<string[]>([]);

	const terminalId = createTerminalId(id);
	const node = useRef(false);

	const [data, setData] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const unlistenComplete = listen<string>(terminalId, ({ payload }) => {
			setData((state) => {
				if (isClearCommand(terminalHistory.current.at(-1) || "")) {
					return [];
				}

				return [...state, payload];
			});
			onCommandComplete(payload);
		});

		return () => {
			unlistenComplete.then((fn) => fn());
		};
	}, []);

	const runCommand = async (command: string) => {
		try {
			setIsLoading(true);

			terminalHistory.current.push(command);

			const res = await invoke("run_command_in_terminal_instance", {
				command,
				id: terminalId,
				node: !!node.current,
			});

			if (command === "node") node.current = true;

			setIsLoading(false);
		} catch (e) {
			console.error("Erro ao executar o comando:", e);
		}
	};

	return { runCommand, data, isLoading };
}

export default useTerminal;
