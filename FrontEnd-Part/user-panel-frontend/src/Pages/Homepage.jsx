import { Box, Image } from "@chakra-ui/react";
import React from "react";

import Navbar from "../components/Navbar";
import ShopByCat from "../components/ShopByCat";
const Homepage = () => {
  return (
    <>
      <Navbar />
      {/*................ Main Banner ...........................*/}
      <Box position="relative">
        <Box>
          <Image src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e" />
        </Box>

        <Box
          position="absolute"
          top="50%"
          display="flex"
          w="100%"
          justifyContent="space-between"
          paddingLeft="7%"
          paddingRight="7%"
        >
          <Box
            bg="white"
            boxSize="3rem"
            transform="rotate(180deg)"
            borderRadius="50%"
            children={
              <Image
                boxSize="25px"
                margin="auto"
                mt="10px"
                src="https://www.licious.in/img/rebranding/car_arrow.png"
                alt="."
              />
            }
          ></Box>
          <Box
            bg="white"
            boxSize="3rem"
            borderRadius="50%"
            children={
              <Image
                boxSize="25px"
                margin="auto"
                mt="10px"
                src="https://www.licious.in/img/rebranding/car_arrow.png"
                alt="."
              />
            }
          ></Box>
        </Box>
      </Box>
      {/*................ Main Banner End ...........................*/}
      <ShopByCat />

      <Box maxWidth="100%" border="1px solid" mt="2rem">
        <Box width="60%" border="1px solid" margin="auto">
          dfdffdf
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
