import { Button, Container, Text } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import {BiRupee} from "react-icons/bi";

function AddtoCart({Image,name,price,icon,day,time}){
    return <>
        <Container maxW="6xl" bg="white"  display='grid' gridTemplateColumns={"repeat(2,1fr)"} borderRadius="10px" p={"10px"}>
            <ImageWraper>
                <img src={Image} style={{borderRadius:'10px'}} alt="name" width="150px" />
                <Text fontSize={'lg'} color="gray.500">{name}</Text>
            </ImageWraper>
            <AddtoCartWrapper>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:"center",height:"50px"}}>
                <Text color={'red.500'} display="flex" alignItems={"center"} >MRP:<span style={{fontSize:"30px",display:"flex",alignItems:"center"}}><BiRupee/>{price}</span></Text>
                <Button colorScheme='red' width={'fit-content'} p="2" h="8">Add to Cart</Button></div>
                <hr/>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
                    <img src={icon} alt="Scooter" />
                    <Text color="gray.500" fontSize={"md"}>{day}</Text>
                    <Text color="gray.600" fontWeight={"semibold"} fontSize={"md"}>{time}</Text>
                </div>
            </AddtoCartWrapper>
        </Container>
    </>
}

export  {AddtoCart};


export const ImageWraper = styled.div`
display:flex;
text-align:left;
gap:10px;
`

export const AddtoCartWrapper = styled.div`
text-align:left;
display:flex;
flex-direction:column;
justify-content:space-between;
`