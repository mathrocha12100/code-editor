import { PropsWithChildren } from 'react'

function InputRoot({ children }: PropsWithChildren) {
  return <div className="relative">{children}</div>
}

export default InputRoot
