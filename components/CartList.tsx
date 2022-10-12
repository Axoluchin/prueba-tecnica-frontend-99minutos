import {
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
  useTheme
} from '@mui/material'
import { useRecoilState } from 'recoil'

import { cart } from '../utils/recoil'
import { cartListProps } from '../utils/componentTypes'

const CartList = ({ open, anchorEl, onClose }: cartListProps) => {
  const [cartData] = useRecoilState(cart)
  const { spacing } = useTheme()
  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      PaperProps={{
        style: {
          maxHeight: 48 * 4.5,
          width: '20ch'
        }
      }}
    >
      <MenuItem>
        <Grid container justifyContent="space-between">
          <Typography>Product</Typography>
          <Typography
            sx={{
              marginLeft: spacing(2)
            }}
          >
            Count
          </Typography>
        </Grid>
      </MenuItem>
      <Divider />
      {cartData.map(product => (
        <MenuItem key={product.name}>
          <Grid container justifyContent="space-between">
            <Typography>{product.name}</Typography>
            <Typography
              sx={{
                marginLeft: spacing(2)
              }}
            >
              {product.amount}
            </Typography>
          </Grid>
        </MenuItem>
      ))}
    </Menu>
  )
}

export default CartList
