import React from 'react';
import {
  ChakraProvider,
  Text,
  Stack,
  Flex,
  Button,
  Box,
  Image,
  Link,
  Heading,
  theme,
} from '@chakra-ui/react';
import Contact from './Contact';
import Projects from './Projects';
import Testimonials from './Testimonials';

import Myimage from './img1.jpg'; // to be decided
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text color={'blue.400'} as={'span'}>
                Hey there !
              </Text>
              <br />{' '}
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  // height: useBreakpointValue({ base: '20%', md: '30%' }),
                  // height : {variant},
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}
              >
                I'm Tanay Srivastava
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              <code>
                I solve problems in creative ways. At Manipal University Jaipur,
                where I am completing my III year, I have learned the importance
                of applying classical strategies to modern-day projects.
              </code>
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Link href="https://drive.google.com/file/d/1uOUWzWM7OCpQEOs8zEDYPdGcly7aS0qb/view?usp=share_link">
                  
                <Button
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  View CV
                </Button>
              </Link>
              {/* <Link href="/contact"> */}
              <Link href="mailto:srv.tanay@gmail.com?subject=Let us Connect">
                <Button rounded={'full'}>Contact</Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'IOW-IMAGE'}
            objectFit={'cover'}
            h={['50vh', '65vh', '100vh', '100vh']}
            width={[
              '100vw', // 0-30em
              '100vw', // 30em-48em
              '50vw', // 48em-62em
              '50vw', // 62em+
            ]}
            src={Myimage}
          />
        </Flex>
      </Stack>
      <Box px={"5rem"}>
      <Projects />
      </Box>
      <Testimonials />
      <Contact />
    </ChakraProvider>
  );
}

export default App;
