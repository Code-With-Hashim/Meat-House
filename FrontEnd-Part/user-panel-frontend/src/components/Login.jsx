import React from "react";
import axios from "axios";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Box,
  Image,
  Button,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
const { useState } = require("react");
export function DrawerExample({ onOpen, isOpen, onClose, btnRef }) {
  const [data, setData] = useState({});
  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios.post("http://localhost:8080/user/signup", data).then((res) => {
      console.log(res);
    });
  };

  const handleOnchangelogin = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmitlogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/user/login", data).then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
    });
  };
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />

        <DrawerContent
          // border="1px solid"
          bgImage="url(https://www.licious.in/img/rebranding/user-login-new.jpg)"
        >
          <DrawerCloseButton size="lg" />

          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody p="0" m="0">
            <Box
              // border="1px solid"
              width="100%"
              height="100%"
              position="relative"
              display="flex"
              justifyContent="center"
            >
              <Box
                borderRadius="1rem"
                padding="1.5rem 1rem"
                position="absolute"
                bottom="0"
                // border="1px solid"
                width="95%"
                height="70%"
                margin="auto"
                backgroundColor="white"
              >
                <Heading as="h4" size="md" mb="2rem">
                  Sign In/Sign Up
                </Heading>
                <Tabs>
                  <TabList>
                    <Tab>Sign Up</Tab>
                    <Tab>Sign In</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Input
                          type="text"
                          name="email"
                          variant="flushed"
                          placeholder="Enter Email"
                          mb="1rem"
                          width="90%"
                          onChange={handleOnchange}
                        ></Input>
                        <Input
                          type="text"
                          name="password"
                          variant="flushed"
                          placeholder="Enter Password"
                          mb="1rem"
                          width="90%"
                          onChange={handleOnchange}
                        ></Input>
                        <Button
                          colorScheme="red"
                          width="90%"
                          onClick={handleSubmit}
                        >
                          Sign Up
                        </Button>
                        <Text size="sm">
                          By signing in you agree to our terms and conditions
                        </Text>
                      </Box>
                    </TabPanel>
                    <TabPanel>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Input
                          type="text"
                          name="email"
                          variant="flushed"
                          placeholder="Enter Email"
                          mb="1rem"
                          width="90%"
                          onChange={handleOnchangelogin}
                        ></Input>
                        <Input
                          type="text"
                          name="password"
                          onChange={handleOnchangelogin}
                          variant="flushed"
                          placeholder="Enter Password"
                          mb="1rem"
                          width="90%"
                        ></Input>
                        <Button
                          colorScheme="red"
                          width="90%"
                          onClick={handleSubmitlogin}
                        >
                          Sign In
                        </Button>
                        <Text size="sm">
                          By signing in you agree to our terms and conditions
                        </Text>
                      </Box>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
