import AdminHome from '../components/adminHome/AdminHome'
import client from '../api/axiosInstance'
import Cards from '../components/cards/Card'
import { Heading } from '@chakra-ui/react'

export default function Home({ allListedCompanies, message }) {

  return (
    <>
      <Cards />
      {
        allListedCompanies === undefined ?
          <Heading fontSize={'lg'} my='16' textAlign='center'>{message}</Heading>
          : (
            <AdminHome allListedCompanies={allListedCompanies} />
          )
      }
    </>
  )
}

export async function getServerSideProps() {
  try {
    const { data } = await client('/companies')
    if (data.status === 'true') {
      return {
        props: { allListedCompanies: data.allListedCompanies }
      }
    }
    else throw new Error(data.message)
  } catch (error) {
    return {
      props: { message: error.response.data.message }
    }
  }
}
