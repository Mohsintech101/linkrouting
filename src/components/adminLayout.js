import React from 'react'
import { Box } from '@chakra-ui/react';
import Header from './header';
import Sidebar from './sidebar';

const AdminLayout = ({children}) => {
  return (
    <Box
        width={"100%"}
        height={"100vh"}
    >
        <Box
            height={"80px"}
            width={"100%"}
            pl={"150px"}
            position={"fixed"}
        >
            <Header />
        </Box>
        <Box
            width={"150px"}
            height={"100%"}
            position={"fixed"}
        >
            <Sidebar />
        </Box>
        <Box
            pl={"150px"}
            pt={"80px"}
        >{children}</Box>
    </Box>
  )
}

export default AdminLayout
