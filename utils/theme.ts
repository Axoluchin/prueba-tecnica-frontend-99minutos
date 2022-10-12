import { createTheme } from '@mui/material'

export const mainTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#406661'
    },
    secondary: {
      main: '#57d131'
    }
  },
  shape: {
    borderRadius: 16
  },
  spacing: 8
})
