import Windows from "@/assets/icons/os/windows.svg?react";
import { Command } from "lucide-react";

type ShortcutBadgeProps = {
	shortcut: string[];
};

type RenderShorcutProps = {
	shortcut: string;
};

const isWindows = (shortcut: string) => {
	return shortcut === "WIN";
};

const isMac = (shortcut: string) => {
	return shortcut === "COMMAND";
};

function RenderShorcut({ shortcut }: RenderShorcutProps) {
	if (isWindows(shortcut.toUpperCase())) {
		return <Windows className='h-[17px] w-[17px]' />;
	}

	if (isMac(shortcut.toUpperCase())) {
		return <Command className='h-[17px] w-[17px]' />;
	}

	return <span className='font-jbrains-mono italic text-sm'>{shortcut}</span>;
}

function ShortcutBadge({ shortcut }: ShortcutBadgeProps) {
	const lastValue = shortcut.at(-1);

	const isLastIndex = (currentValue: string) => {
		return currentValue === lastValue;
	};

	return (
		<div className='p-1 bg-primary border-2 border-tertiary rounded-md flex items-center w-min select-none'>
			{shortcut.map((command, i) => (
				<div key={`${command}-${i}`} className='flex items-center'>
					<div className='bg-gray-primary p-0.5 pr-2 pl-2 rounded-md shadow-md flex items-center justify-center border-1 border-tertiary'>
						<RenderShorcut shortcut={command} />
					</div>
					{!isLastIndex(command) && (
						<span className='mr-1.5 ml-1.5 font-medium text-white-primary/80'>
							{"+"}
						</span>
					)}
				</div>
			))}
		</div>
	);
}

export default ShortcutBadge;
