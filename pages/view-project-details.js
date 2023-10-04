import React from 'react'
import ViewProjDetails from '../components/projectDetails/ViewProjDetails'
import client from '../api/axiosInstance'

export default function ViewProjectDeatilsHome({ allListedProjects, message }) {
  if (message) return toast.error(message)

  return (
   <ViewProjDetails allListedProjects={allListedProjects}/>
  )
}

export async function getServerSideProps() {
  const { data } = await client('/projects')
  // console.log(data);
  if (data.success === 'true') {
    return {
      props: { allListedProjects: data.allListedProjects}
    }
  }
  return {
    props: { message: data.message }
  }
}