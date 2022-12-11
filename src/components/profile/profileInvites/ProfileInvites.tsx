import { ProjectCard } from '@components/cards/projectCard/ProjectCard';
import { ProjectRequest } from '@src/utils/api/types/main';
import { getStudentProjectRequests } from '@store/projecRequests/projectRequests';
import { FC, useEffect, useState } from 'react';
import styles from './ProfileInvites.module.css'
import {Button} from "react-bootstrap";
import cn from "classnames";

interface ProfileInvitesProps {
  student_id: string | undefined;
}

const ProfileInvites: FC<ProfileInvitesProps> = ({ student_id }) => {
  const [invites, setInvites] = useState<ProjectRequest[]>();

  useEffect(() => {
    if (!student_id) return;
    getStudentProjectRequests(student_id).then((result) => {
      setInvites(result);
    });
  }, [student_id]);

  if (!invites) {
    return <div></div>;
  }

  return (
    <div className={styles.invitesWrapper}>
      <h3 className={styles.subtitle}>Приглашения</h3>
      <div className={styles.invites}>
          {invites.map((invite) => (
            <div key={invite.id}>
                <ProjectCard role="viewer" project={invite.project} />
                <Button className={cn(styles.btn, styles.btnAccept)}>Принять приглашение</Button>
                <Button className={cn(styles.btn, styles.btnCancel)}>Отклонить приглашение</Button>
            </div>
          ))}
      </div>
    </div>
  );
};


export default ProfileInvites;
