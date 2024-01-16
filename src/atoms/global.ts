import { atom, selector } from 'recoil'

import { FileTab } from '@/features/Header/types/FileTabs'

type SelectedFileProps = {
  loading?: boolean
} & FileTab

export const selectedFile = atom<SelectedFileProps | null>({
  key: 'selectedFile',
  default: null,
})

export const selectedFileValue = selector({
  key: 'selectedFileValue',
  get: ({ get }) => get(selectedFile),
})
