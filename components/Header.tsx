import Image from 'next/image'
import { AppBar, Toolbar, Button, Grid } from '@mui/material'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Image src="/images/logo.webp" width="256" height="64" />
          <Button variant="contained">New Order</Button>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
