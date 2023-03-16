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
import { useDispatch, useSelector } from 'react-redux';
import { cartData } from '../redux/AppReducer/Action';
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



function CategoryPage() {
  const car=useSelector((store)=>store.AppReducer.cart)
  const USER_TOKEN = useSelector((store) => store.AuthReducer.token);
  const AuthStr = `Bearer ${USER_TOKEN}`;
  const Toast = useToast();

  const dispatch = useDispatch()

  function PatchRequest(id){
    console.log(car)
    console.log(id);
      
      axios.post(`${process.env.REACT_APP_CART_URL}${id}`,{},{
        headers: { Authorization: AuthStr },
        
      }).then((res)=>{
        Toast({
          title:"Added Successfully",
          position: 'bottom',
          status: 'success',
          isClosable:true
        })
        dispatch(cartData(!car))
        console.log(res);
      }).catch(err=>console.log(err));
      
  }

  // ?od=1234234
  const query = useLocation().search;
  console.log(query);
  let id = new URLSearchParams(query).get("category_id");
  const Category = useParams();
  const [data, setData] = useState([]);
  const [dataSearch,setDataSearch] = useState([]);
  function handleClick(id){
    axios.get(`${process.env.REACT_APP_MEAT_HOUSE_BASE_URL}${Category.category}?category_id=${id}`).then(res=>{
      setData(res.data.Food_list)
      // console.log(res)
      // console.log(data);
    }).catch(err =>console.log(err));
  }
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_MEAT_HOUSE_BASE_URL}${Category.category}`).then(res=>{
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
            <Image src='https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78b9c4b2e0' alt="Farming"></Image>
            <Tooltip label="Working with farmers and partners, picking breed raised humanely on controlled farms." aria-label='A tooltip'>
              Farm raised superior breed
            </Tooltip>
          </Tooltip1>
          <Tooltip1>

            <Image src='https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78bdf673b7' alt='props'></Image>
            <Tooltip label="No Added Chemical , Antibiotic residue free." aria-label='A tooltip'>
              No Added Chemical , Antibiotic residue free.
            </Tooltip>
          </Tooltip1>
        </NameWrapper>
        <hr/>
        <Categories handleClick ={handleClick} SearchData = {dataSearch} query={id} category={Category.category}/>
        {/* Responsive ness of this grid is complete */}
        <Grid templateColumns={{base:'100%',sm:'50% 50%',md:'50% 50%',lg:'32% 32% 32%',xl:'repeat(3,1fr)'}} gap={{base:2,sm:3,md:3}} mt={{base:"30px",sm:"30px",md:"40px"}}>
          {
              data && data.map((ele,index)=>{
                return <GridItem key={index} w={{base:'100%',sm:'100%',md:"96%",lg:"96%"}} h='fit-content'  boxShadow='md' bg='whiteAlpha.800' borderRadius={"10px"} pb={"10px"} >
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

export const Image = styled.img`
    width:43px;
    @media all and (max-width:620px) and (min-width:300px){
      width:35px;
    }
`

export const Wrapper = styled.div`
height:fit-content;
// border:1px solid red;
background-color:#ededed;
padding:10px;
margin-top:80px;
@media all and (max-width:902px) and (min-width:700px){
  padding:0px;
}
`

export const NameWrapper = styled.div`
  font-size:30px; 
  color:#6c6c6c;
  text-align:left;
  display:flex;
  gap:15px;
  border-bottom:1px solid #e3e0e0;
  height:fit-content;
  @media all and (max-width:620px) and (min-width:300px){
    displey:flex;
    flex-direction:column;
    gap:0px;
  }
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
