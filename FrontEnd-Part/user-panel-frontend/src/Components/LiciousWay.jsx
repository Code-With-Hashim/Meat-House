import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

function LiciousWay(){
    const data = [
        {
            img:"https://www.licious.in/img/rebranding/landing/USP1.png",
            text:"Premium produce, sourced directly from the origin"
        },
        {
            img:"https://www.licious.in/img/rebranding/landing/USP2.png",
            text:"Scientifically designed central production Unit"
        },{
            img:"https://www.licious.in/img/rebranding/landing/USP3.png",
            text:'Compliance to stringent quality checks'
        },{
            img:"https://www.licious.in/img/rebranding/landing/USP4.png",
            text:"Delivered fresh everyday"
        },
        {
            img:"https://www.licious.in/img/rebranding/landing/USP5.png",
            text:"Experience extraordinary cooking"
        }
    ]
    return <>
        <Box w='full' bg='white' h='fit-content' boxShadow='md' pt='30px' mt='70px' mb="30px">
            <Box display="flex" marginBottom={"50px"} gap="10px" height={"fit-content"} alignItems="center" justifyContent={'center'}>
            <hr width="20%" />
            <Text fontSize={"2xl"} fontWeight="bold"><span style={{color:"gray"}}>The</span> <span style={{color:"red"}}>Licious</span> <span style={{color:"gray"}}>Way</span></Text>
            <hr width="20%"/>
            </Box>
            <Container maxW="6xl"  display={'grid'} gridTemplateColumns={"13% 13% 13% 13% 13%"} alignItems="center" justifyContent={'space-between'}>
            {
                data.map((ele,index)=>{
                    return <Box key={index}>
                        <img width="100%" height="100px" className='image' src={ele.img} alt={ele.text} />
                        <Text textAlign={'left'} fontSize={'xs'} color='gray'>{ele.text}</Text>
                    </Box>
                })
            }
            </Container>
        </Box>
    </>
}

export {LiciousWay};
