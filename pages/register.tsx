import { useState } from 'react'
import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  Grid,
  useTheme
} from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'

import { userData } from '../utils/recoil'
import { registerProps } from '../utils/types'

const register = () => {
  const [formData, setFormData] = useState<registerProps>({
    Email: '',
    FirstName: '',
    IsAdmin: false,
    LastName: '',
    Password: ''
  })
  const setUserData = useSetRecoilState(userData)
  const router = useRouter()
  const { spacing } = useTheme()

  const submit = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/users/create`, formData)
      .then(response => {
        alert(response.data.message)
        router.push('/')
        setUserData(formData)
      })
      .catch(err => console.log(err))
  }

  return (
    <Box
      sx={{
        height: '90vh',
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
          onChange={value =>
            setFormData(data => ({ ...data, FirstName: value.target.value }))
          }
        />
        <TextField
          variant="outlined"
          label="Last name"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
          onChange={value =>
            setFormData(data => ({ ...data, LastName: value.target.value }))
          }
        />
        <TextField
          variant="outlined"
          label="Email"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
          onChange={value =>
            setFormData(data => ({ ...data, Email: value.target.value }))
          }
        />
        <TextField
          variant="outlined"
          label="Password"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
          onChange={value =>
            setFormData(data => ({ ...data, Password: value.target.value }))
          }
        />
        <Grid container justifyContent="center">
          <Button
            variant="contained"
            sx={{
              marginY: spacing(1)
            }}
            onClick={submit}
          >
            Register User
          </Button>
        </Grid>
      </Paper>
    </Box>
  )
}

export default register
