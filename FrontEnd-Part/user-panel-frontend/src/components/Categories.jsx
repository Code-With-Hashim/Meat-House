import React, { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react'
import axios from 'axios';
import { useSelector } from 'react-redux';
function Categories({ category, handleClick, query, SearchData }) {
    console.log({ "Data": SearchData });
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const USER_TOKEN = useSelector((store) => store.AuthReducer.token);
    const AuthStr = `Bearer ${USER_TOKEN}`;
    function find() {
        console.log("Yes");
        if (query !== null) {
            for(let i = 0; i < SearchData.length ;i++) {
             if(SearchData[i]._id=== query){
             setCount(i);
                console.log(i);
             break;
            }
        }
    }
}
    console.log("=====");
    // find();
    console.log("=====");
    console.log(count);
    console.log("=====");
    console.log()
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_MEAT_HOUSE_BASE_URL}${window.location.pathname.split("/")[1]}`).then(res => {
            setData(res.data)
        }).catch(err => console.log(err));
    }, [])


    return <>
        <Tabs colorScheme='red' style={{ display: 'flex', gap: "25px", borderBottom: "1px solid #e3e0e0", height: "fit-content" }} overflowX={"scroll"}>
            <TabList  >
                {
                    data && data.map((ele, index) => {
                        return <Tab key={ele._id} onClick={() => handleClick(ele._id)} display={'flex'} alignItems="center" gap={"5px"} cursor="pointer">
                            <img src={ele.img_container_src} alt="image" style={{ borderRadius: "50%" }} width="30px" />
                            <Text width="157px" color="gray">
                                {ele.Category_List}
                            </Text>
                        </Tab>
                    })
                }
            </TabList>
        </Tabs>
    </>
}

export { Categories };
