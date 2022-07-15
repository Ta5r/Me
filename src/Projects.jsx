import React from 'react';
import {
  Box,
  Center,
  ChakraProvider,
  theme,
  Button,
  Stack,
  Heading,
  Link,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import Card from './Card';
import { FaGithub } from 'react-icons/fa';
import works from './works.js';

const Projects = () => {
  return (
    <ChakraProvider theme={theme}>
      <hr />
      <Box p={'2rem'}>
        <Stack direction={{ base: 'column', md: 'row' }} w={'full'}>
          <Flex p={3} flex={1} align={'center'} justify={'center'}>
            <Heading
              fontSize={{
                base: '3xl',
                md: '4xl',
              }}
            >
              <code>&lt;My Recent works/&gt;</code>
              <br />
              <br />
            </Heading>
          </Flex>
        </Stack>
        <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={'1rem'}>
          {works.map(res => (
            <Card
              image={res['image']}
              type={res['type']}
              title={res['title']}
              desc={res['desc']}
              auth_name={res['auth_name']}
              auth_img={res['auth_img']}
              link={res['link']}
              tags={res['tags']}
              linkGH={res['linkGH']}
              status={res['status']}
              date={res['date']}
            />
          ))}
        </SimpleGrid>
        <Center pt={'2rem'}>
          <Link href="https://www.github.com/Ta5r">
            <Button display={'flex'} flexDirection={'row'}>
              &lt;Know more on my GitHub /&gt;
              <Box pl={'0.75rem'} fontSize={'xl'}>
                <FaGithub />
              </Box>
            </Button>
          </Link>
        </Center>
      </Box>
    </ChakraProvider>
  );
};

export default Projects;
