import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import styled from 'styled-components';
import "./SingleproductsDetail.css";
import { Box, Button, Text } from '@chakra-ui/react';
// import { RxDividerVertical } from 'react-icons/rx';
import { BiRupee } from "react-icons/bi";
import { AddtoCartWrapper } from './AddtoCart';
import { Addtocartfun } from '../Pages/Category.pages';
function SingleProductDetails({ image, name, summury, Texts,price,time,day,icon="https://www.licious.in/img/rebranding/express_delivery.svg" ,id,handleClick}) {
    console.log("ID OF SINGLE",id);
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
            <div style={{ height: "fit-content", width: "90%", paddingTop: "10px", paddingLeft: "10px", textAlign: 'left' }}>
                <Text fontSize={'lg'} fontWeight="semibold">{name} </Text>
                <Box display={"flex"} w='auto' justifyContent={"space-between"} h="40px">
                    {
                        summury.map((ele, index) => {
                            return <Text key={index} color='gray' fontSize={'sm'}>{ele}</Text>
                        })
                    }
                </Box>
                <hr style={{ width: "100%",marginTop:"10px" }} />
                <Box display="flex" flexDirection={'column'} gap="30px" marginTop={"10px"}>
                    {
                        Texts.map((ele, index) => {
                            return <Text key={index} color="gray" fontSize={"sm"}>{ele}</Text>
                        })
                    }
                </Box>
                <Box border="1px solid gray" borderRadius={"5px"} height="100px" paddingInline="30px" width="95%">
                    <div style={{ display: 'flex', justifyContent: "space-between", height: "50%" }}>
                        <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                            <img width="30px" height="30px" src="https://d2407na1z3fc0t.cloudfront.net/Banner/Pieces.png" alt="bottle-icon" />
                            <Text fontSize={"sm"}>Number of Pieces 10-12</Text>
                        </div>
                        <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                            <img width="30px" height="30px" src="https://d2407na1z3fc0t.cloudfront.net/Banner/Serves.png" alt="bottle-icon" />
                            <Text fontSize={"sm"}>Serves 4</Text>
                        </div>
                    </div>
                    <hr width="100%" style={{ margin: 'auto' }} />
                    <div style={{ display: 'flex', justifyContent: "space-between", height: "50%" }}>
                        <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                            <img width="30px" height="30px" src="https://d2407na1z3fc0t.cloudfront.net/Banner/Netwt.png" alt="bottle-icon" />
                            <Text fontSize={"sm"}>Serves 4</Text>
                        </div>
                    </div>
                </Box>
                <AddtoCartWrapper>
                    <div style={{ display: 'flex',width:"95%", justifyContent: 'space-between', alignItems: "center", height: "50px" }}>
                        <Text color={'red.500'} display="flex" alignItems={"center"} >MRP:<span style={{ fontSize: "30px", display: "flex", alignItems: "center" }}>{price}</span></Text>
                        <Button onClick={()=>handleClick(id)} colorScheme='red' width={'fit-content'} p="2" h="8">Add to Cart</Button></div>
                    <hr width="95%"/>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                        <img src={icon} alt="Scooter" />
                        <Text color="gray.500" fontSize={"md"}>{day}</Text>
                        <Text color="gray.600" fontWeight={"semibold"} fontSize={"md"}>{time}</Text>
                    </div>
                </AddtoCartWrapper>
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
    // border:1px solid red;
    background-color:white;
`;

