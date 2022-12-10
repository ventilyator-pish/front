import React from 'react';
import Recommendations from '@components/recommendations/Recommendations';
import { ProjectCards } from '@components/cards/projectCard/ProjectCard';

const Projects = () => {
  return (
    <>
      <Recommendations />
      <ProjectCards />
    </>
  );
};

export default Projects;
