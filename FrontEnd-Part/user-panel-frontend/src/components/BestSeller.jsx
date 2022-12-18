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


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
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
                      <Heading size="md">
                        {el.product_name.slice(0, 30)}
                      </Heading>
                      <Text>{el.item_desc.slice(1, 40)}</Text>
                      <Text color="blue.600" fontSize="2xl">
                        {el.rupee}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button variant="solid" colorScheme="blue">
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
  }
}
