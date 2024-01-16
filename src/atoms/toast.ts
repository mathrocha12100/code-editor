import { StateProps } from "@/components/Toast";
import { atom, selector } from "recoil";

export const toastState = atom<StateProps>({
	default: {
		open: false,
		message: "",
		type: "info",
	},
	key: "toastState",
});

export const toastStateValue = selector<StateProps>({
	key: "toastStateValue",
	get: ({ get }) => get(toastState),
});
