import React, { useEffect, useState } from 'react';
import styles from './Profile.module.scss';
import { StudentCard } from '@components/cards/studentCard/StudentCard';
import { students } from '@components/cards/studentCard/Students.mock';
import ProfileInfo from '@components/profile/profileInfo/ProfileInfo';
import ProfileSkills from '@components/profile/profileSkills/ProfileSkills';
import ProfileInterests from '@components/profile/profileInterests/ProfileInterests';
import ProfileProjects from '@components/profile/profileProjects/ProfileProjects';

import { useParams } from 'react-router-dom';
import { $studentById, getStudentByIdFx } from '@store/student/studentStore';
import { useStore } from 'effector-react';
import {$profile, resetShowFeedBack} from "@store/profile/profile";
import FeedBack from "@components/feedBack/FeedBack";
import ProfileInvites from '@components/profile/profileInvites/ProfileInvites';
import { $me } from '@store/me/meStore';

const Profile = () => {
  const me = useStore($me)
  const { id } = useParams();
  const student = useStore($studentById);

  const [isShowProfile, setIsShowProfile] = useState(true);
  const profile = useStore($profile)
  const handleIsShowProfile = () => {
    setIsShowProfile((prev) => !prev)
  }
  useEffect(() => {
    if (id) {
      getStudentByIdFx(id);
    }
    return resetShowFeedBack()
  }, [id]);
  return (
    <div className={styles.wrapper}>
      {student ? <StudentCard role={'viewer'} student={student} isProfile={true} onChangeView={handleIsShowProfile}/> : <div></div>}
      <div className={styles.about}>
        {profile.shouldShowFeedback ? (
            <FeedBack studentId={id}/>
        ) : (
          <>
            <ProfileInfo />
            <ProfileSkills />
            <ProfileInterests />
            <ProfileProjects />
            {
              me?.id === id && <ProfileInvites student_id={id} />
            }

          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
