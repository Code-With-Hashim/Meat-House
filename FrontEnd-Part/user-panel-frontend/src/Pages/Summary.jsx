
import { Box, Button, Select, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BsFillCircleFill } from "react-icons/bs"
import sa from "../css.Module/Summary.module.css"
import { RxCross1 } from "react-icons/rx"



const Summary = () => {
    return (
        <>

            <Navbar />


            <Box className={sa.address}  >

                <Box className={sa.address_container}>
                    <Box w="50%">
                        <Text>1 Item Delivered Tomorrow (17 December)</Text>
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
                                    <Text textAlign="center" boxSize="30px" backgroundColor="#f2f2f2" fontSize="16px">1</Text>
                                    <Text fontWeight="bold" fontSize="16px" color="black">Chicken Curry Cut large </Text>


                                </Box>
                                <Box><RxCross1 /></Box>
                            </Box>
                        </Box>

                    </Box>


                </Box>


                <Box >
                    <Box padding="20px" >
                        <Box alignItems="center" gap="20px" marginLeft="50px" display="flex" color="red.400" fontSize="20px" marginBottom="5px">
                            <  BsFillCircleFill />
                            <Text color="black">Choose Address</Text>
                        </Box>
                        <Box marginLeft="57.5px" borderLeft="3px dashed #CBCBCB" h="110px"></Box>
                        <Box alignItems="center" gap="20px" marginLeft="50px" display="flex" color="#CBCBCB" fontSize="20px" marginBottom="5px">
                            <  BsFillCircleFill />
                            <Text color="#CBCBCB">Delivery Summary</Text>
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