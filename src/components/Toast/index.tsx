import { toastState, toastStateValue } from "@/atoms/toast";
import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tv } from "tailwind-variants";
import ButtonIcon from "../ButtonIcon";

const DEFAULT_TOAST_EXPIRATION_MS = 4000;

const ICONS_MAP = {
	warn: <AlertTriangle className='text-orange-400 w-6 h-6' />,
	success: <CheckCircle2 className='text-emerald-400 w-6 h-6' />,
	error: <XCircle className='text-rose-500 w-6 h-6' />,
	info: <Info className='text-blue-500 w-6 h-6' />,
};

export type StateProps = {
	open: boolean;
	type: "warn" | "success" | "error" | "info";
	message: string;
	disableAutoClose?: boolean;
};

const toast = tv({
	slots: {
		base:
			"p-3 rounded-md border-tertiary border-2 flex items-center justify-between w-fit bg-primary fixed top-4 right-4",
	},
});

const { base } = toast();

type ToastContentProps = Omit<StateProps, "open">;

function ToastContent({ message, type, disableAutoClose }: ToastContentProps) {
	const setToast = useSetRecoilState(toastState);

	const timeout = useRef<number>();

	const closeToast = () => {
		setToast({ open: false, type: "info", message: "" });
	};

	useEffect(() => {
		if (disableAutoClose) return () => {};

		if (timeout.current) clearTimeout(timeout.current);

		timeout.current = setTimeout(() => {
			closeToast();
		}, DEFAULT_TOAST_EXPIRATION_MS);

		return () => {
			clearTimeout(timeout.current);
		};
	}, []);

	return (
		<div className={base()}>
			<div className='flex items-center'>
				{ICONS_MAP[type]}
				<span className='ml-4 text-sm text-editor-primary'>{message}</span>
			</div>
			<ButtonIcon onClick={closeToast} unselected className='ml-5'>
				<X className='text-red-primary h-5 w-5' />
			</ButtonIcon>
		</div>
	);
}

function Toast() {
	const state = useRecoilValue(toastStateValue);

	if (!state.open) return null;

	return (
		<ToastContent
			message={state.message}
			type={state.type}
			disableAutoClose={state.disableAutoClose}
		/>
	);
}

export default Toast;
