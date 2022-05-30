import { Link } from '@chakra-ui/react'

const CustomLink = ({children,url})=> {
  return (
    <Link
      as='a'
      href={url}
      target='_blank'
      size='sm'
      px={2}
      _hover={{ opacity: '0.8'}}
    >
      {children}
    </Link>
  )
}

export default CustomLink;