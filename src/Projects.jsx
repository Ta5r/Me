import React from 'react'
import {
    Box,
    Center,
    ChakraProvider,
    theme,
    Text,
    Button,
    Stack,
    Heading,
    // Avatar,
    // useColorModeValue,
    // Image,
    Flex,
    Grid,
    SimpleGrid,
    GridItem,
  } from '@chakra-ui/react';
import Card from './Card';
import { FaGithub } from 'react-icons/fa';
import works from './works.js';

  
const Projects = () => {
  return (
    <ChakraProvider theme={theme} >
    <hr/>
    <Box p={"5rem"}>

    <Stack direction={{ base: 'column', md: 'row' }} pb={"5rem"} w={"full"}>
    <Flex p={3} flex={1} align={'center'} justify={'center'}>

    <Heading fontWeight={"bold"} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
        My Recent works
    </Heading>
    </Flex>
    </Stack>
    <SimpleGrid columns={[1,1,2,3]} spacingY="4rem" spacingX={"2rem"}>
    {
        works.map((res)=>(
            <Card 
            image={res["image"]}
             type={res["type"]}
              title={res["title"]}
               desc={res["desc"]}
                auth_name={res["auth_name"]}
                 auth_img={res["auth_img"]}
                  link={res["link"]}
                   linkGH={res["linkGH"]} />
        ))
    }
    </SimpleGrid>
    <Center pt={"4rem"}>

        <Button display={"flex"} flexDirection={"row"}>
            Know more on my GitHub 
            <Box pl={"0.75rem"} fontSize={"xl"}>
            <FaGithub/>
            </Box>
                
        </Button>
    </Center>
    </Box>
    </ChakraProvider>
  )
}

export default Projects;