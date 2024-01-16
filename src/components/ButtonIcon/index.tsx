import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const buttonIcon = tv({
  base: 'p-2 hover:opacity-100 transition-opacity',
  variants: {
    unselected: {
      true: 'opacity-40',
    },
  },
})

type ButtonIconProps = ComponentProps<'button'> &
  VariantProps<typeof buttonIcon>

function ButtonIcon({
  children,
  unselected,
  className,
  ...rest
}: ButtonIconProps) {
  return (
    <button
      tabIndex={-1}
      className={buttonIcon({ unselected, className })}
      {...rest}
    >
      {children}
    </button>
  )
}

export default ButtonIcon
