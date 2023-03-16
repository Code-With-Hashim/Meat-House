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
    Toast,
    useToast,
    Alert,
    AlertIcon
} from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../redux/Authenticated/Authenticated.action"
import { Navigate } from "react-router-dom"
import { AuthenticatedNavbar } from "../../Components/AuthenticatedNavbar"

const adminInitForm = {
    email: "",
    password: "",
}

export const SignIn = () => {

    const dispatch = useDispatch()
    const toast = useToast()
    const [input, setInput] = useState(adminInitForm)
    const { loading, data, error } = useSelector(({ auth }) => (auth))


    if (data.isAuth) {
        toast({
            position: 'top',
            title: 'Login Successfully.',
            description: "Happy to See you Admin",
            status: 'success',
            isClosable: true,
        })
        return <Navigate to="/Dashboard" />
    }



    const handleInputChange = (e) => {
        const { name, value } = e.target

        setInput({ ...input, [name]: value })
    }

    const handelSubmit = async () => {

        dispatch(login(input))

    }




    const isError = input === ''



    return (
        <>
            <AuthenticatedNavbar />
            <Box w='450px' m='auto' mt={'30'}>
                {
                    error ? <Alert status='error' mb='5' variant={'solid'}>
                        <AlertIcon />
                        Something went wrong , please try again
                    </Alert> : <></>
                }
                <Box border='1px solid gray' p='5' borderRadius={10}>
                    {/* <Box w='250px' h='10%' m='auto'>
            <Image w='100%' src='https://i.ibb.co/Hzt0WV1/Admin-Panel-logo.png' />
            </Box> */}

                    <FormControl >
                        <FormLabel >Email</FormLabel>
                        <Input name={'email'} type='email' value={input.email} placeholder="Enter your Email" onChange={handleInputChange} />
                        {!isError ? (
                            <FormHelperText>
                                {input.email.includes([! "@", "gmail.com"]) ? "Enter your Valid Email Address" : "Enter Your Email I'D"}
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                        <FormLabel mt='5' >Password</FormLabel>
                        <Input type='password' name={'password'} value={input.password} placeholder="Enter your Password" onChange={handleInputChange} />
                        {!isError ? (
                            <FormHelperText>
                                Enter your password
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Password is required.</FormErrorMessage>
                        )}
                        <Button isLoading={loading} onClick={handelSubmit} colorScheme={'red'} mt='5' w='100%'>
                            Submit
                        </Button>
                    </FormControl>
                </Box>
            </Box>
        </>
    )
}