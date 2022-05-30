import { useEffect, useState } from 'react';
import CardProject from './CardProject';
import { Box, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { list } from '../data/data';

const ProjectsContainer = ()=> {
  const [ projects, setProjects ] = useState([]);
  
  useEffect (()=>{
    const projectsList = list();

    projectsList.then(list=> {
      setProjects (list);
    })
  },[])

  projects.length === 0 && <Spinner />

  return (
    <Box py={5} w={'90%'} maxW={'1200px'} flexDirection={'column'} m={'auto'}
      borderTop={'1px'} borderTopColor={'gray.300'}>
      <Heading as={'h4'} id={'projects'} py={5} fontSize={'1.6rem'} textAlign={'center'}
        textTransform={'capitalize'} fontWeight={'semibold'}>
        Projects
      </Heading>
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3}} spacing={4}>
        {projects.map( project => (
          <CardProject key={project.id} project={project}/>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default ProjectsContainer;