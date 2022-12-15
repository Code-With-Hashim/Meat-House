import React from "react";
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
} from "@chakra-ui/react";
import Cart from "./Cart";


const Navbar = () => {
  return (
    <Box
      maxWidth="100%"
      border="1px solid"
      position="sticky"
      top="0"
      backgroundColor="white"
      zIndex="1000"
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
              Delhi
            </Text>
          </Box>
          <Spacer />
          {/* <Box w="40px" h="40px" bg="pink.100"> */}
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
          <Box display="flex" gap={2} cursor="pointer">
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
          <Box display="flex" gap={2} cursor="pointer">
            <Image
              boxSize="20px"
              src="https://www.licious.in/img/rebranding/cart_icon.svg"
              alt="."
            />
            <Cart/>
            <Text fontSize="xs"></Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
