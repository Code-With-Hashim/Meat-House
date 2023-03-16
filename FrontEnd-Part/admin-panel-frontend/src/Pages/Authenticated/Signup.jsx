import { useState } from "react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Flex,
    RadioGroup,
    HStack,
    Radio,
    Image,
    Button,
    useToast,
    AlertDescription,
    AlertIcon,
    Alert
} from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { SIGNIN_ERROR } from "../../redux/Authenticated/Authenticated.types"
import axios from "axios"
import { AuthenticatedNavbar } from "../../Components/AuthenticatedNavbar"

const adminInitForm = {
    name: "",
    email: "",
    password: "",
    gender: "Male",
    maritalStatus: "Single"
}


// const signup = async (payload) => {
//     try {

//         const res = await 

//     } catch (error) {

//       

//     }


// }

export const Signup = () => {

    const dispatch = useDispatch()
    const [input, setInput] = useState(adminInitForm)
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const Navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setInput({ ...input, [name]: value })
    }

    const handelSubmit = async () => {

        setLoading(true)
        try {



            if (input.email === "" || input.password === "") {

                toast({
                    position: 'top',
                    variant: 'subtle',
                    title: `Please filled Mandatory field`,
                    status: 'error',
                    isClosable: true,
                })
                setLoading(false)

            } else if (!input.email.includes('@') || !input.email.includes('.com')) {
                toast({
                    position: 'top',
                    variant: 'subtle',
                    title: `Please Enter a Valid Email Address`,
                    status: 'error',
                    isClosable: true,
                })
                setLoading(false)
                console.log(input.email)
            } else if (input.password.length <= 5) {
                toast({
                    position: 'top',
                    variant: 'subtle',
                    title: `Please make a strong password max-length - 5`,
                    status: 'error',
                    isClosable: true,
                })
                setLoading(false)
                console.log(input.email)
            }
            else {
                await axios.post(`${process.env.REACT_APP_ADMIN_BASE_URL}signup`, input)
                toast({
                    position: 'top',
                    variant: 'subtle',
                    title: `Sign Up Successfully`,
                    status: 'success',
                    isClosable: true,
                })
                setLoading(false)
                Navigate("/login")
            }

        } catch (error) {
            console.log(error)
            toast({
                position: 'top',
                variant: 'subtle',
                title: `Something went Wrong , Please try again`,
                status: 'error',
                isClosable: true,
            })
            setLoading(false)
        }



    }






    const isError = input === ''



    return (
        <Box >
            <AuthenticatedNavbar />
            {/* <Box w='250px' h='10%' m='auto'>
            <Image w='100%' src='https://i.ibb.co/Hzt0WV1/Admin-Panel-logo.png' />
            </Box> */}
            <Box w='450px' m='auto' mt={'30'}>
                <Box  border='1px solid gray' p='5' borderRadius={10}>
                    <FormControl >
                        <FormLabel>Enter your Name</FormLabel>
                        <Flex gap='2'>
                            <Input name={'name'} type={'text'} value={input.name} placeholder='Enter your Full Name' onChange={handleInputChange} />
                        </Flex>
                        <FormLabel mt='2'>Email</FormLabel>
                        <Input name={'email'} type='email' value={input.email} placeholder="Enter your Email" onChange={handleInputChange} />
                        {!isError ? (
                            <FormHelperText>
                                {!input.email.includes([! "@", "gmail.com"]) ? "Enter your Valid Email Address" : "Enter Your Email Address"}
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                        <FormLabel mt='2' >Password</FormLabel>
                        <Input type='password' name={'password'} value={input.password} placeholder="Enter your Password" onChange={handleInputChange} />
                        {!isError ? (
                            <FormHelperText>
                                Enter your password
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Password is required.</FormErrorMessage>
                        )}
                        <FormLabel mt='2'>Select Your Gender</FormLabel>
                        <RadioGroup defaultValue='Male' >
                            <HStack spacing='24px'>
                                <Radio name={'gender'} onChange={handleInputChange} value='Male'>Male</Radio>
                                <Radio name={'gender'} onChange={handleInputChange} value='Female'>Female</Radio>
                                <Radio name={'gender'} onChange={handleInputChange} value='Other'>Other</Radio>
                            </HStack>
                        </RadioGroup>
                        <FormLabel mt='2'>Select Your Marital Status</FormLabel>
                        <RadioGroup defaultValue='Single'>
                            <HStack spacing='24px' >
                                <Radio name={'maritalStatus'} onChange={handleInputChange} value='Single'>Single</Radio>
                                <Radio name={'maritalStatus'} onChange={handleInputChange} value='Married'>Married</Radio>
                            </HStack>
                        </RadioGroup>
                        <Button isLoading={loading} onClick={handelSubmit} colorScheme={'red'} mt='5' w='100%'>
                            Submit
                        </Button>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
}

export const ReturnSignUp = () => {
    return <Navigate to={"/signup"} />

}