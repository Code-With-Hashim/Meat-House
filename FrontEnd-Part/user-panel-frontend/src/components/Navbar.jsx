import React, { useEffect, useState } from "react";
import MeatHouseLogo from "../MeatHouseLogo.png";
import {
  Box,
  Flex,
  Spacer,
  Image,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  List,
  ListItem,
  MenuGroup,
  MenuDivider,
  Hide,
  Show,
  Heading,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import Category from "./Category.jsx";
import { DrawerExample } from "./Login";
import axios from "axios";

let cat = [
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png",
    title: "Chicken",
    path: "/chicken",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png",
    title: "Fish & Seafood",
    path: "/fish",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png",
    title: "Mutton",
    path: "/mutton",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
    title: "Ready to cook",
    path: "/readytocook",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
    title: "Prawns",
    path: "/prawns",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png",
    title: "Cold Cuts",
    path: "/coldcuts",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png",
    title: "Spreads",
    path: "/spreads",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png",
    title: "Eggs",
    path: "/eggs",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png",
    title: "Biryani & Kebab",
    path: "/biryani&kebab",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png",
    title: "Plant Based Meat",
    path: "/plantbasedmeat",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3f37d093-81cf-3c66-115a-2a4575420d68/original/Masala_1200x840_web.png",
    title: "Meat Masala",
    path: "/meatmasala",
  },
];

