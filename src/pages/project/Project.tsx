import React, { useEffect } from 'react';
import styles from '@pages/profile/Profile.module.scss';
import { projects } from '@components/cards/projectCard/Projects.mock';
import ProjectAbout from '@components/project/projectAbout/ProjectAbout';
import ProjectActivity from '@components/project/projectActivity/ProjectActivity';
import ProjectWhoNeed from '@components/project/projectWhoNeed/ProjectWhoNeed';
import { ProjectCard } from '@components/cards/projectCard/ProjectCard';
import { $project, getProjectFx } from '@store/project/projectStore';
import { useParams } from 'react-router-dom';
import { useStore } from 'effector-react';

const Project = () => {
  const { id } = useParams();
  const project = useStore($project);
  useEffect(() => {
    if (id) {
      getProjectFx(id);
    }
  }, []);
  return (
    <div className={styles.wrapper}>
      {project && (
        <>
          <ProjectCard role={'redactor'} project={project} />
          <div className={styles.about}>
            <ProjectAbout />
            <ProjectActivity />
            <ProjectWhoNeed />
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
