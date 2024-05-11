import React from "react";
import Card from "./Card";
import { Box, Stack } from "@chakra-ui/react";
import axios from "axios";

const Home = () => {
  
    const checkoutaHandler = async (amount) => {
        try {
          const { data: { key } } = await axios.get("http://localhost:5000/api/getkey");
    
          // Wait for both API calls to complete before using their data
          const { data: { order } } = await axios.post("http://localhost:5000/api/checkout", {
            amount,
          });
    
          const options = {
            key,  // Use key after it's defined from the first API call
            amount: order.amount,
            currency: "INR",
            name: "BldVictry",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id,
            callback_url: "http://localhost:5000/api/paymentverification",
            prefill: {
              name: "Gaurav Kumar",
              email: "gaurav.kumar@example.com",
              contact: "7651895993",
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };
          const razor = new window.Razorpay(options);
          razor.open();
        } catch (error) {
          console.error(error); // Handle errors appropriately
        }
      };




  return (
    <Box>
      <Stack
        direction={["column", "row"]}
        h={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card
          amount={5000}
          img="/samsungs23.webp"
          checkoutaHandler={checkoutaHandler}
        />

        <Card
          amount={3000}
          img="/camra.png"
          checkoutaHandler={checkoutaHandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;





// const checkoutaHandler = async (amount) => {
//     try {
//       const {
//         data: { key },
//       } = await axios.get("http://localhost:5000/api/getkey");

//       const {
//         data: { order },
//       } = await axios.post("http://localhost:5000/api/checkout", {
//         amount,
//       });
//       //   console.log(data);
//     } catch (error) {
//       //   console.log(error);
//     }

//     // console.log(window)

//     const options = {
//       key: key,
//       amount: order.amount,
//       currency: "INR",
//       name: "BldVictry",
//       description: "Test Transaction",
//       image: "https://example.com/your_logo",
//       order_id: order.id,
//       callback_url: "http://localhost:5000/api/paymentverification",
//       prefill: {
//         name: "Gaurav Kumar",
//         email: "gaurav.kumar@example.com",
//         contact: "7651895993",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };
//     const razor = new window.Razorpay(options);
//     razor.open();
//   };