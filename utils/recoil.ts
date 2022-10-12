import { atom } from 'recoil'
import { userProps, productProps } from './types'

export const openModalOrder = atom({
  key: 'openModalOrder',
  default: false
})

export const userData = atom<userProps | undefined>({
  key: 'userData',
  default: undefined
})

export const cart = atom<productProps[]>({
  key: 'productsSelected',
  default: []
})
