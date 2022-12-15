import React from "react";
import { Box, Image, Flex, Card, CardBody, Heading } from "@chakra-ui/react";
const blog = [
  {
    image:
      "https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_1502598560.jpg",
    text: "These Chicken Spring Rolls are so Good, ",
  },
  {
    image:
      "https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_2132499279.jpg",
    text: "Chicken Roll: A Scrumptious Go-To Meal ",
  },
  {
    image:
      "https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_1903754353.jpg",
    text: "Chicken Korma is a Mughlai Classis",
  },
];
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
                      src={el.image}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />

                    <Heading size="md">{el.text}</Heading>
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
