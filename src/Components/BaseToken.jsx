import React from 'react'
import token from '../Media/token.png';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

const BaseToken = () => {
  return (
    <Box style={{position:'relative'}} bg={'#390554'} color={'white'} width={'260px'} p={'10px'} borderRadius={'10px'}>
    <Heading size={'md'} mb={'5px'}>Base Token</Heading>
    <Flex justifyContent={'space-between'} mb={'5px'} pr={'40px'}>
       <Text>Name</Text>
       <Text>Etherium</Text>
    </Flex>
    <Flex justifyContent={'space-between'} mb={'5px'} pr={'40px'}>
       <Text>Symbol</Text>
       <Text>ETH</Text>
    </Flex>
    <Flex justifyContent={'space-between'} mb={'5px'} pr={'40px'}>
       <Text>Address</Text>
       <Text>#7890</Text>
    </Flex>

    <Flex justifyContent={'flex-end'} mt={'-10px'} mr={'-5px'}>
    <Flex className='circle' borderRadius={'50%'} bg={'#960252'} width={'40px'} height={'40px'} p={'8px'}>
             <Image src={token} />
        </Flex>
    </Flex>
    
 </Box>
  )
}

export default BaseToken