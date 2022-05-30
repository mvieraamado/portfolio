import { Button } from '@chakra-ui/react';

const CustomButton = ({text, font, url})=> {
  return (
    <Button
      href={url}
      target='_blank'
      as='a'
      fontSize={font}
      rounded={'full'}
      bg={'gray.400'}
      color={'gray.800'}
      _hover={{
      bg: 'gray.300',
      textDecoration: 'none'
      }}
      _focus={{
      bg: 'gray.500',
      }}
    >
      {text}
    </Button> 
  )
}

export default CustomButton;