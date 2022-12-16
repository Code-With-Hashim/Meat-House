import React, { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react'
import axios from 'axios';

function Categories({category,handleClick}){
    // console.log({"data":data});
    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/${category}`).then(res=>{
          setData(res.data)  
        //   console.log(res);
        // console.log(res)
    }).catch(err=>console.log(err));
      }, [])

    return <>
        <Tabs colorScheme='red' style={{display:'flex',gap:"25px",borderBottom:"1px solid #e3e0e0",height:"70px"}}>
            <TabList>
            {
                data&& data.map((ele,index)=>{
                    return <Tab key={index} onClick={()=>handleClick(ele._id)} display={'flex'} alignItems="center" gap={"5px"} cursor="pointer" >
                        <img src={ele.img_container_src} alt="image" style={{borderRadius:"50%"}} width="30px"/>
                        <Text color="gray">
                        {ele.Category_List}
                        </Text>
                    </Tab>
                })
            }
            </TabList>
        </Tabs>
    </>
}


export  {Categories};