import { atomFamily } from 'recoil'

export type CodeFamilyProps = {
  code: string
  lines: number
  extension: string
  loaded?: boolean
}

export const codeFamily = atomFamily({
  key: 'codeAtom',
  default: {
    code: '',
    lines: 1,
    extension: '',
    loaded: false,
  } as CodeFamilyProps,
})
