import { StudentCard } from '@components/cards/studentCard/StudentCard';
import { Project } from '@src/utils/api/types/main';
import { FC } from 'react';
import styles from '@components/profile/profileProjects/ProfileProjects.module.scss';

interface ProjectTeamProps {
  project: Project;
}

const ProjectTeam: FC<ProjectTeamProps> = ({ project }) => {
  return (
    <div>
      <h3 className={styles.subtitle}>Команда проекта</h3>
      <div className={styles.projects}>
        {project?.team?.map((student) => (
          <StudentCard key={student.id} role="viewer" student={student} />
        ))}
      </div>
    </div>
  );
};

export default ProjectTeam;
