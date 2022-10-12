import { Box, Typography, Grid } from '@mui/material'

import Header from '../components/Header'
import FruitsCard from '../components/FruitsCard'
import fruitList from '../utils/fruitsList.json'

const Home = () => {
  return (
    <Box>
      <Header />
      <Typography variant="h2">Fruits Shop for you</Typography>
      <Grid container justifyContent="space-around" wrap="wrap">
        {fruitList.map(frut => (
          <FruitsCard key={frut.name} frutData={frut} />
        ))}
      </Grid>
    </Box>
  )
}

export default Home
