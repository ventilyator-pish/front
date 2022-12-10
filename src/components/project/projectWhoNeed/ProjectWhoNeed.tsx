import React from 'react';
import styles from "@components/profile/profileSkills/ProfileSkills.module.scss";
import CustomSelect from "@components/UI/CustomSelect";
import ProfilePartLayout from "@components/profile/ProfilePartLayout";

const values = [
    { value: 'IT', label: 'IT' },
    { value: 'ML', label: 'ML' },
    { value: 'Frontend', label: 'Frontend' },
];

const ProjectActivity = () => {
    return (
        <ProfilePartLayout>
            <div className={styles.title}>Кого ищем</div>
            <CustomSelect
                options={values}
                isSearchable={true}
                isMulti={true}
                isFilter={true}
                className={styles.select}
                placeholder={'Поиск'}
            />
        </ProfilePartLayout>
    );
};

export default ProjectActivity;
