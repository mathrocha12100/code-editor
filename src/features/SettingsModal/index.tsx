import Modal from '@/components/Modal'

import ConfigSidebar from './components/ConfigSidebar'
import ConfigBody from './components/ConfigBody'

type SettingsModalProps = {
  open: boolean
  setOpen: () => void
}

function SettingsModal({ open, setOpen }: SettingsModalProps) {
  return (
    <Modal full open={open} onClose={setOpen}>
      <div className="p-1.5 h-screen w-screen flex gap-1.5 overflow-hidden bg-primary bg-opacity-70">
        <ConfigSidebar />
        <ConfigBody />
      </div>
    </Modal>
  )
}

export default SettingsModal
