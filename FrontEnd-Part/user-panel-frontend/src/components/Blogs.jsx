import React from "react";
import {
  Box,
  Image,
  Flex,
  Spacer,
  Card,
  CardBody,
  Heading,
} from "@chakra-ui/react";
const blog = [1, 2, 3];
const Blogs = () => {
  return (
    <Box maxWidth="100%" mt="2rem">
      <Box width="80%" margin="auto" padding="1rem 2rem" borderRadius="1rem">
        <Box>
          <Heading as="h4" size="md">
            Check out our blog
          </Heading>
          <Flex>
            {blog.map((el) => (
              <Box>
                <Card maxW="sm">
                  <CardBody>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />

                    <Heading size="md">Living room Sofa</Heading>
                  </CardBody>
                </Card>
              </Box>
            ))}
          </Flex>
        </Box>
        <Box>
          <Image
            src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34be7b89a3"
            alt="image"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Blogs;
