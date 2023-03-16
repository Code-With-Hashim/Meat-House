import { Box, Button, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import sa from "../css.Module/AddressPage.module.css"
import { BsFillCircleFill } from "react-icons/bs"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const fetchlocation = async (AuthStr) => {
    try {

        console.log(AuthStr)

        const res = await axios.get(`${process.env.REACT_APP_MEAT_HOUSE_BASE_URL}address`, {
            headers: { Authorization: AuthStr },
        })

        const { data } = res

        return data.address


    } catch (error) {
        console.log(error)
    }
}


const Address = () => {
    const [address, setAddress] = useState([])
    const token = useSelector((store) => store.AuthReducer.token);
    const AuthStr = `Bearer ${token}`;

    useEffect(() => {
        fetchlocation(AuthStr).then((res) => setAddress(res))

    }, [])

    console.log(address)

    return (
        <>




            <Box className={sa.address}  >

                <Box className={sa.address_container}>
                    <Button variant="outline"
                        colorScheme="red"
                        fontSize="20px"

                        w="70%" >
                        <Link to="/newaddress">+ Add New Address</Link>
                    </Button>
                    <Box margin="auto" width="90%">
                        <Text marginTop="40px" fontWeight="medium" fontSize="22px" textAlign="left">Saved Address</Text>
                        <Text textAlign="left" fontSize="sm">1 Saved Address</Text>
                        <Box borderRadius="10px" gap="5px" padding="10px" textAlign="left" flexDirection="column" display="flex" border="1px solid grey">
                            {
                                address === undefined ?
                                    <>
                                        <Text>Not Updated</Text>
                                        <Text>Not Updated</Text>
                                        <Text>Not Updated</Text>
                                        <Text>Not Updated</Text>
                                        <Text>Landmark Not Updated</Text>
                                        <Text>Mobile Number Not Updated</Text></> : <>
                                        <Text>{address.flatno == undefined || address.flatno === '' ? 'Not Updated' : address.flatno}</Text>
                                        <Text>{address.location == undefined || address.location === "" ? 'Not Updated' : address.location}</Text>
                                        <Text>Landmark {address.landmark === undefined || address.landmark === "" ? 'Not Updated' : address.landmark}</Text>
                                        <Text>Mobile Number {address.mobile === undefined || address.mobile === "" ? 'Not Updated' : address.mobile}</Text>
                                    </>
                            }

                            <hr />
                            <Box justifyContent="space-between" display="flex">
                                <Button colorScheme="red" variant="outline">Edit</Button>
                                <Button colorScheme="red" variant="outline">Delete</Button>
                            </Box>

                        </Box>
                    </Box>
                    <Box >
                        <Button
                            padding="5px"
                            textAlign="center"
                            className={sa.proceed}

                            marginTop="20px"
                            colorScheme="red"
                        ><Link to="/summary">Proceed To Shipment</Link></Button>

                    </Box>

                </Box>


                <Box className={sa.progress} >
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

export default Address;