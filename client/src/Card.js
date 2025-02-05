import { Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Card = ({amount, img , CheckOutHandler}) => {
  return (
  <VStack>
    <Image src={img} boxSize={"64"} objectFit='cover'/>
    <Text>₹{amount}</Text>
    <Button onClick={()=>CheckOutHandler(amount)}> Buy Now</Button>
  </VStack>
  )
}

export default Card