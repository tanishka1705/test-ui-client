
import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Stack,
  Flex,
  Heading,
  Select,
} from '@chakra-ui/react';
import client from '../../api/axiosInstance';

export default function ProjectDetails() {
  const initialFormData = {
    projectName: '',
    companyName: '',
    rate: '',
    hours: '',
    inrRate: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({
    projectName: '',
    companyName: '',
    rate: '',
    hours: '',
    inrRate: '',
  });

  const [companyData, setCompanyData] = useState([]);

  useEffect(()=>{
    getCompanies()
  },[])

  async function getCompanies(){
    const response = await client.get('/companies')
    const fetchCompanyData = response.data.allListedCompanies;
    const companyData = fetchCompanyData.map((company)=>({
      id : company._id,
      name : company.name,
    })
    )
    setCompanyData(companyData);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    
    const newErrors = {};companyData
    if (!formData.projectName.trim()) {
      newErrors.projectName = 'Project Name is required';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company Name is required';
    }
    if (!formData.rate.trim()) {
      newErrors.rate = 'Rate is required';
    }
    if (!formData.hours.trim()) {
      newErrors.hours = 'Total working hours are required';
    }
    if (!formData.inrRate.trim()) {
      newErrors.inrRate = 'INR Rate is required';
    }

    setErrors(newErrors);

   
    if (Object.keys(newErrors).length === 0) {
      
      console.log('Form submitted:', formData);
      // setFormData(initialFormData);
      postReqProject();
    }

  };

  async function postReqProject() {
    try {
      const postProjectData = {
        description: formData.projectName,
        rate: formData.rate,
        totalHours : formData.hours,
        conversionRate : formData.inrRate,
        companyId : formData.companyName,
        }
      

      const response = await client.post('/projects', postProjectData, {
        headers: {
          "Content-Type": 'application/json'
        }
      });

      if(response.status === 201){
        console.log('Data saved:', response.data);
        setFormData(initialFormData);
      }
      else{
        console.error('Failed to save data:', response.status);
      }
    }catch(error){
      console.error('An error occurred while saving data:', error);
    }

  }

  return (
    <Flex alignItems='center' justifyContent='center' p='4' position='absolute' left='25em'>
      <form>
        <Stack spacing={4} mt='3em' bg='#B9D9EB' p={10} borderRadius={5} w='40em'>
          <Heading textAlign='center' size='lg'>
            Add Project Details
          </Heading>

          <FormControl isRequired isInvalid={!!errors.projectName}>
            <FormLabel>Project Name</FormLabel>
            <Input
              type='text'
              name='projectName'
              value={formData.projectName}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.projectName}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Company Name</FormLabel>
            <Select
              name='companyName'
              value={formData.companyName}
              onChange={handleChange}
              placeholder='Select a company'
            >
              {companyData.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.rate}>
            <FormLabel>Rate (per hour)</FormLabel>
            <Input
              type='number'
              name='rate'
              value={formData.rate}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.rate}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.hours}>
            <FormLabel>Total Working Hours</FormLabel>
            <Input
              type='time'
              name='hours'
              value={formData.hours}
              onChange={handleChange}
              placeholder='HH:MM'
            />
            <FormErrorMessage>{errors.hours}</FormErrorMessage>
          </FormControl>

          <HStack>
            

            <FormControl>
              <FormLabel>$ (USD) Rate</FormLabel>
              <Input
                type='number'
                name='usdRate'
                value='1'
                isDisabled
              />
            </FormControl>

            <FormControl isRequired isInvalid={!!errors.inrRate}>
              <FormLabel>Conversion Rate</FormLabel>
              <Input
                type='number'
                name='inrRate'
                value={formData.inrRate}
                onChange={handleChange}
                placeholder='INR Rate'
              />
              <FormErrorMessage>{errors.inrRate}</FormErrorMessage>
            </FormControl>
          </HStack>

          <Button
            colorScheme='blue'
            w='10em'
            position='relative'
            top='1em'
            left='13em'
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Flex>
  );
}