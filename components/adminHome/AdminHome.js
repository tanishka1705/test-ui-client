import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react';
const AdminHome = ({ allListedCompanies }) => {
    return (
        <>
            <TableContainer sx={{ background: '#fff' }} w='50em' position='relative' left='30em'>
                <Table variant='striped' colorScheme='gray'>
                    <Thead>
                        <Tr>
                            <Th sx={{fontSize: '1rem', color: '#0b0e37db'}}>SNO</Th>
                            <Th sx={{fontSize: '1rem', color: '#0b0e37db'}}>Company Name</Th>
                            <Th sx={{fontSize: '1rem', color: '#0b0e37db'}}>GSTIN No</Th>
                            <Th sx={{fontSize: '1rem', color: '#0b0e37db'}}>Address</Th>
                            <Th sx={{fontSize: '1rem', color: '#0b0e37db'}} colSpan={2}>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            allListedCompanies.map((company, indx) => (
                                <Tr className='border-2 border-zinc-300'>
                                    <Td>{indx + 1}</Td>
                                    <Td>{company.name}</Td>
                                    <Td>{company.gstin}</Td>
                                    <Td>
                                        {`${company.address.street}, ${company.address.city},
                                ${company.address.state} ${company.address.pin}, ${company.address.country}`}
                                    </Td>
                                    <Td>
                                        <img src="/image/edit.svg" alt="" style={{ width: '100%' }} />
                                    </Td>
                                    <Td>
                                        <img src="/image/delete.svg" alt="" style={{ width: '100%' }} />
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </>    )
}

export default AdminHome