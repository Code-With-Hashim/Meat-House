import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../css.Module/ShopByCat.module.css";
import { shopcat } from "../Utils/Constants";

const ShopByCat = ({ title }) => {
  return (
    <Box
      maxWidth="100%"
      // border="1px solid"

      mt="2rem"
    >
      <Box
        mx="8%"
        // border="1px solid"
        textAlign="left"
      >
        <Heading as="h4" size="md">
          {title}
        </Heading>
        <Text fontSize="sm">Freshest meats just for you</Text>
      </Box>
      <Box
        mx="8%"
        //   border="1px solid"
      >
        <SimpleGrid columns={[2, 3, 4]} spacing="40px" mt="2rem">
          {shopcat?.map((el) => (
            <Link to={el.path}>
              <Box>
                <Image src={`${el.img}`} className={styles.error} />
                <Heading margin="auto" size="md" textAlign="center" mt="1rem">
                  {el.title}
                </Heading>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ShopByCat;
