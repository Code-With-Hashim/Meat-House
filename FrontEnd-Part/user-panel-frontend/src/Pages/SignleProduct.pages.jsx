import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AddtoCart } from '../Components/Addtocard';
import { ExtraInfo } from '../Components/ExtraInfo';
import { LiciousWay } from '../Components/LiciousWay';
import { SingleProductDetails } from '../Components/Singleproduct_details';
import { Wrapper } from './Category.pages';

function SingleProductPage() {
    const { category, subcategory } = useParams();
    // console.log(params);
    const [opacity, setOpacity] = useState(1);
    window.addEventListener('scroll', () => {
        console.log(window.scrollY);
        if (window.scrollY <= 970 && window.scrollY >= 430) {
            setOpacity(0);
        }else if(window.scrollY >= 1100){
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
                        <BreadcrumbLink href='#' color="black" textDecoration="none" >Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#' color="red" textDecoration="none" >{category === 'Chicken' ? "Chicken" : ""}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#' color="red" textDecoration="none" >{subcategory}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <div style={{ height: "100px" }}></div>
                <SingleProductDetails image={["https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ef7b82f5-5d2e-66e1-9c4b-3e3b80e10aa5/original/mutton_cuts-04.jpg?format=webp", "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/WordPress%20user%20designing%20a%20professional-looking%20site.jpg?width=595&height=400&name=WordPress%20user%20designing%20a%20professional-looking%20site.jpg"]}
                    name={"Product Name should be there"} summury={["Detail-1", "Detail-2"]} Texts={["Cut from the shoulder, our Special Goat Biryani Cut - Shoulder has both bone-in and boneless pieces.", "The red meat pieces have a moderate to strong flavour and firm texture. These pieces are best suited for making biryanis as they turn juicy and succulent when cooked.", "These bone-in & boneless pieces have been cut specifically for Biryanis as they are ideal for slow-cooking. Use them for a rogan josh or biryani and you'll love it.", "Our goats are raised on Licious-approved pastures and are the right age and weight for perfectly tender and succulent meat.", "Once cut, our meat is fat-trimmed, cleaned, and hygienically vacuum packed.", "Licious meats are temperature controlled at every stage between 0-4?. This ensures that the meat is chilled not frozen for freshness.", "As our meats are pre-cleaned and cut, you can use them straight out of the pack. Order Special Goat Biryani Cut - Shoulder online & we'll deliver to your home!"]} />


                < AddtoCartCompo opacity={opacity} >
                    <AddtoCart name="Name of the Product" Image="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c4193ac5-54b6-e040-8039-269925e0946b/original/mutton_cuts-03.jpg?format=webp" icon="https://www.licious.in/img/rebranding/express_delivery.svg" day={'Today'} time="8 PM - 10 PM" price={700} />
                </AddtoCartCompo>
                <ExtraInfo></ExtraInfo>
                </Container>
                <LiciousWay/>
                <AddtoCart margin="auto" Image={"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ffd4144f-25a7-6f26-2d90-9a9db0332dda/original/Chicken_Thigh_Boneless_Hero_Shot.jpg?format=webp"} name="Chicken" icon="https://www.licious.in/img/rebranding/express_delivery.svg" day="Monday" time="8 PM - 10 PM" price={700}/>
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

