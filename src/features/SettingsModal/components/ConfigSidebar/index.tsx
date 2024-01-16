import ButtonIcon from '@/components/ButtonIcon'

import ConfigItem from '../ConfigItem'

import { Palette, X, Type } from 'lucide-react'

function ConfigSidebar() {
  return (
    <div className="h-full bg-secondary flex flex-col rounded-md min-w-[20vw] p-2">
      <div className="flex items-center justify-between mb-3">
        <span className="text-editor-primary font-bold text-lg">
          EDITOR CONFIGS
        </span>

        <ButtonIcon unselected>
          <X className="w-7 h-7 text-red-primary" />
        </ButtonIcon>
      </div>

      <div>
        <ConfigItem
          action={() => 0}
          icon={<Palette className="w-6 h-6 text-editor-functions" />}
          text="Theming"
          active
        />
        <ConfigItem
          action={() => 0}
          icon={<Type className="w-6 h-6 text-editor-functions" />}
          text="Fonts"
        />
      </div>
    </div>
  )
}

export default ConfigSidebar
