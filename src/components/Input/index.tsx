import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const input = tv({
  base: 'bg-primary border-1 placeholder-gray-500  border-tertiary rounded-md outline-none text-editor-primary text-sm',
  variants: {
    size: {
      sm: 'p-1',
      md: 'p-2',
      lg: 'p-3',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

type InputProps = Omit<ComponentProps<'input'>, 'children'> &
  VariantProps<typeof input>

function Input({ className, size, ...props }: InputProps) {
  return <input {...props} className={input({ className, size })} />
}

export default Input
