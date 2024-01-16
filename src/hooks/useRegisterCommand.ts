import { useEffect } from 'react';

import {
  isRegistered,
  register,
} from '@tauri-apps/api/globalShortcut';

function useRegisterCommand(shortcut: string, callback: () => void) {
  useEffect(() => {
    async function registerCmd() {
      const isReg = await isRegistered(shortcut)

      if (isReg) {
        return;
      }

      await register(shortcut, callback)
    }

    registerCmd()

  }, [])
}

export default useRegisterCommand
