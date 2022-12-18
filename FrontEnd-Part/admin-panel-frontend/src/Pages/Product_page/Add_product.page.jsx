import {
    Card, GridItem, ButtonGroup, Button, CardFooter, Divider, Heading, Stack, Image, CardBody, Grid, Box, useDisclosure,
    ModalFooter,
    Input,
    FormLabel,
    FormControl,
    ModalBody,
    ModalHeader,
    ModalCloseButton,
    ModalOverlay,
    ModalContent,
    Modal,
    Select,
    useToast
} from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AdminNavbar } from "../../Components/Navbar"
import { getAllProduct } from "../../redux/Products/Products.action"

const productInit = {
    product_img: "",
    product_name: "",
    item_desc: "",
    rupee: "",

}

export const Add_product = () => {

    const food_list = useSelector(({ product }) => product.data)
    const token = useSelector(({ auth }) => auth.token) || localStorage.getItem('admin_token')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    const [product, setProduct] = useState(productInit)
    const [category_id, setCategory_id] = useState([])
    const [idvalue, setValue] = useState('')
    const toast = useToast()

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    useEffect(() => {
        dispatch(getAllProduct(token))
    }, [])

    const handelChange = (e) => {

        const { name, value, files } = e.target

        if (name === 'product_img') {
            setProduct({ ...product, [name]: files[0] })
        } else {
            setProduct({ ...product, [name]: value })
        }

    }

    const handleCategory = (id) => {

        const singleCategory = food_list && food_list.filter((i) => {
            if (id == i.category_id) {
                return i
            }
        })

        setCategory_id(singleCategory)
        onOpen()

    }

    const value = (e) => {
        setValue(e.target.value)
    }

    const handelCreate = async () => {

        const formData = new FormData()
        for (let key in product) {
            formData.append(key, product[key])
        }


        try {

            const data = await axios.post(`${process.env.REACT_APP_ADMIN_BASE_URL}products/create?category_id=${idvalue}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast({
                position: 'top',
                variant: 'subtle',
                title: `Item Added Successfully`,
                status: 'success',
                isClosable: true,
            })

            setProduct(productInit)
            onClose()
        } catch (error) {

        }

    }

    return (
        <Box>
            <AdminNavbar />
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>

                {

                    food_list && food_list.map((i) => (
                        <GridItem key={i.category_id}>
                            <Card maxW='sm'>
                                <CardBody>
                                    <Image
                                        src={i.product_img_src}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>{i.category_name} Collections</Heading>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button onClick={() => handleCategory(i.category_id)} variant='solid' colorScheme='blue'>
                                            Add Product
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    ))
                }
            </Grid>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Product Item in this Category</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form enctype="multipart/form-data">
                            <FormControl>
                                <Select variant='outline' placeholder='Select Category' onClick={value} >
                                    {

                                        category_id && category_id[0] && category_id[0].foodCategory.map((i) => (
                                            <option value={i._id}>{i.Category_List}</option>
                                        ))
                                    }
                                </Select>
                                <FormLabel>Product Image</FormLabel>
                                <Input onChange={handelChange} name='product_img' ref={initialRef} type='file' placeholder='Select Image' />
                                <FormLabel>Item Name</FormLabel>
                                <Input onChange={handelChange} value={product.product_name} name='product_name' ref={initialRef} placeholder='First Item Name' />
                                <FormLabel>Item Desc</FormLabel>
                                <Input onChange={handelChange} value={product.item_desc} name='item_desc' placeholder='Enter about Item' />
                                <FormLabel>Item Price</FormLabel>
                                <Input onChange={handelChange} name='rupee' value={product.rupee} placeholder='Enter Item Price' />
                            </FormControl>
                            <ModalFooter>
                                <Button onClick={handelCreate} colorScheme='blue' mr={3}>
                                    Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </form>
                    </ModalBody>

                </ModalContent>
            </Modal>

        </Box>
    )

}