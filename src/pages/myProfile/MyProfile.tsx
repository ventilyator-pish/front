import React, {useEffect} from 'react';
import {useStore} from "effector-react";
import styles from "@pages/profile/Profile.module.scss";
import {StudentCard} from "@components/cards/studentCard/StudentCard";
import ProfileInfo from "@components/profile/profileInfo/ProfileInfo";
import ProfileSkills from "@components/profile/profileSkills/ProfileSkills";
import ProfileInterests from "@components/profile/profileInterests/ProfileInterests";
import {$me, getMeFx} from "@store/me/meStore";
import ProfileProjects from "@components/profile/profileProjects/ProfileProjects";

const MyProfile = () => {
  const me = useStore($me)
  return (
    <div className={styles.wrapper}>
      {
        me?.studentprofile ? <StudentCard role={'redactor'} student={me.studentprofile} isProfile={true}/> : <div></div>
      }
      <div className={styles.about}>
        <ProfileInfo role={'redactor'}/>
        <ProfileSkills role={'redactor'}/>
        <ProfileInterests role={'redactor'}/>
        <ProfileProjects />
      </div>
    </div>
  );
};

export default MyProfile;
