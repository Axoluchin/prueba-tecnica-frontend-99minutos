import { Box, Typography, Grid } from '@mui/material'

import Header from '../components/Header'
import FrutsCard from '../components/FrutsCard'
import frutList from '../utils/frutsList.json'

const Home = () => {
  return (
    <Box>
      <Header />
      <Typography variant="h2">Fruts Shop</Typography>
      <Grid container justifyContent="space-around" wrap="wrap">
        {frutList.map(frut => (
          <FrutsCard key={frut.name} frutData={frut} />
        ))}
      </Grid>
    </Box>
  )
}

export default Home
