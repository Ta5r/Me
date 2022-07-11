import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Button,
  Badge,
  Grid,
  GridItem,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Card(props) {
    const title = props.title;
    const image=props.image;
    const type=props.type;
    const desc=props.desc;
    const auth_name=props.auth_name;
    const auth_img=props.auth_img;
    const link=props.link;
    const linkGH=props.linkGH;
    var tags=props.tags;
    var tag=tags.split(",");
    const bgcol = useColorModeValue('gray.50', 'gray.800');
  return (
    
    <Center py={6}>
      <Box
        maxW={'375px'}
        minW={'300px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.800'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
          bgImage={image}
          bgSize={"contain"}
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
          />
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {type}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {title}
          </Heading>
          <Text color={'gray.500'} pt={"1rem"}>
            {desc}
          </Text>
        </Stack>
           <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
           <SimpleGrid columns={[2,2, 2, 3]} spacing={"1rem"}>

          {
            tag.map((res)=>(
              (res==="")?null:
                  <Badge
                    px={2}
                    py={1}
                    bg={bgcol}
                    fontWeight={'400'}>
                    #{res}
                  </Badge>
            ))
          }
          </SimpleGrid>
          </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={auth_img}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{auth_name}</Text>
            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack>
        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Open in GitHub
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Visit
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}