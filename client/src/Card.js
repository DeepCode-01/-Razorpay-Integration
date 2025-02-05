import { Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Card = ({amount, img , CheckOutHandler}) => {
  return (
  <VStack>
    <Image src={img} boxSize={"65"} objectFit='cover'/>
    <Text>₹{amount}</Text>
    <Button onClick={CheckOutHandler}> Buy Now</Button>
  </VStack>
  )
}

export default Card