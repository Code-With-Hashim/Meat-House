import { Avatar, Box, Button, ButtonGroup, Divider, Flex, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Spacer, Stack, Text, useDisclosure } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signout } from "../redux/Authenticated/Authenticated.action"

const getAdminDetail = async (token) => {

    try {

        const res = axios.get(`${process.env.REACT_APP_ADMIN_BASE_URL}adminDetail`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const { data } = await res

        return data

    } catch (error) {

        console.log(error)

    }
}

export const AdminNavbar = () => {

    const token = useSelector(({ auth }) => auth.token) || localStorage.getItem('admin_token')
    const [adminDetail, setAdminDetail] = useState({})
    const dispatch = useDispatch()
    const Navigate = useNavigate() 

    console.log(token)

    useEffect(() => {

        getAdminDetail(token).then((res) => setAdminDetail(res))

    }, [])




    return (
        <Flex p='4' minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Flex gap='6px'>
                    <Heading color={'gray'} size='md'>MEAT</Heading>
                    <Heading color={'tomato'} size='md'>HOUSE</Heading>
                    <Heading color={'tomato'} size='md'>Admin</Heading>
                </Flex>
            </Box>
            <Spacer />
            <Stack direction={'row'} alignItems='center' gap='54'>
                <Button colorScheme='teal'>Sign Up</Button>
                <Popover
                    placement='top-start'
                >
                    <PopoverTrigger>
                        <Avatar ml='10' name={adminDetail.email} src='https://bit.ly/broken-link' />
                    </PopoverTrigger>
                    <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                        <PopoverHeader pt={4} fontWeight='bold' border='0'>
                            Manage Your Details
                        </PopoverHeader>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody>
                            <Stack direction={'column'}>
                                <Button  onClick={() => Navigate("/account Detail")} colorScheme={'blue'}>Account Detail</Button>
                                <Divider />
                                <Button colorScheme={'red'} onClick={() => dispatch(signout())}>Sign Out</Button>
                                <Divider />
                            </Stack>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Stack>
        </Flex>
    )
}