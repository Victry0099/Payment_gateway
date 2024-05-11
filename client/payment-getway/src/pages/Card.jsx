import React from 'react'
import { VStack, Image, Button, Text} from "@chakra-ui/react"


const Card = ({amount, img, img1, checkoutaHandler}) => {
  return (
    <VStack>
   <Image src={img} alt="no image" boxSize={"60"} objectFit={'cover'}/>
   <Text>₹{amount}</Text>
   <Button onClick={()=>checkoutaHandler(amount)}>  Buy Now</Button>
    </VStack>
  )
}

export default Card
