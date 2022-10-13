import { useEffect, useState } from 'react'
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
import { useRecoilState } from 'recoil'

import { cart } from '../utils/recoil'
import { frutsCardProps } from '../utils/componentTypes'

const FruitsCard = ({ frutData }: frutsCardProps) => {
  const { spacing } = useTheme()
  const [cartData, setCardData] = useRecoilState(cart)
  const [frutCount, setFrutCount] = useState(0)

  useEffect(() => {
    cartData.forEach(product =>
      product.name === frutData.name ? setFrutCount(product.amount) : 0
    )
  }, [cartData])

  const addFrut = () => {
    const newCart = cartData.map(product => {
      const newProduct = {
        ...product,
        amount: product.name === frutData.name ? frutCount + 1 : product.amount,
        Weight:
          product.name === frutData.name
            ? (frutCount + 1) * frutData.Weight
            : product.amount
      }
      return newProduct
    })

    !frutCount &&
      newCart.push({
        amount: 1,
        name: frutData.name,
        Weight: frutData.Weight
      })

    setCardData(newCart)
  }

  const removeFrut = () => {
    if (frutCount > 1)
      setCardData(data =>
        data.map(product => {
          const newProduct = {
            ...product,
            amount:
              product.name === frutData.name ? frutCount - 1 : product.amount,
            Weight:
              product.name === frutData.name
                ? (frutCount - 1) * frutData.Weight
                : product.amount
          }
          return newProduct
        })
      )
    else {
      const newCard = cartData
      const searchProd = newCard.filter(
        product => product.name !== frutData.name
      )
      setCardData(searchProd)
      setFrutCount(0)
    }
  }

  return (
    <Card
      sx={{
        maxWidth: '320px',
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
              <Button disabled={!frutCount} onClick={removeFrut}>
                <b>-</b>
              </Button>
              <Button disabled>{frutCount}</Button>
              <Button onClick={addFrut}>
                <b>+</b>
              </Button>
            </ButtonGroup>
          </Grid>
        </CardActions>
      </div>
    </Card>
  )
}

export default FruitsCard
