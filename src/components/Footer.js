import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import CustomLink from './CustomLink';

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.300')}
      color={useColorModeValue('gray.700', 'gray.900')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>

        <Text>2022 - Made by Mariam Viera Amado</Text>

        <Stack direction={'row'} spacing={6}>
          <CustomLink url={'https://www.linkedin.com/in/mariam-viera-amado'}>
            <BsLinkedin size={'28px'}/>
          </CustomLink>
          <CustomLink>
            <BsGithub size={'28px'}/>
          </CustomLink>
        </Stack>
      </Container>
    </Box>
  );
}