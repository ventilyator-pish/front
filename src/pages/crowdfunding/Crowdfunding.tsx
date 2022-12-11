import React, { useEffect, useState } from 'react';
import styles from './Crowdfunding.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { MY_PROFILE, PROJECT, PROJECTS, STUDENTS } from '@src/routes/routes';
import { Button } from 'react-bootstrap';
import CrowdfundingCard from '@components/cards/crowdfundingCard/CrowdfundingCard';
import TagSelect from '@components/UI/TagSelect/TagSelect';
import { CrowdFounding, Tag } from '@src/utils/api/types/main';
import { getRelatedStudents } from '@store/students/studentsStore';
import { getCrownFoundings } from '@store/crowdfoundings/crowdFoundingsStore';
import { useStore } from 'effector-react';
import { $me } from '@store/me/meStore';
import {$modals} from "@store/modal/modalStore";

const Crowdfunding = () => {
  const me = useStore($me);
  const [type, setType] = useState<'financing' | 'support'>('financing');
  const [tags, onTagsChange] = useState<Tag[]>([]);
  const navigate = useNavigate();
  const modal = useStore($modals);
  const [crowdfoundings, setCrowdfoundings] = useState<CrowdFounding[]>([]);
  const [myCrowdfoundings, setMyCrowdfoundings] = useState<CrowdFounding[]>([]);

  const handleFinancing = () => {
    setType('financing');
  };
  const handleSupport = () => {
    setType('support');
  };
  const handleTagChange = (tags: Tag[]) => {
    console.log(tags);
    onTagsChange(tags);
  };

  useEffect(() => {
    const tagsProp = tags.map((tag) => tag.id).join(',');
    getCrownFoundings().then((result) => {
      setCrowdfoundings(result.filter((cw) => cw.project.company_id != me?.company?.id));
      setMyCrowdfoundings(result.filter((cw) => cw.project.company_id == me?.company?.id));
    });
  }, [tags, modal.isShowSupportingProjectModal]);

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
            <Button className={styles.chooseProjectBtn} onClick={() => navigate(MY_PROFILE)}>
              Выбрать проект
            </Button>
          )}
        </div>
      </div>
      {type === 'support' && (
        <TagSelect handleTagChange={handleTagChange} theme={'light'} role={'redactor'} />
      )}
      <div className={styles.cards}>
        {type === 'financing' &&
          myCrowdfoundings.map((crowdfounding) => (
            <CrowdfundingCard
              key={crowdfounding.id}
              type={type}
              crowdfounding={crowdfounding}
              onClick={() => navigate(PROJECT + crowdfounding.project.id)}
            />
          ))}
        {type === 'support' &&
          crowdfoundings.map((crowdfounding) => (
            <CrowdfundingCard
              key={crowdfounding.id}
              type={type}
              crowdfounding={crowdfounding}
              onClick={() => navigate(PROJECT + crowdfounding.project.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Crowdfunding;
