import {
    Box, Divider, CardFooter, ButtonGroup, Button, CardBody, Image, Stack, Heading, GridItem, Card, Grid, Flex, Text, Tabs, TabList, Tab, TabPanels, TabPanel, useDisclosure, Modal, ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useToast
} from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useSearchParams } from "react-router-dom"
import { AdminNavbar } from "../../Components/Navbar"
import { category, getAllProduct } from "../../redux/Products/Products.action"


export const SingleCategory = () => {
    const token = useSelector(({ auth }) => auth.token) || localStorage.getItem('admin_token')
    const { id } = useParams()
    const toast = useToast()
    const singleCategory = useSelector(({ product }) => product.data)
    const [product_id, setProductId] = useState()
    const [foodDataList, setFoodDataList] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProduct(token))
    }, [])



    // useEffect(() => {

    // },[])

    const singleCategoryData = singleCategory && singleCategory.filter((i) => {
        if (id == i.category_id) {
            return i
        }
    })



    const handleFoodList = async (id) => {

        const foodData = await axios.get(`${process.env.REACT_APP_ADMIN_BASE_URL}products/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setFoodDataList(foodData.data.Food_list)
    }

    useEffect(() => {

        singleCategoryData && singleCategoryData[0] && axios.get(`${process.env.REACT_APP_ADMIN_BASE_URL}products/${singleCategoryData[0].foodCategory[0]._id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => setFoodDataList(res.data.Food_list))
            .catch((err) => console.log(err))

    }, [product_id, singleCategory[0] && singleCategory])

    const handleDelete = async () => {
        try {

            let data = await axios.delete(`${process.env.REACT_APP_ADMIN_BASE_URL}products/${product_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast({
                position: 'top',
                variant: 'subtle',
                title: `Item Delete Successfully`,
                status: 'error',
                isClosable: true,
            })
            setProductId(null)
            onClose()


        } catch (error) {
            console.log(error)
        }
    }

    const handelId = (id) => {

        setProductId(id)
        onOpen()

    }

    console.log(singleCategory)



    console.log(foodDataList)

    return (
        <Box>
            <AdminNavbar />


            {
                singleCategoryData && singleCategoryData[0] && <Heading>{singleCategoryData[0].category_name}</Heading>
            }
            <Tabs isLazy margin={'auto'} defaultIndex={0}>
                <TabList >
                    {
                        singleCategoryData && singleCategoryData[0] && singleCategoryData[0].foodCategory.map((i) => (
                            <Tab onClick={() => handleFoodList(i._id)}>{i.Category_List}</Tab>
                        ))
                    }
                </TabList>
                <TabPanels >
                    <Grid templateColumns={'repeat(4,1fr)'} gap='5'>
                        {
                            foodDataList && foodDataList.map((i) => (
                                <Card maxW='sm'>
                                    <CardBody>
                                        <Image
                                            src={i.product_image_src}
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
                                            <Button variant='solid' colorScheme='green'>
                                                Update
                                            </Button>
                                            <Button onClick={() => handelId(i.product_id)} variant='ghost' colorScheme='red'>
                                                Delete
                                            </Button>
                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>
                            ))
                        }
                    </Grid>
                </TabPanels>
            </Tabs>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete Item</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Are you Sure you want to Delete this Item
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='green' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={handleDelete} colorScheme={'red'} variant='ghost'>Delete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box >
    )
}

