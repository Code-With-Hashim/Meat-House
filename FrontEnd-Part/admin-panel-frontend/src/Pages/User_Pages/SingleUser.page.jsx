import {
    Box, Image, Text, CardBody, CardFooter, Flex, Avatar, Heading, IconButton,
    Card, CardHeader, Stack, Divider, ButtonGroup, Button, Grid, GridItem

} from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { AdminNavbar } from "../../Components/Navbar"


const getSingleUser = async (id, token) => {
    try {

        const res = await axios.get(`${process.env.REACT_APP_ADMIN_BASE_URL}userdetail/${id}`, {
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

export const SingleUser = () => {

    const UserID = useLocation().search

    const id = new URLSearchParams(UserID).get("UserId")
    const token = useSelector(({ auth }) => auth.token) || localStorage.getItem('admin_token')
    const [userDetail, setUserDetail] = useState()

    useEffect(() => {
        getSingleUser(id, token).then((res) => setUserDetail(res))
    }, [])



    console.log(userDetail)

    return (
        <Box>
            <AdminNavbar />
            <Card w='50%' m='auto'>
                <CardHeader>
                    {
                        userDetail && userDetail.map((i) => {
                            if (i.userList) {
                                return (
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                        <Avatar src={i.userList.profile_img == undefined || "" ? "https://bit.ly/broken-link" : i.userList.profile_img} />

                                        <Box>
                                            <Heading size='sm'>{i.userList.name === undefined || '' ? 'Not Updated' : i.userList.name}</Heading>
                                            <Text>Email ID : {i.userList.email}</Text>
                                        </Box>
                                    </Flex>
                                )
                            }

                            if (i.UserAddress) {
                                return (
                                    <CardBody>
                                        <Text fontSize='2xl'>
                                            User Address : -  {i.UserAddress.address == undefined || "" ? "Not Updated" : i.UserAddress.address}
                                        </Text>
                                        <Text fontSize='2xl'>
                                            Fetch Location : - {i.UserAddress.fetchLocation == undefined || "" ? "Not Updated" : i.UserAddress.fetchLocation}
                                        </Text>
                                    </CardBody>
                                )

                            }

                            if (i.UserCart) {
                                return (<Box mt='10'>
                                    <Text fontSize='2xl' p='5'>User Cart Detail</Text>
                                    <Grid templateColumns={`repeat(2,1fr)`} gap='5'>
                                        {
                                            i.UserCart && i.UserCart.Cart.map((i) => (
                                                <GridItem>
                                                    <Card maxW='sm'>
                                                        <CardBody>
                                                            <Image
                                                                src={i.product_image_src}
                                                                alt='Green double couch with wooden legs'
                                                                borderRadius='lg'
                                                            />
                                                            <Stack mt='6' spacing='3'>
                                                                <Heading size='md'>{i.product_name}</Heading>
                                                                <Text>
                                                                   {i.item_desc}
                                                                </Text>
                                                                <Text color='blue.600' fontSize='2xl'>
                                                                    {i.rupee}
                                                                </Text>
                                                            </Stack>
                                                        </CardBody>
                                                        <Divider />
                                                    </Card>

                                                </GridItem>

                                            ))
                                        }
                                    </Grid>
                                </Box>
                                )
                            }
                        })
                    }
                </CardHeader>
                <CardFooter
                    justify='space-between'
                    flexWrap='wrap'
                    sx={{
                        '& > button': {
                            minW: '136px',
                        },
                    }}
                >
                </CardFooter>
            </Card>
        </Box>
    )

}