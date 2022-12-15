import {
  Box,
  Image,
  Flex,
  Spacer,
  Button,
  Text,
  Divider,
} from "@chakra-ui/react";
import MeatHouseLogo from "../MeatHouseLogo.png";
import Navbar from "../components/Navbar";
import ShopByCat from "../components/ShopByCat";
import MultipleItems from "../components/BestSeller";
import Blogs from "../components/Blogs";
const Homepage = () => {
  return (
    <Box>
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
      <ShopByCat title={"Shop By Category"} />

      <Box
        maxWidth="100%"
        // border="1px solid"
        mt="2rem"
      >
        <Box
          width="60%"
          // border="1px solid"
          margin="auto"
          backgroundColor="#ffdc93"
          padding="1rem 2rem"
          borderRadius="1rem"
        >
          <Flex>
            <Box>
              {" "}
              <Image
                cursor="pointer"
                boxSize="60px"
                src={MeatHouseLogo}
                alt="MeatHouse"
              />
            </Box>
            <Spacer />
            <Button colorScheme="red">JOIN NOW</Button>
          </Flex>
          <Divider borderColor="black" m="0.5rem" />
          {/* <hr
            style={{
              border: "1px solid black",
              margin: "0.5rem",
            }}
          ></hr> */}
          <Text fontSize="xs">
            Join MEATOPIA to get free delivery on all orders with cart value
            more than Rs.99.
          </Text>
        </Box>
      </Box>

      <Box maxWidth="100%" mt="2rem">
        <Box
          width="80%"
          margin="auto"
          padding="1rem 2rem"
          borderRadius="1rem"
        ></Box>
      </Box>

      <MultipleItems />

      <MultipleItems />

      <ShopByCat title={"Explore By Category"} />
      <Blogs />
    </Box>
  );
};

export default Homepage;
