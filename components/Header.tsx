import Image from 'next/image'
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  Badge,
  useTheme,
  IconButton
} from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { useRecoilState } from 'recoil'

import { cart } from '../utils/recoil'

const Header = () => {
  const [cartData] = useRecoilState(cart)
  const { spacing } = useTheme()
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Image src="/images/logo.webp" width="256" height="64" />
          <Grid alignItems="center" justifyContent="center">
            <IconButton>
              <Badge badgeContent={cartData.length} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <Button
              variant="contained"
              sx={{
                marginLeft: spacing(2)
              }}
            >
              New Order
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
