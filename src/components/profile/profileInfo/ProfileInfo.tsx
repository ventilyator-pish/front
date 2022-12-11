import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './ProfileInfo.module.scss';
import { Form } from 'react-bootstrap';
import ProfilePartLayout from '@components/profile/ProfilePartLayout';
import { http } from '@server/http';
import { urls } from '@server/urls';
import {useStore} from "effector-react";
import {$me} from "@store/me/meStore";
import {User} from "@src/utils/api/types/main";
import {data} from "vis-network";

interface ProfileInfoProps {
  type?: 'profile' | 'company';
  role?: 'redactor' | 'viewer';
}

const ProfileInfo: FC<ProfileInfoProps> = ({ type = 'profile', role = 'viewer' }) => {
  const me = useStore($me)
  console.log(me)

  const [about, setAbout] = useState<string>('');

  const handleAbout = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAbout(e.target.value);
  };
  const sendInfoAbout = async () => {
    if (me){
      await http.patch(urls.studentById(me.studentprofile.id), {description: about})
        .then(() => http.get(urls.me()))
    }
  };
  const getMyAcc = async () => {
    await http.get<User>(urls.me()).then((res) => setAbout(res.data.studentprofile.description))
  }
  useEffect(() => {
    getMyAcc().then()
  }, [])

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
