import { Box, Card, CardHeader, Stack, StackDivider, Heading, Text, CardBody, Avatar, Button } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AdminNavbar } from "../../Components/Navbar"

const getUserData = async (token) => {
    try {

        const res = await axios.get(`${process.env.REACT_APP_ADMIN_BASE_URL}userdetail`, {
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

export const MultiUserPage = () => {

    const [getUserList, setUserList] = useState([])
    const token = useSelector(({ auth }) => auth.token) || localStorage.getItem('admin_token')
    const Navigate = useNavigate()

    useEffect(() => {
        getUserData(token).then((res) => setUserList(res))

    }, [])

    console.log(getUserList)


    return (
        <Box>
            <AdminNavbar />
            <Card w='80%' m='auto' mt='5'>
                <CardHeader>
                    <Heading size='md'>User Report</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        {
                            getUserList && getUserList.map((i) => (
                                <Stack direction={'row'} alignItems='center' justifyContent={'space-evenly'}>
                                    <Avatar size='xl' src={i.profile_img == undefined || "" ? "https://bit.ly/broken-link" : i.profile_img} />
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            USER NAME : - {i.name == undefined || "" ? 'Not Updated' : i.name}
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            Email ID : - {i.email}
                                        </Text>
                                        <Text pt='2' fontSize='sm'>
                                            User IP : - {i.UserIP}
                                        </Text>
                                        <Text pt='2' fontSize='sm'>
                                            Account Create At : - {i.createdAt}
                                        </Text>
                                    </Box>
                                    <Button onClick={()=> Navigate(`/Dashboard/Single User?UserId=${i._id}`)} colorScheme={'blue'}>
                                        View More
                                    </Button>
                                </Stack>
                            ))
                        }
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    )


}