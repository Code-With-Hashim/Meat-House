import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../css.Module/ShopByCat.module.css";
let shopcat = [
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png",
    title: "Chicken",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png",
    title: "Fish & Seafood",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png",
    title: "Mutton",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
    title: "Ready to cook",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
    title: "Prawns",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png",
    title: "Cold Cuts",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png",
    title: "Spreads",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png",
    title: "Eggs",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png",
    title: "Biryani & Kebab",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png",
    title: "Plant Based Meat",
  },
  {
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3f37d093-81cf-3c66-115a-2a4575420d68/original/Masala_1200x840_web.png",
    title: "Meat Masala",
  },
];
const ShopByCat = () => {
  return (
    <Box
      maxWidth="100%"
      // border="1px solid"

      mt="2rem"
    >
      <Box
        mx="8%"
        // border="1px solid"
      >
        <Heading as="h4" size="md">
          Shop by categories
        </Heading>
        <Text fontSize="sm">Freshest meats just for you</Text>
      </Box>
      <Box
        mx="8%"
        //   border="1px solid"
      >
        <SimpleGrid columns={[2, 3, 4]} spacing="40px" mt="2rem">
          {shopcat?.map((el) => (
            <Box>
              <Image src={`${el.img}`} className={styles.error} />
              <Heading margin="auto" size="md" textAlign="center" mt="1rem">
                {el.title}
              </Heading>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ShopByCat;
