import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './ProfileInfo.module.scss';
import { Form } from 'react-bootstrap';
import ProfilePartLayout from '@components/profile/ProfilePartLayout';
import { http } from '@server/http';
import { urls } from '@server/urls';

interface ProfileInfoProps {
  type?: 'profile' | 'company';
  role?: 'redactor' | 'viewer';
}

const ProfileInfo: FC<ProfileInfoProps> = ({ type = 'profile', role = 'viewer' }) => {
  const [about, setAbout] = useState('');

  const handleAbout = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAbout(e.target.value);
  };
  const sendInfoAbout = () => {
    console.log(about);
    // http.patch(urls)
  };
  return (
    <ProfilePartLayout>
      <div className={styles.title}>{type === 'profile' ? 'О себе' : 'О компании'}</div>
      <Form.Control
        as={'textarea'}
        className={styles.valueField}
        onBlur={sendInfoAbout}
        onChange={handleAbout}
        value={about}
        disabled={role === 'viewer'}
      />
    </ProfilePartLayout>
  );
};

export default ProfileInfo;
