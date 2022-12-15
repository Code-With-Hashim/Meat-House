import { Box, Image, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
const footerdata = [
  {
    header: "USEFUL LINKS",
    data: [
      "Why MeatHouse",
      "Refer and Earn",
      "Licious Cash & Cash+",
      "Careers",
      "BLOG",
      "Campaign",
      "Bug Bounty Guidelines",
      "About Us",
      "FSSC 22000 Certification",
      "FSSAI Licenses",
      "SA8000 Certification",
      "Sitemap",
    ],
  },
];
const Footer = () => {
  return (
    <Box
      backgroundColor="#F7F6F6"
      maxWidth="100%"
      //  border="1px solid"
      mt="2rem"
    >
      <Box
        mx="8%"
        mt="2rem"
        //   border="1px solid"
      >
        <Box
          //   border="1px solid"
          display="inline-block"
          verticalAlign="top"
          position="relative"
          width="52%"
        >
          <UnorderedList
            display="inline-block"
            verticalAlign="top"
            width="42%"
            // border="1px solid"
            listStyleType="none"
            textAlign="left"
          >
            {footerdata.map((el) => (
              <>
                <ListItem fontWeight="600">{el.header}</ListItem>
                {el.data.map((ele) => (
                  <ListItem fontSize="14px" lineHeight="1.8">
                    {ele}
                  </ListItem>
                ))}
              </>
            ))}
          </UnorderedList>
          <UnorderedList
            textAlign="left"
            display="inline-block"
            verticalAlign="top"
            width="50%"
            listStyleType="none"
          >
            <ListItem fontWeight="600">
              EXPERIENCE MEATHOUSE APP ON MOBILE
            </ListItem>
            <ListItem mt="0.5rem">
              <Image src="https://m.licious.in/image/rebranding/png/app-store-new.svg"></Image>
            </ListItem>
            <ListItem mt="0.5rem">
              <Image src="https://m.licious.in/image/rebranding/png/play-store-new.png"></Image>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box
          //   border="1px solid"
          display="inline-block"
          verticalAlign="top"
          position="relative"
          width="48%"
        >
          <UnorderedList
            display="inline-block"
            verticalAlign="top"
            width="42%"
            // border="1px solid"
            listStyleType="none"
            textAlign="left"
          >
            <ListItem fontWeight="600">CONTACT US</ListItem>
            <ListItem fontSize="14px" lineHeight="1.8">
              Call: 1800-4190-786
            </ListItem>
            <ListItem fontSize="14px" lineHeight="1.8">
              Talktous@licious.com
            </ListItem>
            <ListItem fontWeight="600">REGISTERED OFFICE ADDRESS:</ListItem>
            <ListItem fontSize="14px" lineHeight="1.8">
              House of Licious, Zed Pearl, No 12,
            </ListItem>
            <ListItem fontSize="14px" lineHeight="1.8">
              Domlur Layout
            </ListItem>{" "}
            <ListItem fontSize="14px" lineHeight="1.8">
              Bangalore, Karnataka - 560071
            </ListItem>
          </UnorderedList>
          <UnorderedList
            textAlign="left"
            display="inline-block"
            verticalAlign="top"
            width="50%"
            listStyleType="none"
          >
            <ListItem fontSize="14px" lineHeight="1.8">
              T&C
            </ListItem>
            <ListItem fontSize="14px" lineHeight="1.8">
              FAQ
            </ListItem>
            <ListItem fontSize="14px" lineHeight="1.8">
              Privacy Policy
            </ListItem>
            <ListItem fontWeight="600">HAVE SECURITY CONCERN?</ListItem>
            <ListItem fontSize="14px" lineHeight="1.8">
              Mail us to:
            </ListItem>
            <ListItem fontSize="14px" lineHeight="1.8">
              security@licious.com
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
