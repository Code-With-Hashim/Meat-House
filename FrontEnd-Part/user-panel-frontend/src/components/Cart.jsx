import React from 'react'
import { BsCart2 } from "react-icons/bs"
import { ImCancelCircle } from 'react-icons/im'
import sa from "../css.Module/Cart.module.css"
import { RxCross1 } from "react-icons/rx"
import { BiRupee } from "react-icons/bi"

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Text,
  Box,
  Stack,
  VStack,
  StackDivider,
  Image,
  Link,
} from '@chakra-ui/react'

const CartData = () => {
  return (
    <>
      <Box className={sa.added_product}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" gap="20px" >
            <Text textAlign="center" boxSize="30px" backgroundColor="#f2f2f2" fontSize="16px">1</Text>
            <Text fontWeight="bold" fontSize="16px" color="black">Chicken Curry Cut large </Text>


          </Box>
          <Box><RxCross1 /></Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" gap="10px" marginLeft="50px">
            <Text color="blackAlpha.700" borderRadius="5px" padding="0px 10px 0px 10px" height="fit-content" fontSize="14px" border="1px solid black">500gms</Text>
            <Text color="#d11243" alignItems="baseline" justifyContent="center" display="flex"><BiRupee fontSize="13px" />322</Text>
            <Text color="blackAlpha.600" alignItems="baseline" display="flex" textDecoration="line-through"><BiRupee fontSize="13px" />200</Text>
          </Box>
          <Box justifyItems="center" gap="2px" display="flex">

            <Button boxSize="20px">-</Button>
            <Text>1</Text>
            <Button boxSize="20px">+</Button>
          </Box>
        </Box>
        <hr />


      </Box>
      <Box className={sa.added_product}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" gap="20px" >
            <Text textAlign="center" boxSize="30px" backgroundColor="#f2f2f2" fontSize="16px">1</Text>
            <Text fontWeight="bold" fontSize="16px" color="black">Chicken Curry Cut large </Text>


          </Box>
          <Box><RxCross1 /></Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" gap="10px" marginLeft="50px">
            <Text color="blackAlpha.700" borderRadius="5px" padding="0px 10px 0px 10px" height="fit-content" border="1px solid black" fontSize="14px">500gms</Text>
            <Text color="#d11243" alignItems="baseline" justifyContent="center" display="flex"><BiRupee fontSize="13px" />322</Text>
            <Text color="blackAlpha.600" alignItems="baseline" display="flex" textDecoration="line-through"><BiRupee fontSize="13px" />200</Text>
          </Box>
          <Box justifyItems="center" gap="2px" display="flex">

            <Button boxSize="20px">-</Button>
            <Text>1</Text>
            <Button boxSize="20px">+</Button>
          </Box>
        </Box>
        <hr />


      </Box>
    </>
  )
}
const Join = () => {
  return (
    <>
      <Box flexDirection="column" display='flex' marginTop="10px" h="100px" w="100%" >
        <Box>
          <Text textAlign="left" margin="10px 15px" fontSize="14px" >Stop paying delivery charges. Join Meatopia today!</Text>

        </Box>
        <Box alignItems="center" borderRadius="10px" border="1px solid black" backgroundColor="#ffdc93" padding="10px" justifyContent="space-between" display="flex">
          <Box>
            <Image width="80%" src='https://www.licious.in/img/rebranding/licious-logo.svg' />

          </Box>
          <Box>
            <Text fontSize="20px">Join Now </Text>
          </Box>

        </Box>
      </Box>
    </>
  )
}

