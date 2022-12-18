import { Box, Divider, CardFooter, ButtonGroup, Button, CardBody, Image, Stack, Heading, GridItem, Card, Grid, Flex, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AdminNavbar } from "../../Components/Navbar"


const getSingleCategory = async (token) => {
    try {

        const res = await axios.get(`${process.env.REACT_APP_ADMIN_BASE_URL}products`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const { data } = res

        return data

    } catch (error) {

        console.log(error)

    }
}

export const SingleCategory = () => {
    const [singleCategory, setSingleCategory] = useState()
    const token = useSelector(({ auth }) => auth.token) || localStorage.getItem('admin_token')
    const { id } = useParams()

    useEffect(() => {

        getSingleCategory(token).then((res) => setSingleCategory(res))

    }, [])



    const singleCategoryData = singleCategory && singleCategory.filter((i) => {
        if (id == i.category_id) {
            return i
        }
    })


    if (singleCategoryData && singleCategoryData) {
        console.log(singleCategoryData[0])
    }

    return (
        <Box>
            <AdminNavbar />



            <Stack direction={'column'} gap={6} w='50%' m='auto'>
                {
                    singleCategoryData && <Heading>{singleCategoryData[0].category_name}</Heading>
                }
                {
                    singleCategoryData && singleCategoryData[0].foodCategory.map((i) => (
                        <Flex alignItems={'center'} justifyContent='space-around'>
                            <Image w='10%' src={i.img_container_src} />
                            <Text>{i.Category_List} Collection </Text>
                            <Button>See Collection</Button>
                        </Flex>
                    ))
                }
            </Stack>

        </Box>
    )
}

