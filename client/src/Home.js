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
      </Stack>
    </Box>
  )
}

export default Home