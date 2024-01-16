import { PropsWithChildren } from "react";
import { VariantProps, tv } from "tailwind-variants";

const modal = tv({
	base:
		"fixed top-1/2 left-1/2 z-50 transform -translate-x-2/4 -translate-y-2/4",
	variants: {
		overlay: {
			true:
				"top-0 left-0 -translate-x-0 -translate-y-0 h-screen w-screen flex justify-center items-center bg-neutral-900 bg-opacity-70",
		},
		full: {
			true: "w-full h-full",
		},
	},
});

type ModalProps = {
	open: boolean;
	onClose: () => void;
	className?: string;
} & PropsWithChildren &
	VariantProps<typeof modal>;

function Modal({ children, overlay, open, full, className }: ModalProps) {
	if (!open) return null;

	return <div className={modal({ overlay, full, className })}>{children}</div>;
}

export default Modal;
