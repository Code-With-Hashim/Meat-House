import {
    Box,
    CardHeader,
    Flex,
    Avatar,
    Text,
    CardBody,
    Image, CardFooter, Heading, Card, GridItem, ButtonGroup, Divider, Stack, Grid, useDisclosure,
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
    useToast,
    Button,
    RadioGroup,
    HStack,
    Radio,

} from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AdminNavbar } from "../../Components/Navbar"


const adminInitState = {
    profile_img: "",
    name: "",
    email: "",
    gender: "",
    maritalStatus: ""
}


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


export const Account_Detail = () => {

    const token = useSelector(({ auth }) => auth.token) || localStorage.getItem('admin_token')
    const [adminDetail, setAdminDetail] = useState({})
    const [UpdateAdmin, setUpdateAdmin] = useState(adminInitState)
    const [update, setUpdate] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const handelChange = (e) => {

        const { name, value, files } = e.target

        if (name === 'profile_img') {
            setUpdateAdmin({ ...UpdateAdmin, [name]: files[0] })
        } else {
            setUpdateAdmin({ ...UpdateAdmin, [name]: value })
        }

    }
    const handelCreate = async () => {
        const formData = new FormData()

        for (let key in UpdateAdmin) {
            formData.append(key, UpdateAdmin[key])
        }
        try {

            const data = await axios.patch(`${process.env.REACT_APP_ADMIN_BASE_URL}updatedetail`, formData, {

                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'

                }
            })

            setUpdate(!update)

            toast({
                position: 'top',
                variant: 'subtle',
                title: `Profile Update Successfully`,
                status: 'success',
                isClosable: true,
            })

            setUpdateAdmin(adminInitState)
            onClose()


        } catch (error) {

        }
    }

    useEffect(() => {

        getAdminDetail(token).then((res) => setAdminDetail(res))

    }, [update])


    return (
        <Box>
            <AdminNavbar />
            <Card maxW='lg' m='auto' p='5'>
                <CardHeader>
                    <Flex spacing='4'>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar size='xl' name='Segun Adebayo' src={adminDetail.profile_img} />

                            <Box>
                                <Heading size='lg'>Name : {adminDetail.name === undefined || adminDetail.name === "" ? 'Not Updated' : adminDetail.name}</Heading>
                                <Text fontSize={"xl"}>Admin</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Text fontSize={"xl"}>
                        Email Address : {adminDetail.email}
                    </Text>
                    <Text mt='5' fontSize={"xl"}>
                        Gender : {adminDetail.gender}
                    </Text>
                    <Text mt='5' fontSize={"xl"}>
                        Marital Status : {adminDetail.maritalStatus}
                    </Text>
                    <Button onClick={onOpen} mt='5' colorScheme={'green'}>
                        Update Detail
                    </Button>
                </CardBody>
            </Card>
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
                                <FormLabel mt='5'>Profile Image</FormLabel>
                                <Input onChange={handelChange} name='profile_img' ref={initialRef} type='file' placeholder='Select Image' />
                                <FormLabel mt='5'>Name</FormLabel>
                                <Input name='name' onChange={handelChange} value={UpdateAdmin.name} ref={initialRef} placeholder='Enter Your Full Name' />
                                <FormLabel mt='5'>Email</FormLabel>
                                <Input name='email' onChange={handelChange} value={UpdateAdmin.email} placeholder='Enter Your Email Address' />
                                <FormLabel mt='5'>Gender</FormLabel>
                                <HStack spacing='24px'>
                                    <RadioGroup defaultValue={adminDetail.gender}>
                                        <Radio name='gender' onChange={handelChange} value='Male'>Male</Radio>
                                        <Radio name='gender' onChange={handelChange} value='Female'>Female</Radio>
                                        <Radio name='gender' onChange={handelChange} value='Other'>Other</Radio>
                                    </RadioGroup>
                                </HStack>
                                <FormLabel mt='5'>Marital Status</FormLabel>
                                <HStack spacing='24px' gap='2'>
                                    <RadioGroup defaultValue={adminDetail.maritalStatus}>
                                        <Radio name="maritalStatus" onChange={handelChange} value='Single'>Single</Radio>
                                        <Radio name="maritalStatus" onChange={handelChange} value='Married'>Married</Radio>
                                    </RadioGroup>
                                </HStack>
                            </FormControl>
                            <ModalFooter>
                                <Button onClick={() => handelCreate(adminDetail.id)} colorScheme='blue' mr={3}>
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