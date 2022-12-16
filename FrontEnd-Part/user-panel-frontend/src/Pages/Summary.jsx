
import { Box, Button, Image, Select, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BsFillCircleFill } from "react-icons/bs"
import sa from "../css.Module/Summary.module.css"
import { RxCross1 } from "react-icons/rx"
import {BiRupee} from "react-icons/bi"



const Summary = () => {
    return (
        <>

            <Navbar />


            <Box className={sa.address}  >

                <Box className={sa.address_container}>
                    <Box gap="10px" flexDirection="column" display="flex" w="60%">
                        <Text textAlign="left" fontSize="20px">1 Item Delivered Tomorrow (17 December)</Text>
                        <Stack spacing={3}>

                            <Select placeholder='Select Delevery Slots'>
                                <option value='option1'>7 AM  to 10 AM</option>
                                <option value='option2'>10 AM to 1 PM</option>
                                <option value='option3'>1 PM  to 4 PM</option>
                                <option value='option1'>4 PM  to 7 PM</option>
                                <option value='option2'>7 PM  to 10 PM</option>
                            </Select>
                        </Stack>
                        <Box>
                            <Box display="flex" justifyContent="space-between">
                                <Box display="flex" gap="20px" >
                                    <Image w="50px" h="50px" src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac53a507-4bdd-92cd-ee0b-c96281e04999/original/chicken-curry-cut.jpg"/>
                                    {/* <Text textAlign="center" boxSize="30px" backgroundColor="#f2f2f2" fontSize="16px">1</Text> */}
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

                                    
                                    <Text>Quantity:1</Text>
                                    
                                </Box>
                            </Box>
                        </Box>
                        <Box justifyContent="left" display="grid">
                        <Button colorScheme='red' >Proceed to Payment</Button>
                        </Box>
                        

                    </Box>


                </Box>


                <Box >
                    <Box padding="20px" >
                        <Box alignItems="center" gap="20px" marginLeft="50px" display="flex" color="green" fontSize="20px" marginBottom="5px">
                            <  BsFillCircleFill />
                            <Text color="black">Choose Address</Text>
                        </Box>
                        <Box marginLeft="57.5px" borderLeft="3px solid #008000" h="110px"></Box>
                        <Box alignItems="center" gap="20px" marginLeft="50px" display="flex" color="red" fontSize="20px" marginBottom="5px">
                            <  BsFillCircleFill />
                            <Text color="black">Delivery Summary</Text>
                        </Box>
                        <Box marginLeft="57.5px" borderLeft="3px dashed #CBCBCB" h="110px"></Box>
                        <Box alignItems="center" gap="20px" marginLeft="50px" display="flex" color="#CBCBCB" fontSize="20px" marginBottom="5px">
                            <  BsFillCircleFill />
                            <Text color="#CBCBCB">Payment Method</Text>
                        </Box>




                    </Box>
                </Box>


            </Box>
            <Footer />
        </>
    )
}

export default Summary