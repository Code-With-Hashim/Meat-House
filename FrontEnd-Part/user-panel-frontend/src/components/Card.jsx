import React from 'react'
import { Badge, Box, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function ProductCard({ data ,handleClick,link,id}) {
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
        <Box role="group" maxW='sm' borderRadius='10px' overflow='hidden'>
           <Link to={link}> <Image src={data.product_image_src} alt={"Product Image"} /></Link>

            <Box pl='4' pt={'2'}>
            <Link to={link}>
                <Box
                    mb='5'
                    fontWeight='bold'
                    lineHeight='tight'
                    noOfLines={1}
                    textAlign="left"
                    fontSize="15px"
                    color="#625c5c"
                    _groupHover={{ color: 'tomato' }}
                >
                    {data.product_name}
                </Box>
                <Box
                    mb='1'
                    fontWeight='normal'
                    noOfLines={1}
                    textAlign="left"
                    fontSize="15px"
                    color="#625c5c"
                    _groupHover={{ color: 'tomato' }}
                >
                    {data.item_desc}
                </Box>
                <Box
                    mb='1'
                    fontWeight='bold'
                    lineHeight='tight'
                    noOfLines={1}
                    textAlign="left"
                    fontSize="13px"
                    color="#625c5c"
                    _groupHover={{ color: 'tomato' }}
                >
                    {data.net_weight}
                </Box>
                </Link>
                <Box display={"flex"} alignItems="center" justifyContent={"space-between"} pr="15px">
                    {
                       data.price === data.rupee ? <span style={{ color: "green", fontWeight: "bold" }}>MRP: {data.rupee}</span>:<span style={{ color: "red", fontWeight: "bold" }}>{data.rupee}</span>
                    }
                    <span style={{ color: "green", fontWeight: "bold" }}>{data.offer_discount}</span>
                    {/* {
                        data.rupee && data.previous_price != "" ? <div><span style={{color:"green",fontWeight:"bold"}}>{data.rupee}</span></div> : data.rupee && data.previous_price != "" && data.previous_price > data.rupee ? <div><span>{data.rupee}</span></div> : <span style={{color:"green",fontWeight:"bold"}}>MRP: {data.rupee}</span>
                    } */}

                    <Button colorScheme='red' variant='solid' onClick={()=>handleClick(id)}>
                        Add To cart
                    </Button>
                </Box>
            </Box>

        </Box>
    </>
}

export { ProductCard };