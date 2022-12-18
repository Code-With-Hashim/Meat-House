import React from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
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
  Tooltip,
  useToast
} from '@chakra-ui/react'
import { Categories } from '../components/Categories';
import { ProductCard } from '../components/Card';
/*
  This function or page is suppose to make an api request on load with passed Category and after having the data from data base we are going to Show that perticular UI Component.


  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI2MzllMDJjOTM1ZTZkNGQ1NWRlNGI4MWMiLCJpYXQiOjE2NzEyOTk5NDV9.l43Xnbt_G2o4ZPCg5ENKPsa0ahGNMfOxH1mowCt-sKU

  {
  "profile_img":"some kine of url of param profile",
  "name":{
      "firstName":"Param",
      "lastName":"Raj"
  },
  "phoneNumber":7818869663,
  "email":"pr6587424@gmail.com",
  "password":"password",
  "gender":"Male",
  "meritalStatus":"Single"
}


*/
// So, for making the patch request we have to pass autherization token in headers then we can do what ever
export const Addtocartfun = (id)=> {
  // alert(id);
  axios.post(`http://localhost:8080/cart/${id}`,{},{
    // this token should come from the localstorage
        headers:{
      'authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI2MzllMDJjOTM1ZTZkNGQ1NWRlNGI4MWMiLCJpYXQiOjE2NzEyOTk5NDV9.l43Xnbt_G2o4ZPCg5ENKPsa0ahGNMfOxH1mowCt-sKU"
    }
  }).then((res)=>{
    console.log(res);
  }).catch(err=>console.log(err));
}

function CategoryPage() {
  const Toast = useToast();
  function PatchRequest(id){
    console.log(id);
      Toast({
        title:"Added Successfully"+id,
        position: 'bottom',
        status: 'success',
        isClosable:true
      })
      axios.post(`http://localhost:8080/cart/${id}`,{},{
        // this token should come from the localstorage
            headers:{
          'authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI2MzllMDJjOTM1ZTZkNGQ1NWRlNGI4MWMiLCJpYXQiOjE2NzEyOTk5NDV9.l43Xnbt_G2o4ZPCg5ENKPsa0ahGNMfOxH1mowCt-sKU"
        }
      }).then((res)=>{
        console.log(res);
      }).catch(err=>console.log(err));
  }
  const query = useLocation().search;
  let id = new URLSearchParams(query).get("category_id");
    // console.log(id);
  const Category = useParams();
  const [data, setData] = useState([]);
  const [dataSearch,setDataSearch] = useState([]);
  function handleClick(id){
    axios.get(`http://localhost:8080/${Category.category}?category_id=${id}`).then(res=>{
      setData(res.data.Food_list)
      // console.log(data);
    }).catch(err =>console.log(err));
  }
  useEffect(() => {
    axios.get(`http://localhost:8080/${Category.category}`).then(res=>{
      setData(res.data[0].Food_list); 
      setDataSearch(res.data);
      }).catch(err=>console.log(err));
    }
  , [Category.category])


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
            <img width={"43px"} src='https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78b9c4b2e0' alt="Farming"></img>
            <Tooltip label="Working with farmers and partners, picking breed raised humanely on controlled farms." aria-label='A tooltip'>
              Farm raised superior breed
            </Tooltip>
          </Tooltip1>
          <Tooltip1>

            <img width={"43px"} src='https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78bdf673b7' alt='props'></img>
            <Tooltip label="No Added Chemical , Antibiotic residue free." aria-label='A tooltip'>
              No Added Chemical , Antibiotic residue free.
            </Tooltip>
          </Tooltip1>
        </NameWrapper>
        <hr/>
        <Categories handleClick ={handleClick} SearchData = {dataSearch} query={id} category={Category.category}/>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={"50px"}>
          {
              data && data.map((ele,index)=>{
                return <GridItem key={index} w='100%' h='fit-content'  boxShadow='md' bg='whiteAlpha.800' borderRadius={"10px"} pb={"10px"} >
               <ProductCard link={`/${Category.category}/${ele.product_id}`} data={ele} handleClick={PatchRequest} id={ele.product_id}/>
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
