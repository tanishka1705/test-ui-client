import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Flex, Divider, Card, CardBody, CardHeader, HStack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Heading } from '@chakra-ui/react'
import { useState } from 'react';
import ActionModal from '../modal/Modal';


const AdminHome = ({ allListedCompanies }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [gstin, setGSTIN] = useState('')
    const [address, setAddress] = useState({})

    return (
        <>
            <Flex flexDirection="column">
                <Flex alignItems='center' justifyContent='flex-start' mt='1em'>
                    <Box>
                        <Heading size='md' color='#34495E'>Welcome to Your Dashboard!</Heading>
                    </Box>
                </Flex>
                <Divider mt="1em" borderColor="blue.500" borderWidth="0.1em" width="55em" />
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
                <TableContainer sx={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', maxWidth: '100%' }} w="55em" >
                    <Table variant='simple' colorScheme='gray'>
                        <Thead>
                            <Tr>
                                <Th fontSize={'15'} sx={{ color: '#0b0e37db' }}>SNO</Th>
                                <Th fontSize={'15'} sx={{ color: '#0b0e37db' }}>Company Name</Th>
                                <Th fontSize={'15'} sx={{ color: '#0b0e37db' }}>GSTIN No</Th>
                                <Th fontSize={'15'} sx={{ color: '#0b0e37db' }}>Address</Th>
                                <Th fontSize={'15'} sx={{ color: '#0b0e37db' }} colSpan={2} p={1.5}>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {allListedCompanies.map((company, indx) => (
                                <Tr key={indx} h='0.2rem' fontSize='sm'>
                                    <Td>{indx + 1}</Td>
                                    <Td fontWeight={'bolder'} fontSize={'md'}>{company.name}</Td>
                                    <Td>{company.gstin}</Td>
                                    <Td fontSize='xs'>
                                        <p>{`${company.address.street}, ${company.address.city}`}</p>
                                        <p>
                                            {`${company.address.state} ${company.address.pin}, ${company.address.country}`}
                                        </p>
                                    </Td>
                                    <Td cursor={'pointer'} p={0}>
                                        <EditIcon color={'blue.500'}
                                            onClick={() => {
                                                setIsOpen(true)
                                                setId(company._id)
                                                setName(company.name)
                                                setGSTIN(company.gstin)
                                                setAddress({
                                                    street: company.address.street,
                                                    city: company.address.city,
                                                    state: company.address.state,
                                                    pin: company.address.pin,
                                                    country: company.address.country
                                                })

                                                setIsOpen(true)
                                            }}
                                        />
                                    </Td>
                                    <Td cursor={'pointer'} p={0}>
                                        <DeleteIcon color={'red.500'} />
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Flex>
            <ActionModal isOpen={isOpen} onClose={setIsOpen} id={id} name={name} gstin={gstin} address={address} setName={setName} setGSTIN={setGSTIN} setAddress={setAddress} />
        </>
    );
}

export default AdminHome;

// import React from 'react';
// import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
// import {
//   Box,
//   Flex,
//   Divider,
//   Card,
//   CardBody,
//   CardHeader,
//   HStack,
//   Heading,
// } from '@chakra-ui/react';

// import DataTable from 'react-data-table-component';

// const columns = [
//   {
//     name: 'Company Name',
//     selector: 'name',
//     sortable: true,
//     sortField: 'name',
//   },
//   {
//     name: 'GSTIN No',
//     selector: 'gstin',

//   },
//   {
//     name: 'Address',
//     selector: 'address',
//   },
//   {
//     name: 'Action',
//     cell: (row) => (
//       <>
//         <EditIcon color={'blue.500'} cursor={'pointer'} p={0}/>
//         <DeleteIcon color={'red.500'} cursor={'pointer'} p={0} ml={2}/>
//       </>
//     ),
//   },
// ];

// const AdminHome = ({ allListedCompanies }) => {
//   const data = allListedCompanies.map((company, indx) => ({
//     sno: indx + 1,
//     name: company.name,
//     gstin: company.gstin,
//     address: (
//       <>
//         <p>{`${company.address.street}, ${company.address.city}`}</p>
//         <p>{`${company.address.state} ${company.address.pin}, ${company.address.country}`}</p>
//       </>
//     ),
//   }));

//   return (
//     <>
//       <Flex flexDirection="column">
//         <Flex alignItems="center" justifyContent="flex-start" mt="1em">
//           <Box>
//             <Heading size="md" color="#34495E">
//               Welcome to Your Dashboard!
//             </Heading>
//           </Box>
//         </Flex>
//         <Divider mt="1em" borderColor="blue.500" borderWidth="0.1em" width="55em" />
//       </Flex>
//       <Flex alignItems="center" justifyContent="center" margin="2rem 0">
//         <HStack spacing={7}>
//           <Card w="17em" style={{ backgroundImage: `url('/images/card.jpg')`, backgroundSize: 'cover' }}>
//             <CardHeader color="white">Total Number of Projects</CardHeader>
//             <CardBody>
//               <Heading color="white">23</Heading>
//             </CardBody>
//           </Card>
//           <Card w="17em" style={{ backgroundImage: `url('/images/cardd2.jpg')`, backgroundSize: 'cover' }}>
//             <CardHeader color="white">Total Number of Companies</CardHeader>
//             <CardBody>
//               <Heading color="white">23</Heading>
//             </CardBody>
//           </Card>
//           <Card w="18em" style={{ backgroundImage: `url('/images/card3.jpg')`, backgroundSize: 'cover' }}>
//             <CardHeader color="white">Invoice Generated in Last 7 days</CardHeader>
//             <CardBody>
//               <Heading color="white">23</Heading>
//             </CardBody>
//           </Card>
//         </HStack>
//       </Flex>
//       <Flex alignItems="center" justifyContent="center" margin="2rem 0">
//         <DataTable
//           title=""
//           columns={columns}
//           data={data}
//           responsive
//         />
//       </Flex>
//     </>
//   );
// };

// export default AdminHome;



