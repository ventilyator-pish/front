import React, {FC, useCallback, useEffect, useState} from 'react';
import styles from "@components/profile/profileSkills/ProfileSkills.module.scss";
import CustomSelect from "@components/UI/CustomSelect";
import ProfilePartLayout from "@components/profile/ProfilePartLayout";
import TagSelect from "@components/UI/TagSelect/TagSelect";
import {Tag} from "@src/utils/api/types/main";

interface ProfileInterestsProps {
  role?: 'viewer' | 'redactor'
}
const ProfileInterests: FC<ProfileInterestsProps> = ({role='viewer'}) => {
  const [tags, onTagsChange] = useState<Tag[]>([]);
  const handleTagChange = (tags: Tag[]) => {
    console.log(tags)
    onTagsChange(tags)
  }

  const sendInterestsToServer = useCallback(async (tagsProp: string) => {
    // await http.patch(urls.)
    console.log(tagsProp)
  }, [])

  useEffect(() => {
    const tagsProp = tags.map((tag) => tag.id).join(",");
    sendInterestsToServer(tagsProp).then()
  }, [tags])
    return (
        <ProfilePartLayout>
            <div className={styles.title}>Мои интересы</div>
          <TagSelect role={role} handleTagChange={handleTagChange}/>
        </ProfilePartLayout>
    );
};

export default ProfileInterests;
