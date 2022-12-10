import React from 'react';
import styles from './ProfileSkills.module.scss';
import ProfilePartLayout from '../ProfilePartLayout';
import CustomSelect from '@components/UI/CustomSelect';

const values = [
  { value: 'IT', label: 'IT' },
  { value: 'ML', label: 'ML' },
  { value: 'Frontend', label: 'Frontend' },
];
const ProfileSkills = () => {
  return (
    <ProfilePartLayout>
      <div className={styles.title}>Мои скиллы</div>
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

export default ProfileSkills;
