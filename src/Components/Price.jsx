import React from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import dollar from '../Media/dollar.png';

const Price = () => {
  return (
    <Box style={{position:'relative'}} bg={'#390554'} color={'white'} width={'260px'} p={'10px'} borderRadius={'10px'}>
    <Heading size={'md'} mb={'5px'}>Price</Heading>
    <Flex justifyContent={'space-between'} mb={'5px'} pr={'40px'}>
       <Text>Price Native</Text>
       <Text>ETH 7.00</Text>
    </Flex>
    <Flex justifyContent={'space-between'} mb={'5px'} pr={'40px'}>
       <Text>Price USD</Text>
       <Text>1.8m</Text>
    </Flex>

    <Flex justifyContent={'flex-end'} mt={'-10px'} mr={'-5px'}>
    <Box className='circle' borderRadius={'50%'} bg={'#960252'} width={'40px'} height={'40px'} p={'8px'}>
             <Image src={dollar}  />
        </Box>
    </Flex>
 </Box>
  )
}

export default Price