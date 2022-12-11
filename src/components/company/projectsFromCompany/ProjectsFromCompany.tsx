import React, { useEffect } from 'react';
import styles from './ProjectsFromCompany.module.scss';
import { Button } from 'react-bootstrap';
import { useStore } from 'effector-react';
import { $projects, getProjects } from '@store/projects/projectsStore';
import { ProjectCards } from '@components/cards/projectCard/ProjectCard';
import {$modals, handleIsShowCreatingProjectModal} from "@store/modal/modalStore";

const ProjectsFromCompany = () => {

  return (
    <div>
      <div className={styles.projectsHeader}>
        <div className={styles.headerProjects}></div>
        <h4 className={styles.projectsTitle}>Проекты</h4>
        <Button className={styles.createProject} onClick={() => handleIsShowCreatingProjectModal(true)}>Создать проект</Button>
      </div>
      <ProjectCards />
    </div>
  );
};

export default ProjectsFromCompany;
