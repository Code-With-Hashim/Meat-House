
import axios from "axios"
import sa from "../css.Module/PaymentPage.module.css"

import React from 'react'
import { useState,useEffect } from "react";
import { Box, Button, Image, Select, Stack, Text, useToast } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BsFillCircleFill } from "react-icons/bs"
import { RxCross1 } from "react-icons/rx"
import {BiRupee} from "react-icons/bi"
import {AiFillCheckCircle} from "react-icons/ai"
import Subtotal from "../components/Subtotal";
import { useSelector } from "react-redux";

const Paymentpage = () => {
const [cart, setCart] = useState([]);
const toast = useToast()
const USER_TOKEN = useSelector((store) => store.AuthReducer.token);
const AuthStr = `Bearer ${USER_TOKEN}`;
  const getData = async () => {
    await axios
      .get("http://localhost:8080/cart", {
        headers: { Authorization: AuthStr },
      })
      .then((res) => {
        setCart(res.data.Cart);
        // total(cart);
        // setCartreload((pre) => pre + 1);
      })
      .then((res) => {
        // setSubTotal(total(cart));
      });
  };
   useEffect(() => {
    getData();
  }, []);
  return (
    <Box>
        <>




<Box className={sa.address}  >

    <Box className={sa.address_container}>
        <Box  className={sa.payment}>
        <Box padding="5px" fontWeight="bold"
            gap="20px"
            flexDirection="column"
             display="flex" textAlign="left" >
                <Text colorScheme="grey" fontSize="15px">Saved Payment</Text>
                <hr />
            </Box>
            <Box padding="5px" fontWeight="bold"
            gap="20px"
            flexDirection="column"
             display="flex" textAlign="left" >
                <Text fontSize="15px">Paytm</Text>
                <hr />
            </Box>
            <Box padding="5px" fontWeight="bold"
            gap="20px"
            flexDirection="column"
             display="flex" textAlign="left" >
                <Text fontSize="15px">Amazon Pay</Text>
                <hr />
            </Box>
            
            <Box padding="5px" fontWeight="bold"
            gap="20px"
            flexDirection="column"
             display="flex" textAlign="left" >
                <Text fontSize="15px">Pay Using UPI</Text>
                <hr />
            </Box>
            <Box padding="5px" fontWeight="bold"
            gap="20px"
            flexDirection="column"
             display="flex" textAlign="left" >
                <Text fontSize="15px">Credit Cards/Debit Cards</Text>
                <hr />
            </Box>
            <Box padding="5px" fontWeight="bold"
            gap="20px"
            flexDirection="column"
             display="flex" textAlign="left" >
                <Text fontSize="15px">CRED Pay</Text>
                <hr />
            </Box>
            <Box padding="5px" fontWeight="bold"
            gap="20px"
            flexDirection="column"
             display="flex" textAlign="left" >
                <Text fontSize="15px">Sedexo Food Cards</Text>
                <hr />
            </Box>
            <Box padding="5px" fontWeight="bold"
            gap="20px"
            flexDirection="column"
             display="flex" textAlign="left" >
                <Text fontSize="15px">Other Wallets</Text>
                <hr />
            </Box>
            <Box borderRight="5px solid green" padding="5px" fontWeight="bold"
            gap="20px"
            flexDirection="column"
             display="flex" textAlign="left" >
                <Text color="red" fontSize="15px">Cash On Delivery</Text>
                <hr />
            </Box>
            <Box padding="5px" fontWeight="bold"
            gap="20px"
            flexDirection="column"
             display="flex" textAlign="left" >
                <Text fontSize="15px">Pay Online On Delivery</Text>
                <hr />
            </Box>


        
        </Box>
        <Box className={sa.payment1}>

            <Text fontWeight="bold" fontSize="25px">Cash On Delivery</Text>
            <Box marginLeft="0px">
        <Box margin="auto" padding="10px" border="1px dashed green" borderRadius="10px"   width="100%">
        <Text fontWeight="black" fontSize="20px">BILL DETAILS</Text>
        <Box gap="10px" flexDirection="column" display="flex" justifyContent="space-between" >
          <Box fontSize="16px" justifyContent="space-between" display="flex">
            <Text>Subtotal</Text>
            <Text><Subtotal cart={cart} Ship={0}/></Text>
          </Box>
          <Box fontSize="16px" justifyContent="space-between" display="flex">
            <Text>Delevery charge</Text>
            <Text>50</Text>
          </Box>
          <Box fontSize="16px" justifyContent="space-between" display="flex">
            <Text>Discount</Text>
            <Text>0</Text>
          </Box>
          <hr />

          <Box fontWeight="bold" fontSize="16px" justifyContent="space-between" display="flex">
            <Text >Total</Text>
            <Text alignItems="center" display="flex"><BiRupee /><Subtotal cart={cart} Ship={50}/></Text>
          </Box>

        </Box>
      </Box>
        </Box>
            <Image src="https://www.licious.in/img/rebranding/Cash_on_delivery.png"/>
            <Link to="/"><Button  onClick={() =>
        toast({
          title: 'Order Placed.',
          description: "We've deliver soon.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      } colorScheme="red">Place Order</Button></Link>

            
        </Box>


    </Box>


    <Box >
        <Box className={sa.progress} padding="20px" >
            <Box alignItems="center" gap="20px" marginLeft="50px" display="flex"  marginBottom="5px">
            <Text  fontSize="20px" color="green"><  AiFillCheckCircle /></Text>
                <Text  fontSize="20px" color="black">Choose Address</Text>
                <Link to="/address"><Text color="red">(change) </Text></Link>
            </Box>
            <Box marginLeft="57.5px" borderLeft="3px solid #008000" h="110px"></Box>
            <Box alignItems="center" gap="20px" marginLeft="50px" display="flex"   marginBottom="5px">
            <Text  fontSize="20px" color="green"><  AiFillCheckCircle /></Text>
                <Text fontSize="20px" color="black">Delivery Summary</Text>
                <Link to="/summary"><Text color="red">(edit) </Text></Link>
            </Box>
            <Box marginLeft="57.5px" borderLeft="3px solid #008000" h="110px"></Box>
            <Box alignItems="center" gap="20px" marginLeft="50px" display="flex" color="red" fontSize="20px" marginBottom="5px">
                <  BsFillCircleFill />
                <Text color="#CBCBCB">Payment Method</Text>
            </Box>




        </Box>
        
       
    </Box>


</Box>
<Footer />
</>
    </Box>
  )
}

export default Paymentpage