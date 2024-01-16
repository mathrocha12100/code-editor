import { tv, VariantProps } from 'tailwind-variants'

const configItem = tv({
  base: 'mb-2 p-2 bg-primary flex items-center rounded-md hover:opacity-70 cursor-pointer',
  variants: {
    active: {
      true: 'border-1 border-tertiary',
    },
  },
})

type ConfigItemProps = {
  text: string
  icon: JSX.Element
  action: () => void
} & VariantProps<typeof configItem>

function ConfigItem({ action, icon, active, text }: ConfigItemProps) {
  return (
    <div className={configItem({ active })} onClick={action}>
      {icon}
      <span className="text-sm text-editor-primary select-none ml-2">
        {text}
      </span>
    </div>
  )
}

export default ConfigItem
