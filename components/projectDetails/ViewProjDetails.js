import React from 'react'
import { Box, Heading, Flex, Divider, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

const ViewProjDetails = ({allListedProjects}) => {
  return (
    <>
    <Flex flexDirection="column">
        <Flex alignItems='center' justifyContent='flex-start' mt='1em'>
          <Box>
            <Heading size='md' color='#34495E'>View Project Details</Heading>
          </Box>
        </Flex>
        <Divider mt="1em" borderColor="blue.500" borderWidth="0.1em" width="55em" />
      </Flex>
      <Flex alignItems='center' justifyContent='center' margin={'2rem 0'}> 
                <TableContainer sx={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px', maxWidth: '100%'}} w="55em" >
                    <Table variant='simple' colorScheme='gray'>
                        <Thead>
                            <Tr>
                                <Th sx={{ fontSize: '0.8rem', color: '#0b0e37db' }}>SNO</Th>
                                <Th sx={{ fontSize: '0.8rem', color: '#0b0e37db' }}>Description</Th>
                                <Th sx={{ fontSize: '0.8rem', color: '#0b0e37db' }}>Rate</Th>
                                <Th sx={{ fontSize: '0.8rem', color: '#0b0e37db' }}>Total Hour</Th>
                                <Th sx={{ fontSize: '0.8rem', color: '#0b0e37db' }}>Conversion Rate</Th>
                                <Th sx={{ fontSize: '0.8rem', color: '#0b0e37db' }} colSpan={2} p={1.5}>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {allListedProjects.map((project, indx) => (
                                <Tr key={indx} h='0.2rem' fontSize='sm'>
                                    <Td>{indx + 1}</Td>
                                    <Td>{project.description}</Td>
                                    <Td>{project.rate}</Td>
                                    {/* <Td fontSize='xs'>
                                        <p>{`${company.address.street}, ${company.address.city}`}</p>
                                        <p>
                                            {`${company.address.state} ${company.address.pin}, ${company.address.country}`}
                                        </p>
                                    </Td> */}
                                    <Td>{project.totalHours}</Td>
                                    <Td>{project.conversionRate}</Td>
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
  )
}

export default ViewProjDetails;