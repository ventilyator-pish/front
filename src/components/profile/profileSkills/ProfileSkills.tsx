import React, {FC, useCallback, useEffect, useState} from 'react';
import styles from './ProfileSkills.module.scss';
import ProfilePartLayout from '../ProfilePartLayout';
import CustomSelect from '@components/UI/CustomSelect';
import TagSelect from "@components/UI/TagSelect/TagSelect";
import {Tag} from "@src/utils/api/types/main";
import {http} from "@server/http";

const values = [
  { value: 'IT', label: 'IT' },
  { value: 'ML', label: 'ML' },
  { value: 'Frontend', label: 'Frontend' },
];

interface ProfileSkillsProps {
  role?: 'viewer' | 'redactor'
}
const ProfileSkills: FC<ProfileSkillsProps> = ({role= 'viewer'}) => {
  const [tags, onTagsChange] = useState<Tag[]>([]);
  const handleTagChange = (tags: Tag[]) => {
    console.log(tags)
    onTagsChange(tags)
  }

  const sendSkillsToServer = useCallback(async (tagsProp: string) => {
    // await http.patch(urls.)
    console.log(tagsProp)
  }, [])

  useEffect(() => {
    const tagsProp = tags.map((tag) => tag.id).join(",");
    sendSkillsToServer(tagsProp).then()
  }, [tags])
  return (
    <ProfilePartLayout>
      <div className={styles.title}>Мои скиллы</div>
        <TagSelect role={role} handleTagChange={handleTagChange}/>
    </ProfilePartLayout>
  );
};

export default ProfileSkills;
