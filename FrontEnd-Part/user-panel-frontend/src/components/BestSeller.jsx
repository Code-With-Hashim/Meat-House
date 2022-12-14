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
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
          <div>
            <h2> Multiple items </h2>
            <Slider {...settings}>
              {array.map((el) => (
                <Card maxW="sm">
                  <CardBody>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Living room Sofa</Heading>
                      <Text>
                        This sofa is perfect for modern tropical spaces, baroque
                        inspired spaces, earthy toned spaces and for people who
                        love a chic design with a sprinkle of vintage design.
                      </Text>
                      <Text color="blue.600" fontSize="2xl">
                        $450
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button variant="solid" colorScheme="blue">
                        Buy now
                      </Button>
                      <Button variant="ghost" colorScheme="blue">
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              ))}
            </Slider>
          </div>
        </Box>
      </Box>
    );
  }
}
