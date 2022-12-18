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
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/AuthReducer/Action";

import { getData } from "../redux/AppReducer/Action";
import Cart from "./Cart";
import { cat } from "../Utils/Constants";
import { Link } from "react-router-dom";


const Navbar = () => {
  // const [loc, setLoc] = useState("" || "Delhi");
  const [city, setCity] = useState();
  // const [isAuth, setIsAuth] = useState(false);

  const city1 = useSelector((store) => store.AppReducer.city);

  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const dispatch = useDispatch();
  const success = async (position) => {
    console.log(position.coords.latitude, position.coords.longitude);
    const promis = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=07dab470b0004f5e9b651111221512&q=${position.coords.latitude},${position.coords.longitude}&aqi=yes`
    );
    promis.json().then((res) => {
      console.log(res.location.name);
      // setLoc(res.location.name);
      dispatch(getData(res.location.name));
    });
  };
  const error = () => {
    // setLoc(city);
    dispatch(getData("Delhi"));
  };
  // const getuser = () => {
  //   if (to != undefined) {
  //     setIsAuth(true);
  //   }
  // };
  const handleChange = (e) => {
    setCity(e.target.value);
    // setLoc(e.target.value);
  };
  const handleCity = (e) => {
    dispatch(getData(city));
  };
  let to = localStorage.getItem("token");
  useEffect(
    () => {
      navigator.geolocation.getCurrentPosition(success, error);

      // getuser();
    },
    [
      // setLoc, setCity
    ]
  );

  return (
    <>
      <Box
        width="100%"
        // border="1px solid"
        position="fixed"
        top="0"
        backgroundColor="white"
        zIndex="1000"
        boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      >
        <Box mx="8%">
          <Flex alignItems="center">
            {/* <Box> */}
            <Link to="/">
              <Image
                cursor="pointer"
                boxSize="80px"
                src={MeatHouseLogo}
                alt="MeatHouse"
              />
            </Link>
            {/* </Box> */}
            <Spacer />

            <Box display="flex" gap={2}>
              <Image
                boxSize="20px"
                src="https://www.licious.in/img/rebranding/location_icon.svg"
                alt="."
              />
              <Text fontSize="xs" cursor="pointer">
                {city1}
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
                          paddingRight="10px"
                        />
                        <InputRightElement
                          children={
                            <Button onClick={handleCity}>Submit</Button>
                          }
                        />
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
                          <MenuItem onClick={() => dispatch(logOut)}>
                            Logout
                          </MenuItem>
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
                {/* <Image
                  boxSize="20px"
                  src="https://www.licious.in/img/rebranding/cart_icon.svg"
                  alt="."
                /> */}

                <Cart/>

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
                  <Category cat={cat} />
                  {/* <MenuList width="500px">
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
                  </MenuList> */}
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
