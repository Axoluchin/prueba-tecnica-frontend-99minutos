import { Box, Typography, Grid } from '@mui/material'

import FruitsCard from '../components/FruitsCard'
import fruitList from '../utils/fruitsList.json'

const Home = () => {
  return (
    <Box>
      <Typography variant="h2">Fruits Shop for you</Typography>
      <Grid
        container
        justifyContent="space-around"
        wrap="wrap"
        sx={{
          maxWidth: '1100px',
          margin: '0 auto'
        }}
      >
        {fruitList.map(frut => (
          <FruitsCard key={frut.name} frutData={frut} />
        ))}
      </Grid>
    </Box>
  )
}

export default Home
