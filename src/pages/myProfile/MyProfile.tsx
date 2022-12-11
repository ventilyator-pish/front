import React, {useEffect} from 'react';
import {useStore} from "effector-react";
import styles from "@pages/profile/Profile.module.scss";
import {StudentCard} from "@components/cards/studentCard/StudentCard";
import ProfileInfo from "@components/profile/profileInfo/ProfileInfo";
import ProfileSkills from "@components/profile/profileSkills/ProfileSkills";
import ProfileInterests from "@components/profile/profileInterests/ProfileInterests";
import {$me, getMeFx} from "@store/me/meStore";
import ProfileProjects from "@components/profile/profileProjects/ProfileProjects";
import FeedBack from "@components/feedBack/FeedBack";
import ProfileInvites from "@components/profile/profileInvites/ProfileInvites";
import {$profile} from "@store/profile/profile";

const MyProfile = () => {
  const me = useStore($me)
  const profile = useStore($profile)
  console.log(profile.shouldShowFeedback)
  return (
    <div className={styles.wrapper}>

      {
        me?.studentprofile && <StudentCard role={'redactor'} student={me.studentprofile} isProfile={true}/>
      }
      <div className={styles.about}>
        {profile.shouldShowFeedback ? (
            me?.id && <FeedBack studentId={me.id.toString()}/>
        ) : (
          <>
            <ProfileInfo role={'redactor'}/>
            <ProfileSkills role={'redactor'}/>
            <ProfileInterests role={'redactor'}/>
            <ProfileProjects />
            {
              me?.id && <ProfileInvites student_id={me.id.toString()} />
            }
          </>
        )}

      </div>
    </div>
  );
};

export default MyProfile;
