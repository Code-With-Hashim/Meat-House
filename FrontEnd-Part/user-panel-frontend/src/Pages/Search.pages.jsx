import { Container } from '@chakra-ui/react';
import styled from 'styled-components';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Wrapper } from './Category.pages';

function Searchpage(){
    useEffect(()=>{
        axios.get("http://localhost:8000/Search").then((res)=>{
            console.log(res);
        }).catch(err=>console.log(err));
    },[])
    return <>
    <Wrapper>
        <Container maxW="6xl" border="1px">
            
        </Container>
    </Wrapper>
    </>
}

export {Searchpage};

export const Heading  = styled.div`

`