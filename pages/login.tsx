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

const login = () => {
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
          Login
        </Typography>
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
            Login
          </Button>
          <Link href={'/register'}>
            <Typography
              sx={{
                cursor: 'pointer'
              }}
              color={palette.primary.main}
            >
              Create account
            </Typography>
          </Link>
        </Grid>
      </Paper>
    </Box>
  )
}

export default login
