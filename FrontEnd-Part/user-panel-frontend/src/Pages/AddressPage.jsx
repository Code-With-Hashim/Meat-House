import { Box, Button, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import sa from "../css.Module/AddressPage.module.css"
import {BsFillCircleFill} from "react-icons/bs"




const Address = () => {
    return (
        <>

            


            <Box className={sa.address}  >

                <Box className={sa.address_container}>
                    <Button variant="outline"
                        colorScheme="red"
                        fontSize="20px"
                        h="70px"
                        w="70%" >
                        <Link to="/newaddress">+ Add New Address</Link>
                    </Button>
                    <Box margin="auto" width="90%">
                        <Text marginTop="40px" fontWeight="medium" fontSize="22px" textAlign="left">Saved Address</Text>
                        <Text textAlign="left" fontSize="sm">1 Saved Address</Text>
                        <Box borderRadius="10px" gap="5px" padding="10px" textAlign="left" flexDirection="column" display="flex" border="1px solid grey">
                            <Text>4</Text>
                            <Text>Narpatkhera, Lalbagh, Lucknow, Uttar Pradesh 226001, India</Text>
                            <Text>near cni church</Text>
                            <Text>Lucknow 226001</Text>
                            <Text>Mobile Number:7493842240</Text>
                            <hr />
                            <Box justifyContent="space-between" display="flex">
                                <Button colorScheme="red" variant="outline">Edit</Button>
                                <Button colorScheme="red" variant="outline">Delete</Button>
                            </Box>

                        </Box>
                    </Box>
                    <Button padding="5px" textAlign="center" justifyContent="flex-start" display="flex " marginTop="20px" colorScheme="red" w="40%"><Link to="/summary">Proceed To Shipment</Link></Button>
                </Box>


                <Box >
                <Box   padding="20px" >
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

export default Address;