import { FileTab } from '@/features/Header/types/FileTabs'
import { atom, selector } from 'recoil'

export const fileTabs = atom<FileTab[]>({
  default: [],
  key: 'fileTabs',
})

export const fileTabsValue = selector({
  key: 'fileTabsValue',
  get: ({ get }) => get(fileTabs),
})
