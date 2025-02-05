import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const CheckOutHandler = async (amount) => {

    const {data:{key}} = await axios.get("http://localhost:4000/api/getkey")

    const { data:{order} } = await axios.post("http://localhost:4000/api/checkout", {
      amount,
    });
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Deepali Verma",
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/129045161?v=4",
      order_id: order.id, 
      callback_url: "https://localhost/api/paymentvarification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#068FFF",
      },
    };
    const razor = new window.Razorpay(options);
   
     razor.open();
  };

  return (
    <Box>
      <Stack
        h={"100vh"}
        justifyContent="center"
        alignItems="center"
        direction={["column", "row"]}
      >
        <Card
          amount={5000}
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTygLPnx8zGkTVYZnFHJAAmMSUZMj0gJqt6UQ&s"
          }
          CheckOutHandler={CheckOutHandler}
        />
        <Card
          amount={3000}
          img={
            "https://stylum.in/cdn/shop/files/JOHNYRED_1_56ec4c6c-e072-4901-b3e4-9cf8ae3fe94c.jpg?v=1718200197&width=533"
          }
          CheckOutHandler={CheckOutHandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
