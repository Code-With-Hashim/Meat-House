import { Box, Container, Grid, GridItem, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Wrapper } from './Category.pages';
import { Link } from 'react-router-dom';
function Searchpage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/Search").then((res) => {
            console.log(res);
            setData(res.data);
        }).catch(err => console.log(err));
    }, [])
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