const CartAdd = () => {
  return (
    <>
      <Box padding="5px"><Text>You May Want To Try</Text></Box>
      <Box className={sa.product_cart} w="100%">
        <Box h="235px" w="166px">
          <Box position="relative" textAlign="center" >
            <Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4090ccb0-40d0-43b0-3402-0d5eea1d9383/original/Chicken-Leg-Curry-Cut-(Large---4-pieces)-Hero-Shot_(1).jpg' />
            <Text border="1px solid red" padding='3px' fontSize="12px" backgroundColor="white" color="red" left="120px" top="2px" position="absolute">5 %Off</Text>

          </Box>
          <Text marginTop="10px" fontSize="13px" color="black">Chicken Leg Curry Cut - Medium Pieces</Text>
          <Box marginTop="10px" fontSize="13px" gap="10px" display="flex">
            <Text borderRight="1px solid grey" paddingRight="20px"  >300gms</Text>
            <Text alignItems="center" display="flex"><BiRupee />150</Text>
            <Text textDecoration="line-through" alignItems="center" display="flex" ><BiRupee />180</Text>
          </Box>
          <Button marginTop="5px" size="sm" colorScheme='red' variant='outline'>
            ADD
          </Button>
        </Box>
        <Box h="235px" w="166px">
          <Box position="relative" textAlign="center" >
            <Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4090ccb0-40d0-43b0-3402-0d5eea1d9383/original/Chicken-Leg-Curry-Cut-(Large---4-pieces)-Hero-Shot_(1).jpg' />
            <Text border="1px solid red" padding='3px' fontSize="12px" backgroundColor="white" color="red" left="120px" top="2px" position="absolute">5 %Off</Text>

          </Box>
          <Text marginTop="10px" fontSize="13px" color="black">Chicken Leg Curry Cut - Medium Pieces</Text>
          <Box marginTop="10px" fontSize="13px" gap="10px" display="flex">
            <Text borderRight="1px solid grey" paddingRight="20px"  >300gms</Text>
            <Text alignItems="center" display="flex"><BiRupee />150</Text>
            <Text textDecoration="line-through" alignItems="center" display="flex" ><BiRupee />180</Text>
          </Box>
          <Button marginTop="5px" size="sm" colorScheme='red' variant='outline'>
            ADD
          </Button>
        </Box>
        <Box h="235px" w="166px">
          <Box position="relative" textAlign="center" >
            <Image src='https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4090ccb0-40d0-43b0-3402-0d5eea1d9383/original/Chicken-Leg-Curry-Cut-(Large---4-pieces)-Hero-Shot_(1).jpg' />
            <Text border="1px solid red" padding='3px' fontSize="12px" backgroundColor="white" color="red" left="120px" top="2px" position="absolute">5 %Off</Text>

          </Box>
          <Text marginTop="10px" fontSize="13px" color="black">Chicken Leg Curry Cut - Medium Pieces</Text>
          <Box marginTop="10px" fontSize="13px" gap="10px" display="flex">
            <Text borderRight="1px solid grey" paddingRight="20px"  >300gms</Text>
            <Text alignItems="center" display="flex"><BiRupee />150</Text>
            <Text textDecoration="line-through" alignItems="center" display="flex" ><BiRupee />180</Text>
          </Box>
          <Button marginTop="5px" size="sm" colorScheme='red' variant='outline'>
            ADD
          </Button>
        </Box>






      </Box>
    </>
  )
}
const BottomCart = () => {
  return (
    <>
      <Box className={sa.BottomCart}>
        <Box height='60%' width="100%" backgroundColor='white' padding="10px" display="flex" justifyContent="space-between">
          <Box gap="20px" display="flex">
            <Image w="25px" h="25px" src='https://www.licious.in/img/rebranding/map-icon.png' />
            <Text fontWeight="bold" fontSize="20px">Delivery Address</Text>
          </Box>
          <Box>
            <Text fontSize="13px" color="#D11243">change address</Text>

          </Box>
        </Box>
        <Box padding="0px 10px 0px 10px" justifyContent="space-between " display="flex" className={sa.proceed}>
          <Text fontWeight="bold" fontSize="16px" alignItems="center" display="flex">Total:  <BiRupee /> 265</Text>
          <Button colorScheme="red">Proceed to checkout</Button>
        </Box>
      </Box>
    </>
  )
}
const TotalAmount = () => {
  return (
    <>
      <Box padding="10px" marginTop='20px' borderRadius="10px" marginBottom="150px" border="1px dashed black" height="130px" width="100%">
        <Text fontWeight="black" fontSize="14px">BILL DETAILS</Text>
        <Box gap="5px" flexDirection="column" display="flex" justifyContent="space-between" >
          <Box fontSize="12px" justifyContent="space-between" display="flex">
            <Text>Subtotal</Text>
            <Text>179</Text>
          </Box>
          <Box fontSize="12px" justifyContent="space-between" display="flex">
          <Text>Delevery charge</Text>
            <Text>50</Text>
          </Box>
          <Box fontSize="12px" justifyContent="space-between" display="flex">
          <Text>Discount</Text>
            <Text>0</Text>
          </Box>
          <hr />

          <Box fontWeight="bold" fontSize="12px" justifyContent="space-between" display="flex">
            <Text >Total</Text>
            <Text alignItems="center" display="flex"><BiRupee/>200</Text>
          </Box>

        </Box>
      </Box>
    </>
  )
}
function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='red' onClick={onOpen}>
        <BsCart2 />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"

      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#fbfbfb">

          <DrawerHeader  ><span>
            < ImCancelCircle style={{ marginLeft: "-70px", fontSize: "35px", color: "white", cursor: "pointer" }} onClick={onClose} />
          </span>
            <Text fontWeight="bold" fontSize="25px" marginTop="-35px" >Order Summary</Text>

          </DrawerHeader>


          <DrawerBody>

            <VStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={4}
              align='stretch'
            >
              <Box className={sa.discount_banner} >
                <Text fontSize="13px" textAlign="center" color="white"  >Congratulations, Your delivery charge is waived off!!!</Text>

              </Box>

              <Box className={sa.discount_banner2} >
                <Text fontSize="13px" textAlign="center" >Congratulations! You've saved ₹20</Text>

              </Box>
            </VStack>
            <CartData />
            <Join />
            <CartAdd />
            <TotalAmount />
            <BottomCart />









          </DrawerBody>


        </DrawerContent>
      </Drawer>
    </>
  )
}

const Cart = () => {
  return (
    <div >
      <DrawerExample />


    </div>
  )
}
export default Cart
