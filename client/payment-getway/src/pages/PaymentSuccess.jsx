import React from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
const searchQuery= useSearchParams()[0]
// console.log(searchQuery.get("reference"))
const referenceNum = searchQuery.get("reference")
  return (
    <Box>
      <VStack h={"100vh"} justifyContent={"center"}>
        <Heading textTransform={"uppercase"}>Order Successfull</Heading>

        <Text>reference No.{referenceNum}</Text>
      </VStack>
    </Box>
  );
};

export default PaymentSuccess;
