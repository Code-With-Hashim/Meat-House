import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import sa from "../css.Module/NewAddress.module.css";
import { BsFillCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const NewAddress = () => {
  const [inpval, setINP] = useState({});
  const token = useSelector((store) => store.AuthReducer.token);
  const AuthStr = `Bearer ${token}`;

  const handlechange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  useEffect(() => {}, []);

  const updateuser = () => {
    console.log(inpval);
   
    axios.post(`${process.env.REACT_APP_MEAT_HOUSE_BASE_URL}address`, inpval, {
      headers: { Authorization: AuthStr },
    }).then((res)=>{
        console.log(res.data)
    })
  };

  return (
    <>
      <Box className={sa.Address_container}>
        <Box padding="20px" className={sa.children}>
          <Text
            fontWeight="bold"
            textAlign="left"
            color="#CBCBCB"
            fontSize="20px"
          >
            Add New Address
          </Text>
          <Box textAlign="left">
            <Text color="#CBCBCB" fontSize="14px">
              Enter Location
            </Text>
            <Input
              variant="flushed"
              name="location"
              placeholder="Location"
              size="lg"
              onChange={handlechange}
            />
            <hr />
          </Box>
          <Box textAlign="left">
            <Text color="#CBCBCB" fontSize="14px">
              Flat No/Building Name
            </Text>
            <Input
              variant="flushed"
              placeholder="Flat No/Building Name"
              size="lg"
              name="flatno"
              onChange={handlechange}
            />
            <hr />
          </Box>
          <Box textAlign="left">
            <Text color="#CBCBCB" fontSize="14px">
              Landmark Optional
            </Text>
            <Input
              variant="flushed"
              name="landmark"
              placeholder="Landmark"
              size="lg"
              onChange={handlechange}
            />
            <hr />
          </Box>
          <Box textAlign="left">
            <Input
              variant="flushed"
              name="mobile"
              placeholder="Mobile No"
              size="lg"
              onChange={handlechange}
            />
            <hr />
          </Box>
          <Box textAlign="left">
            <Input
              variant="flushed"
              name="email"
              placeholder="Email Id"
              size="lg"
              onChange={handlechange}
            />
            <hr />
          </Box>
          <Box textAlign="left">
            <Input
              variant="flushed"
              name="fullName"
              placeholder="Full Name"
              size="lg"
              onChange={handlechange}
            />
            <hr />
          </Box>
          <Box>
            <Button colorScheme="red" width="80%" onClick={() => updateuser()}>
              Save and Proceed
            </Button>
          </Box>
          <Link to="/address" textAlign="left">
            Back
          </Link>
        </Box>
        <Box className={sa.children}>
          <Image
            h="100%"
            src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
          />
        </Box>
        <Box className={sa.progress} padding="20px">
          <Box
            alignItems="center"
            gap="20px"
            marginLeft="50px"
            display="flex"
            color="red.400"
            fontSize="20px"
            marginBottom="5px"
          >
            <BsFillCircleFill />
            <Text color="black">Choose Address</Text>
          </Box>
          <Box
            marginLeft="57.5px"
            borderLeft="3px dashed #CBCBCB"
            h="110px"
          ></Box>
          <Box
            alignItems="center"
            gap="20px"
            marginLeft="50px"
            display="flex"
            color="#CBCBCB"
            fontSize="20px"
            marginBottom="5px"
          >
            <BsFillCircleFill />
            <Text color="#CBCBCB">Delivery Summary</Text>
          </Box>
          <Box
            marginLeft="57.5px"
            borderLeft="3px dashed #CBCBCB"
            h="110px"
          ></Box>
          <Box
            alignItems="center"
            gap="20px"
            marginLeft="50px"
            display="flex"
            color="#CBCBCB"
            fontSize="20px"
            marginBottom="5px"
          >
            <BsFillCircleFill />
            <Text color="#CBCBCB">Payment Method</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default NewAddress;
