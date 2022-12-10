import React from 'react';
import styles from './ProjectAbout.module.scss'
import {Form} from "react-bootstrap";
import ProfilePartLayout from "@components/profile/ProfilePartLayout";

const ProfileInfo = () => {
    return (
        <ProfilePartLayout>
            <div className={styles.title}>О проекте</div>
            <Form.Control as={'textarea'} className={styles.valueField}/>
        </ProfilePartLayout>
    );
};

export default ProfileInfo;
