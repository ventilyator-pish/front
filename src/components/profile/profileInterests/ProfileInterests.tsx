import React from 'react';
import styles from "@components/profile/profileSkills/ProfileSkills.module.scss";
import CustomSelect from "@components/UI/CustomSelect";
import ProfilePartLayout from "@components/profile/ProfilePartLayout";
import TagSelect from "@components/UI/TagSelect/TagSelect";

const values = [
    { value: 'IT', label: 'IT' },
    { value: 'ML', label: 'ML' },
    { value: 'Frontend', label: 'Frontend' },
];
const ProfileInterests = () => {
    return (
        <ProfilePartLayout>
            <div className={styles.title}>Мои интересы</div>
          <TagSelect/>
        </ProfilePartLayout>
    );
};

export default ProfileInterests;
