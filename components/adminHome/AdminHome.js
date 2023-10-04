import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Flex, Divider, Card, CardBody, CardFooter, CardHeader, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, Heading } from '@chakra-ui/react'
import React from 'react';
const AdminHome = ({ allListedCompanies }) => {
    return (
        <>
            <Flex flexDirection="column">
                <Flex alignItems='center' justifyContent='flex-start' mt='1em'>
                    <Box>
                        <Heading size='md' color='#34495E'>Welcome to Your Dashboard!</Heading>
                    </Box>
                </Flex>
                <Divider mt="1em" borderColor="blue.500" borderWidth="0.1em" width="55em"/>
            </Flex>
            <Flex alignItems='center' justifyContent='center' margin={'2rem 0'}>
                <HStack spacing={7}>
                    <Card w='17em' style={{ backgroundImage: `url('/images/card.jpg')`, backgroundSize: 'cover' }}>
                        <CardHeader color='white'>Total Number of Projects</CardHeader>
                        <CardBody>
                            <Heading color='white'>23</Heading>
                        </CardBody>
                    </Card>
                    <Card w='17em' style={{ backgroundImage: `url('/images/cardd2.jpg')`, backgroundSize: 'cover' }}>
                        <CardHeader color='white'>Total Number of Companies</CardHeader>
                        <CardBody>
                            <Heading color='white'>23</Heading>
                        </CardBody>
                    </Card>
                    <Card w='18em' style={{ backgroundImage: `url('/images/card3.jpg')`, backgroundSize: 'cover' }}>
                        <CardHeader color='white'>Invoice Generated in Last 7 days</CardHeader>
                        <CardBody>
                            <Heading color='white'>23</Heading>
                        </CardBody>
                    </Card>
                </HStack>                       
            </Flex>
            <Flex alignItems='center' justifyContent='center' margin={'2rem 0'}> 
                <TableContainer sx={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', maxWidth: '100%',overflowX: 'Hidden' }} w="55em" >
                    <Table variant='simple' colorScheme='gray'>
                        <Thead>
                            <Tr>
                                <Th sx={{ fontSize: '0.8rem', color: '#0b0e37db' }}>SNO</Th>
                                <Th sx={{ fontSize: '0.8rem', color: '#0b0e37db' }}>Company Name</Th>
                                <Th sx={{ fontSize: '0.8rem', color: '#0b0e37db' }}>GSTIN No</Th>
                                <Th sx={{ fontSize: '0.8rem', color: '#0b0e37db' }}>Address</Th>
                                <Th sx={{ fontSize: '0.8rem', color: '#0b0e37db' }} colSpan={2} p={1.5}>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {allListedCompanies.map((company, indx) => (
                                <Tr key={indx} h='0.2rem' fontSize='sm'>
                                    <Td>{indx + 1}</Td>
                                    <Td>{company.name}</Td>
                                    <Td>{company.gstin}</Td>
                                    <Td fontSize='xs'>
                                        <p>{`${company.address.street}, ${company.address.city}`}</p>
                                        <p>
                                            {`${company.address.state} ${company.address.pin}, ${company.address.country}`}
                                        </p>
                                    </Td>
                                    <Td cursor={'pointer'} p={0}> 
                                        <EditIcon color={'blue.500'}/>
                                    </Td>
                                    <Td cursor={'pointer'} p={0}>
                                        <DeleteIcon color={'red.500'}/>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Flex>
        </>
    );
}

export default AdminHome;




 