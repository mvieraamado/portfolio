import { Box, Heading, Flex, Text, Spinner  } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { techList } from "../data/data";


const Skills = () => {
  const [ tech, setTech ] = useState([])

  useEffect (()=>{
    const technologyList = techList();

    technologyList.then(list=> {
      setTech (list);
    })
  },[])

  tech.length === 0 && <Spinner />

  return (
    <Box py={5} m={'auto'} w={'90%'} maxW={'1200px'} borderTop={'1px'} borderTopColor={'gray.300'}> 
      <Heading as={'h4'} id={'technologies'} py={2} fontSize={'1.3rem'} fontWeight={'semibold'}>Technologies</Heading>

      <Flex direction={'column'} justifyContent={'center'} py={2} borderRadius={'10px'}>
        {tech.map(e =>( 
          <Text key={e} as={'p'} fontSize={'1.2rem'} my={2}>{e}</Text>
        ))}
      </Flex>
    </Box>
  )
}

export default Skills;