import React from 'react'
import { Badge, Box, Image, Button } from '@chakra-ui/react';
function ProductCard({ data }) {
    // const {Product-name}
    function percentage(low, high) {
        let less = Number(high) - Number(low);
        let lesser = less / Number(high);
        return lesser * 100;
    }
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }
    return <>
        <Box maxW='sm'  borderRadius='10px' overflow='hidden'>
            <Image src={"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/91a06457-417e-a693-46bb-366a8cdea75a/original/Tender-Spring-Chicken-Curry-Cut-Hero-Shot.jpg?format=webp"} alt={property.imageAlt} />

            <Box pl='4' pt={'2'}>
                <Box
                    mb='5'
                    fontWeight='bold'
                    lineHeight='tight'
                    noOfLines={1}
                    textAlign="left"
                    fontSize="15px"
                    color="#625c5c"
                >
                    {data.title}
                </Box>
                <Box
                    mb='1'
                    fontWeight='normal'
                    //   lineHeight='tight'
                    noOfLines={1}
                    textAlign="left"
                    fontSize="15px"
                    color="#625c5c"
                >
                    {data.details}
                </Box>
                <Box
                    mb='1'
                    fontWeight='bold'
                    lineHeight='tight'
                    noOfLines={1}
                    textAlign="left"
                    fontSize="13px"
                    color="#625c5c"
                >
                    {data.weight}
                </Box>
                <Box display={"flex"} alignItems="center" justifyContent={"space-between"} pr="15px">

                    {
                        data.rupee && data.previous_price != "" ? <div><span style={{color:"green",fontWeight:"bold"}}>{data.rupee}</span></div> : data.rupee && data.previous_price != "" && data.previous_price > data.rupee ? <div><span>{data.rupee}</span><span style={{color:"green",fontWeight:"bold"}}>MRP: {data.previous_price}</span><span>{percentage(data.rupee, data.previous_price)}%</span></div> : <span style={{color:"green",fontWeight:"bold"}}>MRP: {data.rupee}</span>
                    }

                    <Button colorScheme='red' width={'fit-content'} p="2" h="8" >Add To Cart</Button>
                </Box>
            </Box>

        </Box>
    </>
}

export { ProductCard };