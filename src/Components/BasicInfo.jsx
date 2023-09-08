import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import info from '../Media/info.png'
import '../Style/Logos.css';

const BasicInfo = () => {
  return (
     <Box style={{position:'relative'}} bg={'#390554'} color={'white'} width={'260px'} p={'10px'} 
     borderRadius={'10px'}>
       
        <Heading size={'md'} mb={'5px'}>Basic Info</Heading>

        <Flex justifyContent={'space-between'} mb={'5px'} pr={'40px'}>
           <Text>Pair created at</Text>
           <Text>Etherium</Text>
        </Flex>

        <Flex justifyContent={'space-between'} mb={'5px'} pr={'40px'}>
           <Text>Symbol</Text>
           <Text>ETH</Text>
        </Flex>

        <Flex justifyContent={'space-between'} mb={'5px'} pr={'40px'}>
           <Text>Dex ID</Text>
           <Text>#7890</Text>
        </Flex>

        <Flex justifyContent={'space-between'} mb={'5px'} pr={'40px'}>
           <Text>Pair Address</Text>
           <Text>#6754</Text>
        </Flex>

        <Flex justifyContent={'flex-end'} mt={'-20px'}  mr={'-5px'}>
        <Flex className='circle' borderRadius={'50%'} bg={'#960252'} width={'40px'} height={'40px'} p={'8px'} >
             <Image src={info}   />
        </Flex>
        </Flex>
     </Box>
  )
}

export default BasicInfo



