import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export const AuthenticatedNavbar = () => {
    const Navigate = useNavigate()


    return (
        <Flex w={'80%'} p='5 ' m='auto' alignItems='center'>
            <Box p='2'>
                <Heading size='md'>MEAT HOUSE</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                {
                    window.location.pathname === "/login" ? <Button onClick={() => Navigate("/signup")} colorScheme={'green'}>Create an Account</Button> :
                        <Button onClick={() => Navigate("/login")} colorScheme='green'>Already have an Account?</Button>
                }
            </ButtonGroup>
        </Flex>
    )

}