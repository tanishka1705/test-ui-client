import { Box, Flex, Divider, Card, CardBody, CardFooter, CardHeader, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, Heading } from '@chakra-ui/react'
import React from 'react';
const AdminHome = ({ allListedCompanies }) => {
    return (
        <>
            <Flex flexDirection="column">
                <Flex alignItems='center' justifyContent='flex-start' mt='3em'>
                    <Box position='relative' left='20em'>
                        <Heading size='md' color='#34495E'>Welcome to Your Dashboard</Heading>
                    </Box>
                </Flex>
                <Divider mt="1em" borderColor="blue.500" borderWidth="0.1em" width="55em" position='relative' left='20em' />
            </Flex>
            <Flex alignItems='center' justifyContent='center' position='absolute' left='20em' top='8em'>
                <HStack spacing={7}>
                    <Card bg={'blue'} w='17em' style={{ backgroundImage: `url('/images/card.jpg')`, backgroundSize: 'cover' }}>
                        <CardHeader color='white'>Total Number of Projects</CardHeader>
                        <CardBody>
                            <Heading color='white'>23</Heading>
                        </CardBody>
                    </Card>
                    <Card bg='yellow' w='17em' style={{ backgroundImage: `url('/images/card2.jpeg')`, backgroundSize: 'cover' }}>
                        <CardHeader color='white'>Total Number of Companies</CardHeader>
                        <CardBody>
                            <Heading color='white'>23</Heading>
                        </CardBody>
                    </Card>
                    <Card bg='pink' w='18em' style={{ backgroundImage: `url('/images/card3.jpg')`, backgroundSize: 'cover' }}>
                        <CardHeader color='white'>Invoice Generated in Last 7 days</CardHeader>
                        <CardBody>
                            <Heading color='white'>23</Heading>
                        </CardBody>
                    </Card>
                </HStack>

                                
            </Flex>
        </>
    )
}

export default AdminHome