import { useState, useEffect } from 'react'
import {
  Modal,
  Typography,
  Paper,
  useTheme,
  Button,
  Grid,
  TextField
} from '@mui/material'
import { useRecoilState, useSetRecoilState } from 'recoil'
import axios from 'axios'

import { orderFormProps } from '../utils/types'
import modalProps from '../utils/componentTypes'
import { cart, userData, idOrderList } from '../utils/recoil'

const ModalNewOrder = ({ onClose, open }: modalProps) => {
  const [cartData] = useRecoilState(cart)
  const [user] = useRecoilState(userData)
  const idOrders = useSetRecoilState(idOrderList)
  const [orderData, setOrderData] = useState<orderFormProps>({
    DestinationAddress: {
      City: '',
      Coordinates: '',
      ExNumber: '',
      FirstName: '',
      InNumber: '',
      LastName: '',
      Neighbourhood: '',
      PhoneNumber: '',
      State: '',
      Street: '',
      ZipCode: ''
    },
    Products: cartData
  })
  const { spacing } = useTheme()

  useEffect(() => {
    setOrderData(data => ({ ...data, Products: cartData }))
  }, [cartData])

  const submitData = () => {
    const token = Buffer.from(
      `${user?.Email}:${user?.Password}`,
      'utf8'
    ).toString('base64')
    axios
      .post(`${process.env.NEXT_PUBLIC_API}/orders/create`, orderData, {
        headers: {
          Authorization: `Basic ${token}`
        }
      })
      .then(result => {
        console.log(result)
        idOrders(data => [result.data.Order.ID, ...data])
        alert('Save Order')
        onClose()
      })
      .catch(err => console.log(err))
  }
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Paper
        sx={{
          maxWidth: '600px',
          minWidth: '50%',
          padding: spacing(2),
          overflow: 'auto',
          maxHeight: '90%'
        }}
      >
        <Typography variant="h3">New Order</Typography>
        <TextField
          label="First name"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
          onChange={event =>
            setOrderData(data => ({
              ...data,
              DestinationAddress: {
                ...data.DestinationAddress,
                FirstName: event.target.value
              }
            }))
          }
        />
        <TextField
          label="Last name"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
          onChange={event =>
            setOrderData(data => ({
              ...data,
              DestinationAddress: {
                ...data.DestinationAddress,
                LastName: event.target.value
              }
            }))
          }
        />
        <TextField
          label="Phone number"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
          onChange={event =>
            setOrderData(data => ({
              ...data,
              DestinationAddress: {
                ...data.DestinationAddress,
                PhoneNumber: event.target.value
              }
            }))
          }
        />
        <TextField
          label="State"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
          onChange={event =>
            setOrderData(data => ({
              ...data,
              DestinationAddress: {
                ...data.DestinationAddress,
                State: event.target.value
              }
            }))
          }
        />
        <TextField
          label="Zip Code"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
          onChange={event =>
            setOrderData(data => ({
              ...data,
              DestinationAddress: {
                ...data.DestinationAddress,
                ZipCode: event.target.value
              }
            }))
          }
        />
        <TextField
          label="City"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
          onChange={event =>
            setOrderData(data => ({
              ...data,
              DestinationAddress: {
                ...data.DestinationAddress,
                City: event.target.value
              }
            }))
          }
        />
        <TextField
          label="Neighbourhood"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
          onChange={event =>
            setOrderData(data => ({
              ...data,
              DestinationAddress: {
                ...data.DestinationAddress,
                Neighbourhood: event.target.value
              }
            }))
          }
        />
        <TextField
          label="Street"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
          onChange={event =>
            setOrderData(data => ({
              ...data,
              DestinationAddress: {
                ...data.DestinationAddress,
                Street: event.target.value
              }
            }))
          }
        />
        <TextField
          label="ExNumber"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
          onChange={event =>
            setOrderData(data => ({
              ...data,
              DestinationAddress: {
                ...data.DestinationAddress,
                ExNumber: event.target.value
              }
            }))
          }
        />
        <TextField
          label="InNumber"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
          onChange={event =>
            setOrderData(data => ({
              ...data,
              DestinationAddress: {
                ...data.DestinationAddress,
                InNumber: event.target.value
              }
            }))
          }
        />
        <TextField
          label="Coordinates"
          fullWidth
          sx={{
            marginY: spacing(1)
          }}
          onChange={event =>
            setOrderData(data => ({
              ...data,
              DestinationAddress: {
                ...data.DestinationAddress,
                Coordinates: event.target.value
              }
            }))
          }
        />
        <Grid container justifyContent="space-between">
          <Button onClick={onClose}>Exit</Button>
          <Button onClick={submitData}>Submit Order</Button>
        </Grid>
      </Paper>
    </Modal>
  )
}

export default ModalNewOrder
