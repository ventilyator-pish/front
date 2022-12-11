import { StudentCard } from '@components/cards/studentCard/StudentCard';
import { ProjectRequest } from '@src/utils/api/types/main';
import { getProjectResponses } from '@store/projecRequests/projectRequests';
import { FC, useEffect, useState } from 'react';
import styles from '@components/profile/profileProjects/ProfileProjects.module.scss';
import { Button } from 'react-bootstrap';
import cn from 'classnames';

interface ProjectResponsesProps {
  project_id: string;
}

const ProjectResponses: FC<ProjectResponsesProps> = ({ project_id }) => {
  const [responses, setResponses] = useState<ProjectRequest[]>([]);

  useEffect(() => {
    getProjectResponses(project_id).then((result) => {
      setResponses(result);
    });
  }, []);

  if (!responses) {
    return <div></div>;
  }

  return (
    <div>
      <h3 className={styles.subtitle}>Отклики</h3>
      <div className={styles.responses}>
        {responses.map((response) => (
          <div key={response.id}>
            <StudentCard student={response.student} role="viewer" />
            <Button className={cn(styles.btn, styles.btnAccept)}>Принять приглашение</Button>
            <Button className={cn(styles.btn, styles.btnCancel)}>Отклонить приглашение</Button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProjectResponses;
