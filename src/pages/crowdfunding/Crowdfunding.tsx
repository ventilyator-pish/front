import React, {useEffect, useState} from 'react';
import styles from './Crowdfunding.module.scss';
import { NavLink } from 'react-router-dom';
import { PROJECTS, STUDENTS } from '@src/routes/routes';
import { Button } from 'react-bootstrap';
import CrowdfundingCard from '@components/cards/crowdfundingCard/CrowdfundingCard';
import TagSelect from "@components/UI/TagSelect/TagSelect";
import {Tag} from "@src/utils/api/types/main";
import {getRelatedStudents} from "@store/students/studentsStore";

const Crowdfunding = () => {
  const [type, setType] = useState<'financing' | 'support'>('financing');
  const [tags, onTagsChange] = useState<Tag[]>([]);
  const handleFinancing = () => {
    setType('financing');
  };
  const handleSupport = () => {
    setType('support');
  };
  const handleTagChange = (tags: Tag[]) => {
    console.log(tags)
    onTagsChange(tags)
  }

  useEffect(() => {
    const tagsProp = tags.map((tag) => tag.id).join(",");

  }, [tags])
  return (
    <div>
      <div className={styles.changerWrapper}>
        <div
          onClick={handleSupport}
          className={type === 'support' ? styles.changerActive : styles.changer}
        >
          Поддержать проект
        </div>
        <div className={styles.separator}>|</div>
        <div className={styles.financingWrapper}>
          <div
            onClick={handleFinancing}
            className={type === 'financing' ? styles.changerActive : styles.changer}
          >
            Запросить финансирование
          </div>
          {type === 'financing' && (
            <Button className={styles.chooseProjectBtn}>Выбрать проект</Button>
          )}

        </div>

      </div>
      {type === 'support' && <TagSelect handleTagChange={handleTagChange} theme={'light'} role={'redactor'}/>}
      <div className={styles.cards}>
        {type === 'financing' && (
          <>
            <CrowdfundingCard type={'financing'}/>
            <CrowdfundingCard type={'financing'}/>
            <CrowdfundingCard type={'financing'}/>
            <CrowdfundingCard type={'financing'}/>
          </>
        )}
        {type === 'support' && (
          <>
            <CrowdfundingCard type={'support'}/>
            <CrowdfundingCard type={'support'}/>
            <CrowdfundingCard type={'support'}/>
            <CrowdfundingCard type={'support'}/>
          </>
        )}

      </div>
    </div>
  );
};

export default Crowdfunding;
