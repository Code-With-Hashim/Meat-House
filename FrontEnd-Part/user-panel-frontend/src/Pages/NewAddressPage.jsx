import { Box, Button, Image, Input, Text } from "@chakra-ui/react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import sa from "../css.Module/NewAddress.module.css"
import {BsFillCircleFill} from "react-icons/bs"
import { Link } from "react-router-dom"



const NewAddress = () => {
    return (
        <>

       
            <Box className={sa.Address_container}>
                <Box padding="20px" className={sa.children}>
                    <Text fontWeight="bold" textAlign="left" color="#CBCBCB" fontSize="20px">Add New Address</Text>
                    <Box textAlign="left">
                        <Text color="#CBCBCB" fontSize="14px">Enter Location</Text>
                        <Input variant='flushed' placeholder='Location' size='lg' />
                        <hr />
                    </Box>
                    <Box textAlign="left">
                        <Text color="#CBCBCB" fontSize="14px">Flat No/Building Name/Street Name</Text>
                        <Input variant='flushed' placeholder='Flat No/Building Name/Street Name' size='lg' />
                        <hr />
                    </Box>
                    <Box textAlign="left">
                        <Text color="#CBCBCB" fontSize="14px">Landmark Optional</Text>
                        <Input variant='flushed' placeholder='Landmark' size='lg' />
                        <hr />
                    </Box>
                    <Box textAlign="left">
                        <Input variant='flushed' placeholder='Mobile No' size='lg' />
                        <hr />
                    </Box>
                    <Box textAlign="left">
                        <Input variant='flushed' placeholder='Email Id' size='lg' />
                        <hr />
                    </Box>
                    <Box textAlign="left">
                        <Input variant='flushed' placeholder='Full Name' size='lg' />
                        <hr />
                    </Box>
                    <Box >
                        <Button colorScheme="red" width="80%">Save and Proceed</Button>
                    </Box>
                    <Link to="/address" textAlign="left">Back</Link>




                </Box>
                <Box className={sa.children}>
                    <Image  h="100%" src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" />


                </Box>
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
            <Footer/>
        </>
    )
}
export default NewAddress