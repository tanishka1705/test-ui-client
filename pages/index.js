
import React, { useEffect } from 'react'
import AdminHome from '../components/adminHome/AdminHome'
import client from '../api/axiosInstance'

export default function Home({ allListedCompanies, message }) {
  if (message) return toast.error(message)

  return (
    <AdminHome allListedCompanies={allListedCompanies} />
    
  )
}

export async function getServerSideProps() {
  const { data } = await client('/companies')

  if (data.status === 'true') {
    return {
      props: { allListedCompanies: data.allListedCompanies }
    }
  }
  return {
    props: { message: data.message }
  }
}
