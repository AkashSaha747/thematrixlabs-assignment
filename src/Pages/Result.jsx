import { Box, Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import BasicInfo from '../Components/BasicInfo'
import BaseToken from '../Components/BaseToken'
import QuoteToken from '../Components/QuoteToken'
import Price from '../Components/Price'
import Leftsidebar from '../Components/Leftsidebar'
import Navbar from '../Components/Navbar.jsx'


const Result = () => {
  return (
    <Flex justifyContent={'space-around'} style={{flex:5}}>
<Box width={'250px'}  >
   <Leftsidebar />
</Box>

<Box height={'100vh'}>
  <Navbar />
<SimpleGrid columns={[1,2,4]} gap={'10px'} >
        <BasicInfo/>
        <BaseToken/>
        <QuoteToken/>
        <Price/>
        <BasicInfo/>
        <BaseToken/>
        <QuoteToken/>
        <Price/>
        <BasicInfo/>
        <BaseToken/>
        <QuoteToken/>
        <Price/>
        <BasicInfo/>
        <BaseToken/>
        <QuoteToken/>
        <Price/>
    </SimpleGrid>
    </Box>
    </Flex>
  )
}

export default Result