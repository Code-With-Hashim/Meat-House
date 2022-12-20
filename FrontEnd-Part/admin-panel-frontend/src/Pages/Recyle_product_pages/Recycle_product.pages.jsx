import { Box, Grid, GridItem, Button, ButtonGroup, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Toast, useToast } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { resolvePath } from "react-router-dom"
import { AdminNavbar } from "../../Components/Navbar"


const getRecyleData = async (token) => {


    try {

        const res = await axios.get(`${process.env.REACT_APP_ADMIN_BASE_URL}recycle`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const { data } = res


        return data

    } catch (error) {

    }
}

export const Recyle_Product = () => {
    const [recycle, setRecycleData] = useState([])
    const token = useSelector(({ auth }) => auth.token) || localStorage.getItem('admin_token')
    const [deleteItem, setDeleteItem] = useState(false)
    const toast = useToast()

    useEffect(() => {
        getRecyleData(token).then((res) => setRecycleData(res))
    }, [deleteItem])

    const handleRestore = async (id) => {

        try {

            const res = await axios.post(`${process.env.REACT_APP_ADMIN_BASE_URL}recycle/${id}`, JSON.stringify({ data: "" }), {

                headers: {
                    Authorization: `Bearer ${token}`
                }

            })

            setDeleteItem(!deleteItem)
            toast({
                position: 'top',
                variant: 'subtle',
                title: `Item Restore Successfully`,
                status: 'success',
                isClosable: true,
            })



        } catch (error) {
            console.log(error)
        }
    }



    const handleDelete = async (id) => {
        try {

            axios.delete(`${process.env.REACT_APP_ADMIN_BASE_URL}recycle/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setDeleteItem(!deleteItem)
            toast({
                position: 'top',
                variant: 'subtle',
                title: `Item Permanently Deleted Successfully`,
                status: 'error',
                isClosable: true,
            })
           
        } catch (error) {

        }
    }


    console.log(recycle)

    return (
        <Box>
            <AdminNavbar />
            <Grid templateColumns={`repeat(3,1fr)`} gap='5'>
                {
                    recycle.status === false ? <Image w='100%' ml={'400px'} src="https://i.ibb.co/QvcKs4s/ITEM-no-exist.png" alt="ITEM-no-exist" /> : recycle && recycle.map((i) => (
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
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button onClick={() => handleRestore(i.product_id)} variant='solid' colorScheme='green'>
                                            Restore
                                        </Button>
                                        <Button onClick={() => handleDelete(i.product_id)} variant='ghost' colorScheme='red'>
                                            Permanently Delete
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </GridItem>

                    ))
                }
            </Grid>

        </Box>
    )
}