import { Stack, Box, Heading, Text, Image } from '@chakra-ui/react';
import profile from '../images/mar2.png';
import CustomLink from './CustomLink';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import CustomButton from './CustomButton';

export default function MainSection() {
  return (
    <Stack
      width={'90%'}
      maxWidth={'1200px'}
      margin={'auto'}
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 10, md: 28 }}
      direction={{ base: 'column', md: 'row' }}>

      <Box height={'250px'} width={'250px'}>
        <Image
          alt={'profile'}
          fit={'cover'}
          align={'center'}
          rounded={'full'}
          w={'100%'}
          h={'100%'}
          src={profile}
        />
      </Box>
      <Stack flex={2} spacing={{ base: 5, md: 15 }} alignItems='center'>
        <Heading 
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
          <Text as='span'>
            Mariam Viera Amado
          </Text>
          <br />
          <Text as='span' color='gray.500' fontSize={{base: '20px', sm: '1xl', lg: '2xl' }}>
            React Frontend Developer
          </Text>
        </Heading>
        <Text color='gray.500'>
          Welcome to my website!
          I am currently a frontend developer, I consider myself a person with a lot of discipline, I apply my knowledge and skills to achieve each proposed goal. 
        </Text>
        <Text color='gray.500'>
          I am looking for my personal and professional development, contact me!
        </Text>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: 'row' }}>
          <CustomLink url='https://www.linkedin.com/in/mariam-viera-amado'>
            <BsLinkedin size={'35px'}/>
          </CustomLink>
          <CustomLink url='https://github.com/mvieraamado'>
            <BsGithub size={'35px'}/>
          </CustomLink>
        </Stack>
        <CustomButton text='Download CV' font={'lg'} url={'https://drive.google.com/file/d/1A6LC9S-Hzv3S4qEedEH2DXRCw3wAff3A/view?usp=sharing'}/>
      </Stack>
    </Stack>
  );
}
