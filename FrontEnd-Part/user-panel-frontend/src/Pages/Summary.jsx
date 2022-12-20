import axios from "axios";
import { Box, Button, Image, Select, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BsFillCircleFill } from "react-icons/bs";
import sa from "../css.Module/Summary.module.css";
import { RxCross1 } from "react-icons/rx";
import { BiRupee } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const [cart, setCart] = useState([]);
  const [cartlength, setCartlength] = useState(0);
  const [delete1, setDelete] = useState(true);
  const USER_TOKEN = useSelector((store) => store.AuthReducer.token);
  const AuthStr = `Bearer ${USER_TOKEN}`;
  const getData = async () => {
    await axios
      .get(`${process.env.REACT_APP_CART_URL}`, {
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
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`${process.env.REACT_APP_CART_URL}${id}`, {
        headers: { Authorization: AuthStr },
      })
      .then((res) => {
        console.log(res);
        console.log(!delete1);
        setDelete(!delete1);
        // setCart(res.data.Cart);
        setCartlength(cart.length);
      });
  };
  useEffect(() => {
    getData();
  }, [cartlength, delete1]);

  return (
    <>
      <Box className={sa.address}>
        <Box className={sa.address_container}>
          <Box
            gap="10px"
            flexDirection="column"
            display="flex"
            className={sa.container}
          >
            <Text textAlign="left" fontSize="20px">
              1 Item Delivered Tomorrow (17 December)
            </Text>
            <Stack spacing={3}>
              <Select placeholder="Select Delevery Slots">
                <option value="option1">7 AM to 10 AM</option>
                <option value="option2">10 AM to 1 PM</option>
                <option value="option3">1 PM to 4 PM</option>
                <option value="option1">4 PM to 7 PM</option>
                <option value="option2">7 PM to 10 PM</option>
              </Select>
            </Stack>
            {cart &&
              cart.map((el) => (
                <Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box display="flex" gap="20px">
                      <Image w="50px" h="50px" src={el.product_image_src} />
                      {/* <Text textAlign="center" boxSize="30px" backgroundColor="#f2f2f2" fontSize="16px">1</Text> */}
                      <Text fontWeight="bold" fontSize="16px" color="black">
                        {el.product_name}
                      </Text>
                    </Box>
                    <Box>
                      <RxCross1 onClick={() => handleDelete(el.product_id)} />
                    </Box>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box display="flex" gap="10px" marginLeft="50px">
                      <Text
                        color="blackAlpha.700"
                        borderRadius="5px"
                        padding="0px 10px 0px 10px"
                        height="fit-content"
                        fontSize="14px"
                        marginLeft="20px"
                        border="1px solid black"
                      >
                        {el.net_weight}
                      </Text>
                      <Text
                        color="#d11243"
                        alignItems="baseline"
                        justifyContent="center"
                        display="flex"
                      >
                        <BiRupee fontSize="13px" />
                        {el.rupee}
                      </Text>
                      <Text
                        color="blackAlpha.600"
                        alignItems="baseline"
                        display="flex"
                        textDecoration="line-through"
                      >
                        <BiRupee fontSize="13px" />
                        {el.rupee}
                      </Text>
                    </Box>
                    <Box justifyItems="center" gap="2px" display="flex">
                      <Text>Qty:{el.quantity}</Text>
                    </Box>
                  </Box>
                </Box>
              ))}
            <Box justifyContent="left" display="grid">
              <Button colorScheme="red">
                <Link to="/payment">Proceed to Payment</Link>
              </Button>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box className={sa.progress} padding="20px">
            <Box
              alignItems="center"
              gap="20px"
              marginLeft="50px"
              display="flex"
              marginBottom="5px"
            >
              <Text fontSize="20px" color="green">
                <AiFillCheckCircle />
              </Text>
              <Text fontSize="20px" color="black">
                Choose Address
              </Text>
              <Link to="/address">
                <Text color="red">(change) </Text>
              </Link>
            </Box>
            <Box
              marginLeft="57.5px"
              borderLeft="3px solid #008000"
              h="110px"
            ></Box>
            <Box
              alignItems="center"
              gap="20px"
              marginLeft="50px"
              display="flex"
              color="red"
              fontSize="20px"
              marginBottom="5px"
            >
              <BsFillCircleFill />
              <Text color="black">Delivery Summary</Text>
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
      </Box>
      <Footer />
    </>
  );
};

export default Summary;
