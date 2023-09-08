import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} my={'10px'} mx={'10px'}>
       <Input placeholder='Search' width={'600px'}></Input>
       <Box  ><Button bgGradient='linear(to-l, #7928CA, #FF0080)'>Connect</Button></Box>
       
    </Box>
  )
}

export default Navbar