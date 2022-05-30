import { Box, Image, useColorModeValue, Stack, Heading, Text } from '@chakra-ui/react';
import CustomButton from './CustomButton';
import CustomLink from './CustomLink';
import { BsGithub } from 'react-icons/bs';

const CardProject= ({project})=> {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      borderWidth="1px"
      rounded="lg"
    >
      <Image 
        src={project.image} 
        alt={`Picture of ${project.name}`}
        roundedTop="lg"
      />
      <Box p="5">
        <Stack my={3}>
          <Heading
            as={'h5'}
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'1xl'}
            fontWeight={'semibold'}
          >
            {project.name}
          </Heading>
          <Text color={'gray.500'}>
            {project.description}
          </Text>
        </Stack>
        <Stack direction={'row'} justifyContent={'space-around'} alignItems={'center'} py={2}>
          <CustomButton text='Go to website' font={'sm'} url={project.url}/>
          <CustomLink url={project.gitHub}>
          <BsGithub size={'28px'}/>
          </CustomLink>
        </Stack>
      </Box>
    </Box>
  );
}
  
export default CardProject;