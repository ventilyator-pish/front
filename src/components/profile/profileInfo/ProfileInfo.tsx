import React, {FC} from 'react';
import styles from './ProfileInfo.module.scss'
import {Form} from "react-bootstrap";
import ProfilePartLayout from "@components/profile/ProfilePartLayout";

interface ProfileInfoProps {
  type?: 'profile' | 'company'
}

const ProfileInfo: FC<ProfileInfoProps> = ({type =  'profile'}) => {
    return (
        <ProfilePartLayout>
            <div className={styles.title}>{
              type === 'profile' ? 'О себе' : 'О компании'
            }</div>
            <Form.Control as={'textarea'} className={styles.valueField}/>
        </ProfilePartLayout>
    );
};

export default ProfileInfo;
