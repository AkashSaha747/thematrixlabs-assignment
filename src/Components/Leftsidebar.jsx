import React from 'react'
import "./Leftsidebar.css"
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import vector from "../Media/vector.png"
import nef from "../Media/nef.png"
import socials from "../Media/socials.png"
import chrome from "../Media/chrome.png"
import link from "../Media/link.png"
const Leftsidebar = () => {


  
  return (
    <Box color={"white"}  ml={'-10px'}> 
    <Flex direction={'column'} className="main-left"  width={'100%'}>
    <Flex justifyContent={"space-around"} alignItems={"center"} flex={1} >
        <Image src={vector} p={"20px 5px 20px 5px"}  width={"15%"}></Image>
        <Image width={"100px"} ml={["-20px","-50","-70px"]} height={"40px"} pl={"20px"} src={nef} ></Image>

    </Flex>


    <Flex justifyContent={"space-around"} alignItems={"center"}
     flex={1} ml={"-20px"}>
    <Image   src={chrome} p={"20px 5px"}></Image>
    <Text>Token Address</Text>
    </Flex>

    <Flex justifyContent={"space-around"} alignItems={"center"} flex={1} ml={"-20px"}>
    <Image src={link} ml={"-5px"} p={"20px 5px"}></Image>
    <Text pl={"-15px"}>Pair Address</Text>
    </Flex>
    <Flex flex={4}> 
        {/* empty flex */}
    </Flex>
    <Flex flex={1}>
        {/* fb logo yt logo etc */}
        <Image height={"30px"} width={"140px"} ml={"40px"} src={socials}></Image>
    </Flex>
    <Flex flex={1} bg={"#F30050"}>
        {/* bottom color */}
    </Flex>
    </Flex>
      
    </Box>
  )
}

export default Leftsidebar
