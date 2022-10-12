import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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

const Header = () => {
  const [cartData] = useRecoilState(cart)
  const [user] = useRecoilState(userData)
  const { spacing } = useTheme()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
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
            <Link href="/register">
              <Button
                variant="contained"
                sx={{
                  marginLeft: spacing(2)
                }}
              >
                {user ? 'New Order' : 'Register for order'}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
      <CartList open={open} anchorEl={anchorEl} onClose={handleClose} />
    </AppBar>
  )
}

export default Header
