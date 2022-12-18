import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AddtoCart } from '../components/AddtoCart';
import { ExtraInfo } from '../components/ExtraInfo';
import { LiciousWay } from '../components/LiciousWay';
import { SingleProductDetails } from '../components/Singleproduct_details';
import { Wrapper } from './Category.pages';

function SingleProductPage() {
    const { category, id } = useParams();

    const Toast = useToast();
    function PatchRequest(id){
      console.log(id);
        Toast({
          title:"Added Successfully",
          position: 'bottom',
          status: 'success',
          isClosable:true
        })
        axios.post(`http://localhost:8080/cart/${id}`,{},{
              headers:{
            'authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiI2MzllMDJjOTM1ZTZkNGQ1NWRlNGI4MWMiLCJpYXQiOjE2NzEyOTk5NDV9.l43Xnbt_G2o4ZPCg5ENKPsa0ahGNMfOxH1mowCt-sKU"
          }
        }).then((res)=>{
          console.log(res);
        }).catch(err=>console.log(err));
    }

    // console.log("ID",id);
    const [opacity, setOpacity] = useState(1);
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/${category}/${id}`).then((res) => {
            console.log(res);
            setProduct(res.data);
        }).catch(err => console.log(err))
    }, [])

    const Text = [`${product.item_desc}., The red meat pieces have a moderate to strong flavour and firm texture.`,` These pieces are best suited for making biryanis as they turn juicy and succulent when cooked. These bone-in & boneless pieces have been cut specifically for Biryanis as they are ideal for slow-cooking.`,` Use them for a rogan josh or ${category} and you'll love it. Our goats are raised on Licious-approved pastures and are the right age and weight for perfectly tender and succulent meat.`,` Once cut, our meat is fat-trimmed, cleaned, and hygienically vacuum packed., Licious meats are temperature controlled at every stage between 0-4?.`, `This ensures that the meat is chilled not frozen for freshness. As our meats are pre-cleaned and cut, you can use them straight out of the pack. Order Special ${product.product_name} - Shoulder online & we'll deliver to your home!`];
    window.addEventListener('scroll', () => {
        console.log(window.scrollY);
        if (window.scrollY <= 750 && window.scrollY >= 40) {
            setOpacity(0);
        } else if (window.scrollY >= 1070) {
            setOpacity(0);
        } else {
            setOpacity(1);
        }
    })
    return <>
        <Wrapper>
            <Container maxW="6xl">
                <Breadcrumb spacing='4px' separator={<AiOutlineCaretRight color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/' color="black" textDecoration="none" >Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href={`/${category}`} color="gray.500" textDecoration="none" >{category === 'Chicken' ? "Chicken" : ""}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#' color="gray.500" textDecoration="none" >{product.product_name}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <div style={{ height: "50px" }}></div>
                <SingleProductDetails id={id} handleClick={PatchRequest} image={[product.product_image_src, product.product_image_src]}
                    name={product.product_name} summury={[product.cta_text, product.item_desc]} Texts={Text} day={product.message} time={product.message_2} price={product.price}/>
                < AddtoCartCompo opacity={opacity} >
                    <AddtoCart name={product.product_name} Image={product.product_image_src} icon="https://www.licious.in/img/rebranding/express_delivery.svg" day={product.message} time={product.message_2} price={product.price} id={id} handleClick={PatchRequest} />
                </AddtoCartCompo>
                <ExtraInfo></ExtraInfo>
            </Container>
            <LiciousWay />
            <AddtoCart margin="auto" Image={product.product_image_src} name={product.product_name} icon="https://www.licious.in/img/rebranding/express_delivery.svg" day={product.message} time={product.message_2} price={product.price} id={id} handleClick={PatchRequest} />
            {/* <div style={{ height: "1000px" }}></div> */}
        </Wrapper>
    </>
}

export { SingleProductPage };


export const AddtoCartCompo = styled.div`
    opacity:${(props) => props.opacity};
    position:fixed;
    bottom:0px;
    width:85%;
    margin:auto;
    z-index:10;
`

