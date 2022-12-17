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
    Button
} from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux"
import { signup } from "../../redux/Authenticated/Authenticated.action"

const adminInitForm = {
    name: "",
    email: "",
    password: "",
    gender: "Male",
    maritalStatus: "Single"
}

export const Signup = () => {

    const dispatch = useDispatch()
    const [input, setInput] = useState(adminInitForm)
    const {loading} = useSelector(({auth}) => (auth))

    

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setInput({ ...input, [name]: value })
    }

    const handelSubmit = async () => {

        dispatch(signup(input))

    }




    const isError = input === ''



    return (
        <Box w='450px' m='auto' mt={'30'} border='1px solid gray' p='5' borderRadius={10}>
            {/* <Box w='250px' h='10%' m='auto'>
            <Image w='100%' src='https://i.ibb.co/Hzt0WV1/Admin-Panel-logo.png' />
            </Box> */}
            <FormControl >
                <FormLabel>Enter your Name</FormLabel>
                <Flex gap='2'>
                    <Input name={'name'} type={'text'} value={input.name} placeholder='Enter your Full Name' onChange={handleInputChange} />
                </Flex>
                <FormLabel mt='5'>Email</FormLabel>
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
                <FormLabel mt='5'>Select Your Gender</FormLabel>
                <RadioGroup defaultValue='Male' >
                    <HStack spacing='24px'>
                        <Radio name={'gender'} onChange={handleInputChange} value='Male'>Male</Radio>
                        <Radio name={'gender'} onChange={handleInputChange} value='Female'>Female</Radio>
                        <Radio name={'gender'} onChange={handleInputChange} value='Other'>Other</Radio>
                    </HStack>
                </RadioGroup>
                <FormLabel mt='5'>Select Your Marital Status</FormLabel>
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
    )
}