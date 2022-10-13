import { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  IconButton
} from '@mui/material'
import { Delete } from '@mui/icons-material'
import { useRecoilState } from 'recoil'
import axios from 'axios'

import { idOrderList, userData } from '../utils/recoil'
import { orderProps } from '../utils/types'

const Orders = () => {
  const [ordersID] = useRecoilState(idOrderList)
  const [user] = useRecoilState(userData)
  const [ordersDetail, setUnkowData] = useState<orderProps[]>([])
  const token = Buffer.from(
    `${user?.Email}:${user?.Password}`,
    'utf8'
  ).toString('base64')

  useEffect(() => {
    Promise.all(
      ordersID.map(order => {
        return axios.get(`${process.env.NEXT_PUBLIC_API}/orders/${order}`, {
          headers: {
            Authorization: `Basic ${token}`
          }
        })
      })
    ).then(responses => {
      const filteredResponses = responses
        .filter(res => res.status === 200)
        .map(data => data.data.Order)
      setUnkowData(filteredResponses)
    })
  }, [ordersID])

  return (
    <Box>
      <Typography variant="h3" textAlign="center">
        Orders
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Create Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Package size</TableCell>
              <TableCell>Refund</TableCell>
              <TableCell>Products</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersDetail.map(order => (
              <TableRow key={order.ID}>
                <TableCell>{order.ID}</TableCell>
                <TableCell>
                  {new Date(order.CreatedAt).toLocaleDateString()}
                </TableCell>
                <TableCell>{order.Status}</TableCell>
                <TableCell>{order.PackageSize}</TableCell>
                <TableCell>{order.Refund ? 'Yes' : 'No'}</TableCell>
                <TableCell>{order.Products.length}</TableCell>
                <TableCell width={10}>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Orders
