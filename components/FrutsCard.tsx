import {
  Card,
  CardContent,
  Typography,
  useTheme,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  CardActions
} from '@mui/material'
import { frutsCardProps } from '../utils/componentTypes'

const FrutsCard = ({ frutData }: frutsCardProps) => {
  const { spacing } = useTheme()
  return (
    <Card
      sx={{
        maxWidth: '350px',
        margin: spacing(1),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <CardContent>
        <Typography variant="h2" textAlign="center">
          {frutData.frut}
        </Typography>
        <Typography variant="h5">{frutData.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {frutData.desc}
        </Typography>
      </CardContent>
      <div>
        <Divider />
        <CardActions>
          <Grid container justifyContent="center">
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button>
                <b>-</b>
              </Button>
              <Button disabled>0</Button>
              <Button>
                <b>+</b>
              </Button>
            </ButtonGroup>
          </Grid>
        </CardActions>
      </div>
    </Card>
  )
}

export default FrutsCard
