import React, { useEffect } from 'react';
import styles from './ProjectsFromCompany.module.scss';
import { Button } from 'react-bootstrap';
import { useStore } from 'effector-react';
import { $projects, getProjects } from '@store/projects/projectsStore';
import { ProjectCards } from '@components/cards/projectCard/ProjectCard';

const ProjectsFromCompany = () => {
  const projects = useStore($projects);
  console.log(projects);
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <div>
      <div className={styles.projectsHeader}>
        <h4 className={styles.projectsTitle}>Проекты</h4>
        <Button className={styles.createProject}>Создать проект</Button>
      </div>
      <ProjectCards />
    </div>
  );
};

export default ProjectsFromCompany;
