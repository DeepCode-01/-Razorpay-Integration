import React from 'react'
import {Box , Stack} from "@chakra-ui/react"
import Card from './Card'


const Home = () => {
const CheckOutHandler =()=>{

}

  return (
    <Box>
      <Stack direction={'row'}>
    <Card amount={5000} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTygLPnx8zGkTVYZnFHJAAmMSUZMj0gJqt6UQ&s"} CheckOutHandler={CheckOutHandler}/>
    <Card amount={3000} img={"https://stylum.in/cdn/shop/files/JOHNYRED_1_56ec4c6c-e072-4901-b3e4-9cf8ae3fe94c.jpg?v=1718200197&width=533"} CheckOutHandler={CheckOutHandler}/>
      </Stack>
    </Box>
  )
}

export default Home