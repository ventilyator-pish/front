import React, { FC, useCallback, useEffect, useState } from 'react';
import styles from './ProfileSkills.module.scss';
import ProfilePartLayout from '../ProfilePartLayout';
import CustomSelect from '@components/UI/CustomSelect';
import TagSelect from '@components/UI/TagSelect/TagSelect';
import { Tag, User } from '@src/utils/api/types/main';
import { http } from '@server/http';
import { useStore } from 'effector-react';
import { $me } from '@store/me/meStore';
import { urls } from '@server/urls';
import { $tags } from '@store/tags/tagsStore';
import axios from 'axios';
import {Input} from "react-select/animated";
import {Button, Form} from 'react-bootstrap';

const values = [
  { value: 'IT', label: 'IT' },
  { value: 'ML', label: 'ML' },
  { value: 'Frontend', label: 'Frontend' },
];

interface ProfileSkillsProps {
  role?: 'viewer' | 'redactor';
}

const ProfileSkills: FC<ProfileSkillsProps> = ({ role = 'viewer' }) => {
  const me = useStore($me);
  const [link, setLink] = useState('')

  const handleLink = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLink(e.target.value)
  }

  const [tags, onTagsChange] = useState<Tag[]>(me?.studentprofile.skills || []);

  const handleTagChange = (tags: Tag[]) => {
    console.log(tags);

    onTagsChange(tags);
  };

  const sendSkillsToServer = useCallback(
    async (tagsProp: string) => {
      if (me) {
        await http.patch(urls.studentById(me.studentprofile.id));
      }
    },
    [me],
  );

  useEffect(() => {
    const tagsProp = tags.map((tag) => tag.id).join(',');
    sendSkillsToServer(tagsProp).then();
  }, [tags]);

  const sendLinkTo = async () => {
    if (me){
      await http.post(urls.updateTags(me.studentprofile.id), {url: link})

    }
  }

  return (
    <ProfilePartLayout>
      <div className={styles.wrapperLink}>
        <div className={styles.title}>Мои скиллы</div>
        <div>
          <Form.Control onChange={handleLink} value={link} placeholder={'Ссылка на HH'} onSubmit={sendLinkTo}/>
        </div>

      </div>
      <TagSelect initTags={tags} role={role} handleTagChange={handleTagChange}/>
    </ProfilePartLayout>
  );
};

export default ProfileSkills;
