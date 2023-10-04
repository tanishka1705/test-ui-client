
import React, { useState, useEffect } from 'react'
import { Box, Heading, Flex, Divider, Stack, FormControl, FormLabel, Input, HStack, Text, Link, Select } from '@chakra-ui/react'
import client from '../../api/axiosInstance';

export default function GenerateInvoice() {

  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    selectCompany();
  }, []);

  async function selectCompany(){
    const response = await client.get('/companies')
    const fetchCompanyData = response.data.allListedCompanies;
    const companyData = fetchCompanyData.map((company)=>({
      id : company._id,
      name : company.name,
    })
    )
    setCompanyData(companyData);
  }

  return (
    <Flex flexDirection="column">
      <Flex alignItems='center' justifyContent='flex-start' mt='4em'>
        <Box position='relative' left='20em'>
          <Heading size='md' color='#34495E'>Generate Invoice</Heading>
        </Box>
      </Flex>

      <Divider mt="1em" borderColor="blue.500" borderWidth="0.1em" width="55em" position='relative' left='20em' />

      <Box mt="2em" mx="auto" position='relative' >
        <HStack spacing={5}>
          <form>
            <Stack spacing={4}>
              <FormControl id="invoiceNumber">
                <FormLabel fontWeight='bold'>Invoice Number</FormLabel>
                <Input type="number" />
              </FormControl>
              <FormControl id="invoiceDate">
                <FormLabel fontWeight='bold'>Invoice Date</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl id="dueDate">
                <FormLabel fontWeight='bold'>Due Date</FormLabel>
                <Input type="date" />
              </FormControl>
            </Stack>
          </form>
          <Box position='relative' left='15em' mt='1.5em'>
            <Heading size='sm'>GAMMAEDGE TECHNOLOGIES PRIVATE LIMITED</Heading>
            <Text fontSize='sm'>GSTIN: 23AAJCG9212C1ZZ</Text>
            <Text fontSize='sm'>PAN : AAJCG9212C</Text>
            <address>
              <Text fontSize='sm'>404, N1 Sky Star, New Ranibagh,<br />Indore, Madhya Pradesh 452001</Text>
              <HStack>
                <Link color={'blue'} href='mailto:accounts@gammaedge.io' fontSize='sm'>accounts@gammaedge.io</Link>
                <Box w="1px" h="1em" bg="gray.400" ></Box>
                <Text fontSize='sm'>+91-8878811955</Text>
              </HStack>
            </address>
            <FormControl id="dropdown" mt="1.5em">
              <FormLabel><Heading size='xs'>Bill To:</Heading></FormLabel>
              <Select placeholder="Select an option" mt='1em'>           
                {companyData.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
              </Select>
            </FormControl>
          </Box>

        </HStack>
      </Box>
    </Flex>
  )
}
