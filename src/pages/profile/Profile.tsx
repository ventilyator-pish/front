import React, { useEffect } from 'react';
import styles from './Profile.module.scss';
import { StudentCard } from '@components/cards/studentCard/StudentCard';
import { students } from '@components/cards/studentCard/Students.mock';
import ProfileInfo from '@components/profile/profileInfo/ProfileInfo';
import ProfileSkills from '@components/profile/profileSkills/ProfileSkills';
import ProfileInterests from '@components/profile/profileInterests/ProfileInterests';
import { useParams } from 'react-router-dom';
import {$studentById, getStudentByIdFx} from '@store/student/studentStore';
import {useStore} from "effector-react";

const Profile = () => {
  const { id } = useParams();
  const student = useStore($studentById)
  useEffect(() => {
    if (id) {
      getStudentByIdFx(id);
    }
  }, [id]);
  return (
    <div className={styles.wrapper}>
        {
            student && <StudentCard role={'redactor'} student={student}/>
        }
      <div className={styles.about}>
        <ProfileInfo />
        <ProfileSkills />
        <ProfileInterests />
      </div>
    </div>
  );
};

export default Profile;
