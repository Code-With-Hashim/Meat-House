import { Box, Container, Grid, GridItem, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Wrapper } from './Category.pages';
import { Link } from 'react-router-dom';
function Searchpage() {
    const [data, setData] = useState([
        
        {
            "enabled": "Today's Deals",
            "href": "https://www.licious.in/delicious-deals",
            "cat_icon": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
        },
        {
            "enabled": "Chicken",
            "href": "https://www.licious.in/chicken",
            "cat_icon": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png"
        },
        {
            "enabled": "Fish & Seafood",
            "href": "https://www.licious.in/seafood",
            "cat_icon": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png"
        },
        {
            "enabled": "Mutton",
            "href": "https://www.licious.in/red-meat",
            "cat_icon": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png"
        },
        {
            "enabled": "Ready to Cook",
            "href": "https://www.licious.in/marinades",
            "cat_icon": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png"
        },
        {
            "enabled": "Prawns",
            "href": "https://www.licious.in/prawns-mania",
            "cat_icon": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png"
        },
        {
            "enabled": "Cold Cuts",
            "href": "https://www.licious.in/breakfast",
            "cat_icon": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png"
        },
        {
            "enabled": "Spreads",
            "href": "https://www.licious.in/spreads",
            "cat_icon": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png"
        },
        {
            "enabled": "Eggs",
            "href": "https://www.licious.in/eggs",
            "cat_icon": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png"
        },
        {
            "enabled": "Biryani & Kebab",
            "href": "https://www.licious.in/kebabs",
            "cat_icon": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png"
        },
        {
            "enabled": "Plant Based Meat",
            "href": "https://www.licious.in/pbm",
            "cat_icon": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png"
        },
        {
            "enabled": "Meat Masala",
            "href": "https://www.licious.in/masalas",
            "cat_icon": "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3f37d093-81cf-3c66-115a-2a4575420d68/original/Masala_1200x840_web.png"
        }
 
    ]);
    return <>
        <Wrapper>
            <Container maxW="4xl" display={"flex"} flexDirection="column" gap={"20px"}>
                <Heading>
                    <Text textAlign={"left"} fontWeight="bold" fontSize="2xl">Shop by categories</Text>
                    <Text fontSize='sm' textAlign={"left"} color="gray.500">Freshest meats just for you</Text>
                </Heading>
                <Grid templateColumns={{ base: 'repeat(2, 1fr)', sm: "repeat(3, 1fr)", md: 'repeat(4, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(4, 1fr)', '2xl': "repeat(4, 1fr)" }} gap={6}>
                    {
                        data && data.map((item) => {
                            return <Box role="group">
                                <Link to={`/${item.enabled}`}>
                                    <Box display="flex" flexDirection="column" gap="7px" _groupHover={{ color: "red.500" }} cursor={"pointer"}>
                                        <img src={item.cat_icon} alt="cat-icon" />
                                        <Text fontSize={'sm'}>{item.enabled}</Text>
                                    </Box>
                                </Link>
                            </Box>
                        })
                    }
                </Grid>
            </Container>
        </Wrapper>
    </>
}

export { Searchpage };

export const Heading = styled.div`
text-align:left;
`