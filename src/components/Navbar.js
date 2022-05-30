import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Button,
  useColorMode,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import logo from '../images/logo.png';

const links = ['projects', 'technologies'];

const NavLink = ({ hrefProject, children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    textTransform={'capitalize'}
    color={'black'}
    _hover={{
    textDecoration: 'none',
    bg: useColorModeValue('gray.300', 'gray.200'),
    }}
    href={hrefProject}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box px={4} bg={useColorModeValue('gray.50', 'gray.300')}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Image src={logo} alt='logo' height={'50px'} />
        <Stack direction={'row'} justifyContent={'space-around'}>
          <Button rounded={'full'} onClick={toggleColorMode} bg={'gray.100'}
            color={'black'} _hover={{bg: 'gray.300'}}
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            
            {links.map((link) => (
              <NavLink key={link} hrefProject={`#${link}`}>{link}</NavLink>
            ))}
          </HStack>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          /> 
        </Stack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {links.map((link) => (
              <NavLink key={link} hrefProject={`#${link}`}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}