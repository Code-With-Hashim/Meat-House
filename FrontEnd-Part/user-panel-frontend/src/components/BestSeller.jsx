import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

import {
  Box,
  Card,
  CardBody,
  Image,
  Text,
  Stack,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
  Heading,
} from "@chakra-ui/react";

import React, { Component } from "react";
import Slider from "react-slick";
import { bestcat } from "../Utils/Constants";
import { cartData } from "../redux/AppReducer/Action";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};
const MultipleItems = () => {
  const car = useSelector((store) => store.AppReducer.cart)
  const token = localStorage.getItem("token");
 
  // console.log(car)
  const toast = useToast()
  const dispatch = useDispatch();
  const PatchRequest = async (id) => {
    const AuthStr = `Bearer ${token}`;

  
    await axios
      .post(
        `${process.env.REACT_APP_CART_URL}${id}`,
        {},
        {
          headers: { Authorization: AuthStr },
        }
      )
      .then((res) => {
        console.log(res)
        toast({
          title: 'Product Added.',
    
          status: 'success',
          duration: 2000,
          isClosable: true,
        })

      })
      .catch((err) => 
      toast({
        title: 'Product is Alredy exist in cart',
        status: 'error',
        duration: 2000,
        isClosable: true,
      }));

    dispatch(cartData(!car));
  };

  return (
    <Box maxWidth="100%" mt="2rem">
      <Box mx="8%">
        <Box textAlign="left">
          <Heading as="h4" size="md">
            Best Seller
          </Heading>
          <Slider {...settings}>
            {bestcat.map((el) => (
              <Card maxW="sm" padding="10px">
                <CardBody>
                  <Image
                    src={el.product_image_src}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{el.product_name.slice(0, 30)}</Heading>
                    <Text>{el.item_desc.slice(1, 40)}</Text>
                    <Text color="blue.600" fontSize="2xl">
                      {el.rupee}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      onClick={() => PatchRequest(el.product_id)}
                    >
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default MultipleItems;