const Navbar = () => {
  const [loc, setLoc] = useState("" || "Delhi");
  const [city, setCity] = useState();
  const [isAuth, setIsAuth] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const success = async (position) => {
    console.log(position.coords.latitude, position.coords.longitude);
    const promis = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=07dab470b0004f5e9b651111221512&q=${position.coords.latitude},${position.coords.longitude}&aqi=yes`
    );
    promis.json().then((res) => {
      console.log(res.location.name);
      setLoc(res.location.name);
    });
  };
  const error = () => {
    setLoc(city);
  };
  const getuser = () => {
    if (to != undefined) {
      setIsAuth(true);
    }
  };
  const handleChange = (e) => {
    setCity(e.target.value);
    setLoc(e.target.value);
  };

  let to = localStorage.getItem("token");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);

    getuser();
  }, [setLoc, setCity, isAuth]);

  return (
    <>
      <Box
        width="100%"
        // border="1px solid"
        position="sticky"
        top="0"
        backgroundColor="white"
        zIndex="1000"
        boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      >
        <Box mx="8%">
          <Flex alignItems="center">
            {/* <Box> */}
            <Image
              cursor="pointer"
              boxSize="80px"
              src={MeatHouseLogo}
              alt="MeatHouse"
            />
            {/* </Box> */}
            <Spacer />

            <Box display="flex" gap={2}>
              <Image
                boxSize="20px"
                src="https://www.licious.in/img/rebranding/location_icon.svg"
                alt="."
              />
              <Text fontSize="xs" cursor="pointer">
                {loc}
              </Text>
              <Menu closeOnSelect={false}>
                <MenuButton>
                  <Image
                    mt="1px"
                    boxSize="8px"
                    src="https://www.licious.in/img/rebranding/down-arrow.png"
                  />
                </MenuButton>
                <MenuList width="800px">
                  <Box padding="2rem" backgroundColor="#F7F6F6">
                    <Heading as="h4" size="md" mb="2rem">
                      Choose delivery location
                    </Heading>
                    <Box backgroundColor="white" padding="40px 20px">
                      <InputGroup width="70%">
                        <Input
                          placeholder="Enter your locality"
                          onChange={handleChange}
                        />
                        <InputRightElement children={<Button>Submit</Button>} />
                      </InputGroup>
                    </Box>
                  </Box>
                </MenuList>
              </Menu>
            </Box>
            <Spacer />
            {/* <Box w="40px" h="40px" bg="pink.100"> */}
            <Hide below="720px">
              <InputGroup width="40%">
                <Input
                  cursor="pointer"
                  backgroundColor="#f8f8f8"
                  placeholder="Search for any delicious product"
                  // width="40%"
                  size="sm"
                />
                <InputRightElement
                  children={
                    <Image
                      boxSize="20px"
                      src="https://www.licious.in/img/rebranding/search_icon.svg"
                      alt="."
                    />
                  }
                />
              </InputGroup>
              {/* </Box> */}
              <Spacer />
              <Box display="flex" gap={2} cursor="pointer">
                <Image
                  boxSize="20px"
                  src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg"
                  alt="."
                />
                <Menu>
                  <MenuButton>
                    <Text fontSize="xs">Categories</Text>
                  </MenuButton>
                  <Category cat={cat} />
                </Menu>
              </Box>
              <Spacer />
              <Box display="flex" gap={2} cursor="pointer">
                {isAuth ? (
                  <>
                    <Image
                      boxSize="20px"
                      src="https://www.licious.in/img/rebranding/profile_icon.svg"
                      alt="."
                    />
                    <Menu>
                      <MenuButton>
                        <Text fontSize="xs">Profile</Text>
                      </MenuButton>
                      <MenuList>
                        <MenuGroup>
                          <MenuItem>My Account</MenuItem>
                          <MenuDivider />
                          <MenuItem>Reward </MenuItem>

                          <MenuDivider />

                          <MenuItem>My Order</MenuItem>
                          <MenuDivider />
                          <MenuItem>Logout</MenuItem>
                        </MenuGroup>
                      </MenuList>
                    </Menu>
                  </>
                ) : (
                  <>
                    <Image
                      boxSize="20px"
                      src="https://www.licious.in/img/rebranding/profile_icon.svg"
                      alt="."
                    />

                    <Text fontSize="xs" ref={btnRef} onClick={onOpen}>
                      Login
                    </Text>
                  </>
                )}
              </Box>
              <DrawerExample
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={onClose}
                btnRef={btnRef}
              />
              <Spacer />
              <Box display="flex" gap={2} cursor="pointer">
                <Image
                  boxSize="20px"
                  src="https://www.licious.in/img/rebranding/cart_icon.svg"
                  alt="."
                />
                <Text fontSize="xs">Cart</Text>
              </Box>
            </Hide>
          </Flex>
        </Box>
      </Box>
      <Show below="720px">
        <Box
          width="100vw"
          border="1px solid"
          position="fixed"
          // position="sticky"
          bottom="0"
          backgroundColor="white"
          zIndex="1000"
        >
          <Box mx="8%" mt="0.5rem" height="3rem" position="sticky">
            <Flex alignItems="center">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  boxSize="20px"
                  src="https://m.licious.in/image/rebranding/svg/home.svg"
                  alt="."
                />
                <Text fontSize="xs" cursor="pointer">
                  Home
                </Text>
              </Box>
              <Spacer />

              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
              >
                <Image
                  boxSize="20px"
                  src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg"
                  alt="."
                />
                <Menu>
                  <MenuButton>
                    <Text fontSize="xs">Categories</Text>
                  </MenuButton>
                  <MenuList width="500px">
                    <List>
                      <ListItem>
                        <MenuItem minH="48px">
                          <Image
                            boxSize="2rem"
                            borderRadius="full"
                            src="https://placekitten.com/100/100"
                            alt="Fluffybuns the destroyer"
                            mr="12px"
                          />
                          <span>Fluffybuns the Destroyer</span>
                        </MenuItem>
                      </ListItem>
                      <ListItem>
                        <MenuItem minH="40px">
                          <Image
                            boxSize="2rem"
                            borderRadius="full"
                            src="https://placekitten.com/120/120"
                            alt="Simon the pensive"
                            mr="12px"
                          />
                          <span>Simon the pensive</span>
                        </MenuItem>
                      </ListItem>
                    </List>
                  </MenuList>
                </Menu>
              </Box>
              <Spacer />
              <Box
                cursor="pointer"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  boxSize="20px"
                  src="https://www.licious.in/img/rebranding/profile_icon.svg"
                  alt="."
                />
                <Menu>
                  <MenuButton>
                    <Text fontSize="xs">Profile</Text>
                  </MenuButton>
                  <MenuList>
                    <MenuGroup>
                      <MenuItem>My Account</MenuItem>
                      <MenuDivider />
                      <MenuItem>Reward </MenuItem>

                      <MenuDivider />

                      <MenuItem>My Order</MenuItem>
                      <MenuDivider />
                      <MenuItem>Logout</MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </Box>
              <Spacer />
              <Box
                gap={2}
                cursor="pointer"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  boxSize="20px"
                  src="https://www.licious.in/img/rebranding/cart_icon.svg"
                  alt="."
                />
                <Text fontSize="xs">Cart</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Show>
    </>
  );
};

export default Navbar;
