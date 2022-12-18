import { Button, Card, CardBody, CardFooter, Heading, Stack, Image, Text, Box } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { AdminNavbar } from "../../Components/Navbar"


export const AdminDashboard = () => {

    const Navigate = useNavigate()

    return (
        <>
            <AdminNavbar />
            <Stack w='60%' ml='10%' direction={'column'} gap='10'>
                <Box >
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://images.ctfassets.net/eexbcii1ci83/5r6PHf2iTfxOAjH9VkY6ml/baa3f881ffe29085e5303f17cb7ba3af/Indian_non-veg_Diet_plan.png'
                            alt='Caffe Latte'
                        />

                        <Stack>
                            <CardBody>
                                <Heading size='md'>Food Item List</Heading>

                                <Text py='2'>
                                    Meat House your all food item list if you know more about all the product Item and Detail .
                                    Click on Button
                                </Text>
                            </CardBody>

                            <CardFooter>
                                <Button onClick={() => Navigate("./Food Item List")} variant='solid' colorScheme='blue'>
                                    Know More
                                </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Box>
                <Box>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://w7.pngwing.com/pngs/15/869/png-transparent-users-group-multi-user-edit-user-s-blue-computer-advertising-thumbnail.png'
                            alt='Caffe Latte'
                        />

                        <Stack>
                            <CardBody>
                                <Heading size='md'>User List</Heading>

                                <Text py='2'>
                                    Meat House of all User List you can know more about .
                                    Click on Button
                                </Text>
                            </CardBody>

                            <CardFooter>
                                <Button onClick={() => Navigate("./User List")} variant='solid' colorScheme='blue'>
                                    Know More
                                </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Box>
            </Stack>
        </>


    )

}