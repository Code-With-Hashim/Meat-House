import { Button, Container, Text } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
// import {BiRupee} from "react-icons/bi";
import { Addtocartfun } from '../Pages/Category.pages';

function AddtoCart({Image,name,price,icon,day,time,id,handleClick}){
    console.log("Id",id);
    return <>
        <Container maxW="5xl" bg="white" margin={'auto'} display='grid' gridTemplateColumns={"repeat(2,1fr)"} borderRadius="10px" p={"10px"} mb={'50px'}>
            <ImageWraper>
                <img src={Image} style={{borderRadius:'10px'}} alt="name" width="150px" />
                <Text fontSize={{base:'xs',sm:"sm",md:"md",lg:'lg',xl:'lg'}} color="gray.500">{name}</Text>
            </ImageWraper>
            <AddtoCartWrapper>
                <div style={{display:'flex',width:"95%",justifyContent:'space-between',alignItems:"center",height:"50px"}}>
                <Text color={'red.500'} display="flex" alignItems={"center"} >MRP:<span style={{fontSize:"30px",display:"flex",alignItems:"center"}}>{price}</span></Text>
                <Button onClick={()=>handleClick(id)} colorScheme='red' width={'fit-content'} p={{xl:"2",base:"1",md:'2',sm:'2'}} h="8" fontSize={{base:'sm',md:'sm',lg:"md",xl:'md'}}>Add to Cart</Button></div>
                <hr width="95%"/>
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

@media all and (max-width:600px) and (min-width:300px){
    display:flex;
    flex-direction:column;
}

`

export const AddtoCartWrapper = styled.div`
text-align:left;
display:flex;
flex-direction:column;
justify-content:space-between;
gap:10px;
// margin-bottom:100px;
`