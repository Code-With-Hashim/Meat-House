import React from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { AiOutlineCaretRight } from 'react-icons/ai';
import styled from 'styled-components';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Grid,
  GridItem,
  Tooltip
} from '@chakra-ui/react'
import { Categories } from '../Components/Categories';
import { ProductCard } from '../Components/Card';
/*
  This function or page is suppose to make an api request on load with passed Category and after having the data from data base we are going to Show that perticular UI Component.
*/

function CategoryPage() {
  const query = useLocation().search;
  let id = new URLSearchParams(query).get("category_id");
    console.log(id);
  const Category = useParams();
  const [data, setData] = useState([]);
  const [index,setIndex] = useState(0);
  const [dataSearch,setDataSearch] = useState([]);
  // const [state,setState]= useState("");
  function handleClick(id){
    axios.get(`http://localhost:8080/${Category.category}?category_id=${id}`).then(res=>{
      setData(res.data.Food_list)
      console.log(data);
    }).catch(err =>console.log(err));
  }
  useEffect(() => {
    axios.get(`http://localhost:8080/${Category.category}`).then(res=>{
      setData(res.data[0].Food_list); 
      setDataSearch(res.data);
      }).catch(err=>console.log(err));
      if(id !== null){
        dataSearch && dataSearch.forEach((ele,i)=>{
           ele._id == id ?console.log("I is there"):console.log("not i");
        })
      }
    }
  , [])
  

  
  console.log(Category);
  return <>
    <Wrapper>
      <Container maxW='6xl'>
        <Breadcrumb spacing='4px' separator={<AiOutlineCaretRight color='gray.500' />}>
          <BreadcrumbItem>
            <BreadcrumbLink href='#' color="black" textDecoration="none" >Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='#' color="red" textDecoration="none" >{Category.category}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <NameWrapper>
          {Category.category}
          <Tooltip1>

            <img width={"43px"} src='https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78b9c4b2e0'></img>
            <Tooltip label="Working with farmers and partners, picking breed raised humanely on controlled farms." aria-label='A tooltip'>
              Farm raised superior breed
            </Tooltip>
          </Tooltip1>
          <Tooltip1>

            <img width={"43px"} src='https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78bdf673b7'></img>
            <Tooltip label="No Added Chemical , Antibiotic residue free." aria-label='A tooltip'>
              No Added Chemical , Antibiotic residue free.
            </Tooltip>
          </Tooltip1>
        </NameWrapper>
        <hr/>
        <Categories handleClick ={handleClick} query={index} category={Category.category}/>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={"50px"}>
          {
              data && data.map((ele,index)=>{
                return <GridItem key={index} w='100%' h='fit-content'  boxShadow='md' bg='whiteAlpha.800' borderRadius={"10px"} pb={"10px"} >
                <ProductCard data={ele}/>
              </GridItem>
              })
          }
        </Grid>
      </Container>
    </Wrapper>
  </>
}

export { CategoryPage };

export const Wrapper = styled.div`
height:fit-content;
// border:1px solid red;
background-color:#ededed;
padding:10px;
`

export const NameWrapper = styled.div`
  font-size:30px; 
  color:#6c6c6c;
  text-align:left;
  display:flex;
  gap:15px;
  border-bottom:1px solid #e3e0e0;
  height:50px;
`

export const Tooltip1 = styled.div`
  color:gray;
  display:flex;
  font-size:small;
  align-items:center;
  $:hover{
    background-color: grey;
    color:white;
  }
  cursor:pointer;
`
