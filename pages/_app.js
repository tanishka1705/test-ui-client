import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster />
    </ChakraProvider>
  )

}

export default MyApp
