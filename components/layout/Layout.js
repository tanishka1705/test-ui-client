import React, { Fragment } from 'react'
import Sidebar from './Sidebar'
import { Box } from '@chakra-ui/react'

export default function Layout(props) {
  return (
    <Fragment>
        <Sidebar />
        <Box>
            {props.children}
        </Box>
    </Fragment>
  )
}
