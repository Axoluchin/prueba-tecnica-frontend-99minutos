import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  Badge,
  useTheme,
  IconButton,
  Typography
} from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'

import { useRecoilState } from 'recoil'
import { cart, userData } from '../utils/recoil'
import CartList from './CartList'
import ModalNewOrder from './ModalNewOrder'

const Header = () => {
  const [cartData] = useRecoilState(cart)
  const [user] = useRecoilState(userData)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [openModalOrder, setOpenModalOrder] = useState(false)
  const { spacing } = useTheme()
  const router = useRouter()
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Image
              src="/images/logo.webp"
              width="256"
              height="64"
              style={{
                cursor: 'pointer'
              }}
            />
          </Link>
          <Grid alignItems="center" justifyContent="center">
            {user && (
              <Typography display="inline">
                {user.FirstName} {user.LastName}
              </Typography>
            )}
            <IconButton
              onClick={handleClick}
              disabled={!cartData.length}
              sx={{
                marginLeft: spacing(2)
              }}
            >
              <Badge badgeContent={cartData.length} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <Button
              variant="contained"
              sx={{
                marginLeft: spacing(2)
              }}
              onClick={
                () =>
                  user ? setOpenModalOrder(true) : router.push('/register')
                // setOpenModalOrder(true)
              }
            >
              {user ? 'New Order' : 'Register for order'}
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
      <CartList open={open} anchorEl={anchorEl} onClose={handleClose} />
      <ModalNewOrder
        open={openModalOrder}
        onClose={() => setOpenModalOrder(false)}
      />
    </AppBar>
  )
}

export default Header
