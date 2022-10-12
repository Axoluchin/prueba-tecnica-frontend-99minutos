import { frutsProps } from './types'

export interface frutsCardProps {
  frutData: frutsProps
}

export interface cartListProps {
  open: boolean
  anchorEl: HTMLElement | null
  onClose(): void
}
