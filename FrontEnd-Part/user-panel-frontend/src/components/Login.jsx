import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/AuthReducer/Action";
import axios from "axios";
export function DrawerExample({ onOpen, isOpen, onClose, btnRef }) {
  const [data, setData] = useState({});
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? Number(value) : value;
    setFormValue({ ...formValue, [name]: val });
  };
  const handleCheckUser = async (e) => {
    e.preventDefault();
    await dispatch(
      userLogin({ email: formValue.email, password: formValue.password })
    )
      .then(() => {
        navigate("/");
        onClose();
        toast({
          title: "Login successful!",
          status: "success",
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: "Invalid email address or password",
          status: "error",
          isClosable: true,
        });
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
                          value={formValue.email}
                          onChange={(e) => handleChange(e)}
                          variant="flushed"
                          placeholder="Enter Email"
                          mb="1rem"
                          width="90%"
                        ></Input>
                        <Input
                          type="text"
                          name="password"
                          value={formValue.password}
                          onChange={handleChange}
                          variant="flushed"
                          placeholder="Enter Password"
                          mb="1rem"
                          width="90%"
                        ></Input>
                        <Button
                          colorScheme="red"
                          width="90%"
                          onClick={handleCheckUser}
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
