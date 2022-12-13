import React from "react";
import MeatHouseLogo from "../MeatHouseLogo.png";
import { Stack, Box, Flex, Spacer, Image } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Box mx="10%" mt="1%">
      <Flex>
        <Box>
          <Image src={MeatHouseLogo} alt="Dan Abramov" />
        </Box>
        <Spacer />
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Spacer />
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
        <Spacer />
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
        <Spacer />
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
