import {
  Card,
  CardContent,
  Typography,
  useTheme,
  Button,
  ButtonGroup,
  Divider,
  Grid
} from '@mui/material'
import { frutsCardProps } from '../utils/componentTypes'

const FrutsCard = ({ frutData }: frutsCardProps) => {
  const { spacing } = useTheme()
  return (
    <Card
      sx={{
        maxWidth: '350px',
        margin: spacing(1)
      }}
    >
      <CardContent
        sx={{
          height: '100%'
        }}
      >
        <Typography variant="h2" textAlign="center">
          {frutData.frut}
        </Typography>
        <Typography variant="h5">{frutData.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {frutData.desc}
        </Typography>
        <Divider />
        <Grid container justifyContent="center">
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            sx={{
              marginTop: spacing(1)
            }}
          >
            <Button>
              <b>-</b>
            </Button>
            <Button disabled>0</Button>
            <Button>
              <b>+</b>
            </Button>
          </ButtonGroup>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default FrutsCard
