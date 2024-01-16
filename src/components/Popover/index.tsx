import { MouseEvent, PropsWithChildren } from "react";
import { VariantProps, tv } from "tailwind-variants";

const popover = tv({
	base: "fixed p-2 w-fit rounded-md shadow-md",
	variants: {
		primary: {
			true: "border-1 border-tertiary bg-secondary flex flex-col min-w-[200px]",
		},
	},
});

export type OpenProps = {
	open: boolean;
	x: number;
	y: number;
};

export type PopoverProps = {
	state: OpenProps;
	setState: (args: OpenProps) => void;
	className?: string;
} & PropsWithChildren &
	VariantProps<typeof popover>;

function Popover({ state, setState, children, className, ...rest }: PopoverProps) {
	if (!state.open) return null;

	const handleClickOutside = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
		event.stopPropagation();

		setState({ open: false, x: 0, y: 0 });
	};

	const setFixedPosition = (popoverElement: HTMLDivElement | null) => {
		if (!popoverElement) return { top: state.y, left: state.x };

		const popoverRect = popoverElement.getBoundingClientRect();
		const { innerWidth, innerHeight } = window;

		let newX = state.x;
		let newY = state.y;

		// Ajustar a posição horizontal se o popover estiver saindo da tela
		if (newX + popoverRect.width > innerWidth) {
			newX = innerWidth - popoverRect.width;
		}

		// Ajustar a posição vertical se o popover estiver saindo da tela
		if (newY + popoverRect.height > innerHeight) {
			newY = innerHeight - popoverRect.height - 20;
		}

		popoverElement.style.top = `${newY}px`;
		popoverElement.style.left = `${newX}px`;
	};

	return (
		<div className='w-screen h-screen fixed z-20' onClick={handleClickOutside}>
			<div ref={(reference) => setFixedPosition(reference)} className={popover({ className, ...rest })}>
				{children}
			</div>
		</div>
	);
}

export default Popover;
