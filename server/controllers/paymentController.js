import { instance } from "../server.js";

export const checkOut = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    order,
  });
};

export const paymentvarification = async (req, res) => {
  console.log(req.body);

  res.status(200).json({
    success: true,
  });
};
