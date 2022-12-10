import React from 'react';
import styles from './Profile.module.scss'
import {StudentCard} from "@components/cards/studentCard/StudentCard";
import {students} from "@components/cards/studentCard/Students.mock";
import ProfileInfo from "@components/profile/profileInfo/ProfileInfo";
import ProfileSkills from "@components/profile/profileSkills/ProfileSkills";
import ProfileInterests from "@components/profile/profileInterests/ProfileInterests";

const Profile = () => {
    return (
        <div className={styles.wrapper}>
<div></div>
            {/*<StudentCard role={'redactor'} id={student.id} name={student.name} course={student.course} direction={student.direction} photo={student.photo}/>*/}
            <div className={styles.about}>
                <ProfileInfo />
                <ProfileSkills />
                <ProfileInterests />
            </div>
        </div>
    );
};

export default Profile;
