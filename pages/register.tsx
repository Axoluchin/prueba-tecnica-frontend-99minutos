import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  Grid,
  useTheme
} from '@mui/material'
import Link from 'next/link'

const register = () => {
  const { spacing, palette } = useTheme()
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Paper
        sx={{
          maxWidth: '600px',
          padding: spacing(2)
        }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          sx={{
            marginBottom: spacing(2)
          }}
        >
          Register
        </Typography>
        <TextField
          variant="outlined"
          label="First name"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
        />
        <TextField
          variant="outlined"
          label="Last name"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
        />
        <TextField
          variant="outlined"
          label="Email"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
        />
        <TextField
          variant="outlined"
          label="Password"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
        />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Button
            variant="contained"
            sx={{
              marginY: spacing(1)
            }}
          >
            Register User
          </Button>
          <Link href={'/login'}>
            <Typography
              sx={{
                cursor: 'pointer'
              }}
              color={palette.primary.main}
            >
              Login
            </Typography>
          </Link>
        </Grid>
      </Paper>
    </Box>
  )
}

export default register
