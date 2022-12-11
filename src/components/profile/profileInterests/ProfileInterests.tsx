import React, {FC} from 'react';
import styles from "@components/profile/profileSkills/ProfileSkills.module.scss";
import CustomSelect from "@components/UI/CustomSelect";
import ProfilePartLayout from "@components/profile/ProfilePartLayout";
import TagSelect from "@components/UI/TagSelect/TagSelect";

interface ProfileInterestsProps {
  role?: 'viewer' | 'redactor'
}
const ProfileInterests: FC<ProfileInterestsProps> = ({role='viewer'}) => {
    return (
        <ProfilePartLayout>
            <div className={styles.title}>Мои интересы</div>
          <TagSelect/>
        </ProfilePartLayout>
    );
};

export default ProfileInterests;
