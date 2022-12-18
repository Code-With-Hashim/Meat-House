import { Container, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
// import { ExtraInfoWrapper } from './Singleproduct_details';
import { AiFillCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from 'react-icons/rx';
function ExtraInfo({ data }) {
    const [image,setImage] = useState(true);
    const image1="https://s3-ap-southeast-1.amazonaws.com/licious/pdp/1555488850.8136--2019-04-1713:44:10--458";
    const image2 = "https://s3-ap-southeast-1.amazonaws.com/licious/pdp/1555488868.3652--2019-04-1713:44:28--458";
    return <>
        <ExtraInfoWrapper>
            <div style={{ height: "250px", width: '100%', padding: "20px" }}>
                <img  style={{height:"100%"}} width='100%' src={image?image1:image2} alt="images" />
            </div>
            <div style={{ height: "fit-content", width: '100%', paddingInline: "20px" }}>
                <Tabs colorScheme='green'>
                    <TabList style={{ display: "flex", justifyContent: "space-between" }}>
                        <Tab onClick={()=>{
                            setImage(true);
                        }}>What you get</Tab>
                        <Tab onClick={()=>{
                            setImage(false);
                        }}>Sourcing</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Text style={{ textAlign: 'left', fontWeight: "bold" }}>What's in your Box</Text>
                            <List spacing={3}>
                                <ListItem style={{ textAlign: 'left' }}>
                                    <ListIcon as={AiFillCheckCircle} color='green.500' />
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                </ListItem>
                                <ListItem style={{ textAlign: 'left' }}>
                                    <ListIcon as={AiFillCheckCircle} color='green.500' />
                                    Assumenda, quia temporibus eveniet a libero incidunt suscipit
                                </ListItem>
                                <ListItem style={{ textAlign: 'left' }}>
                                    <ListIcon as={AiFillCheckCircle} color='green.500' />
                                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                                </ListItem> <ListItem style={{ textAlign: 'left' }}>
                                    <ListIcon as={AiFillCheckCircle} color='green.500' />
                                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                                </ListItem>
                                {/* You can also use custom icons from react-icons */}
                                <ListItem style={{ textAlign: 'left' }}>
                                    <ListIcon as={RxCrossCircled} color='red.500' />
                                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                                </ListItem>
                            </List>
                        </TabPanel>
                        <TabPanel display={'flex'} flexDirection="column" gap="20px">
                            <Text textAlign={"left"} fontSize={"sm"} color="gray">The farming of chickens involves a keen science behind it. Our chickens come from Licious -curated farms across South India.  Doing away with industrial farming, our chickens are reared on a cluster of individual farms according to specifications drawn out by expert meat scientists. This facilitates natural farming methods and control on the feds of the animals.</Text>
                            <Text textAlign={"left"} fontSize={"sm"} color="gray">Each birds is carefully checked by approved veterinary doctors, who performs ante-mortem and post-mortem inspection and certify their health and fitness for Human consumption.</Text>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </ExtraInfoWrapper>

    </>
}

export { ExtraInfo };
export const ExtraInfoWrapper = styled.div`
display:grid;
grid-template-columns:50% 50%;
gap:10px;
background-color:white;
padding:20px; 
`
