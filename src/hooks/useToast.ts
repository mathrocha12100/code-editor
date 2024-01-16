import { toastState } from "@/atoms/toast";
import { StateProps } from "@/components/Toast";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";

function useToast() {
    const updateToast = useSetRecoilState(toastState);

    const showToast = useCallback((state: Omit<StateProps, 'open'>) => {
        updateToast(() => ({ ...state, open: true }));
    }, []);

    return { showToast };
}

export default useToast;