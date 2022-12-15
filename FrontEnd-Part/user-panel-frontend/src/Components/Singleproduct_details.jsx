import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import styled from 'styled-components';
import "./SingleproductsDetail.css";
import { Box, Text } from '@chakra-ui/react';
import { RxDividerVertical } from 'react-icons/rx';
import {BiRupee} from "react-icons/bi";
function SingleProductDetails({ image, name, summury, Texts }) {
    return <>
        <ProductWrapper>
            <div style={{ height: "fit-content" }}>
                <Carousel>
                    {
                        image && image.map((ele) => {
                            return <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={ele}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        })
                    }
                </Carousel>
            </div>
            <div style={{ height: "fit-content",width:"90%", paddingTop: "10px",paddingLeft:"10px", textAlign: 'left' }}>
                <Text fontSize={'lg'} fontWeight="semibold">{name} </Text>
                <Box display={"flex"} w='150px' justifyContent={"space-between"} h="40px">
                    {
                        summury.map((ele, index) => {
                            return <Text key={index} color='gray' fontSize={'sm'}>{ele}</Text>
                        })
                    }
                </Box>
                <hr style={{width:"100%"}}/>
                <Box display="flex" flexDirection={'column'} gap="30px" marginTop={"10px"}>
                    {
                        Texts.map((ele, index) => {
                            return <Text key={index} color="gray" fontSize={"sm"}>{ele}</Text>
                        })
                    }
                </Box>
                <Box border="1px solid gray" borderRadius={"5px"} height="100px" paddingInline="30px" width="95%">
                    <div style={{ display: 'flex', justifyContent: "space-between", height: "50%" }}>
                        <div style={{ display: 'flex', alignItems: "center",gap:"10px"}}>
                            <img width="30px" height="30px" src="https://d2407na1z3fc0t.cloudfront.net/Banner/Pieces.png" alt="bottle-icon" />
                            <Text fontSize={"sm"}>Number of Pieces 10-12</Text>
                        </div>
                        <div style={{ display: 'flex', alignItems: "center",gap:"10px" }}>
                            <img width="30px" height="30px" src="https://d2407na1z3fc0t.cloudfront.net/Banner/Serves.png" alt="bottle-icon" />
                            <Text fontSize={"sm"}>Serves 4</Text>
                        </div>
                    </div>
                    <hr width="100%" style={{ margin: 'auto' }} />
                    <div style={{ display: 'flex', justifyContent: "space-between", height: "50%" }}>
                        <div style={{ display: 'flex', alignItems: "center",gap:"10px" }}>
                             <img width="30px" height="30px" src="https://d2407na1z3fc0t.cloudfront.net/Banner/Netwt.png" alt="bottle-icon" />
                             <Text fontSize={"sm"}>Serves 4</Text>
                        </div>
                    </div>
                </Box>
            </div>
        </ProductWrapper>
    </>
}

export { SingleProductDetails };
export const ProductWrapper = styled.div`
    display:grid;
    grid-template-columns:50% 50%;
    gap:10px;
    padding:20px;
    background-color:white;
`