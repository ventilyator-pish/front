import React, { FC, useCallback, useState } from 'react';
import styles from './CrowdfundingCard.module.scss';
import image from '@assets/mock/company.jpg';
import { Button, Form } from 'react-bootstrap';
import { CrowdFounding } from '@src/utils/api/types/main';
import { $modals, handleIsShowSupportingProjectModal } from '@store/modal/modalStore';
import FinancingModal from '@components/modals/financingModal/FinancingModal';
import { useStore } from 'effector-react';

interface CrowdfundingCardProps {
  role?: 'redactor' | 'viewer';
  type: 'support' | 'financing';
  crowdfounding: CrowdFounding;
  onClick?: () => void;
}

const CrowdfundingCard: FC<CrowdfundingCardProps> = ({ role = 'viewer', type, crowdfounding, onClick }) => {
  const [count, setCount] = useState(crowdfounding);
  const modal = useStore($modals);
  console.log(crowdfounding)
  const supportProject = (e: any) => {
    e.stopPropagation();
    handleIsShowSupportingProjectModal(true);
  };

  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div onClick={(e: any) => e.stopPropagation()}>
        <FinancingModal crowdfunding={crowdfounding}/>
      </div>

      <div className={styles.imgWrapper}>
        <img className={styles.img} src={crowdfounding.project.image} alt="image" />
      </div>
      <div className={styles.count}>
        <span className={styles.preCount}>Нужно:</span>
        <Form.Control
          className={styles.countInput}
          value={crowdfounding.goal.toString() + ' ₽'}
          disabled={role === 'viewer'}
        />
      </div>
      <div className={styles.collectedWrapper}>
        <div className={styles.collectedText}>Собрано</div>
        <div className={styles.scale}>
          <div
            className={styles.scaleCollected}
            style={{ width: (crowdfounding.current / crowdfounding.goal) * 100 + '%' }}
          ></div>
        </div>
        <div className={styles.collected}>
          {crowdfounding.current}/{crowdfounding.goal}
        </div>
      </div>
      {role === 'redactor' && type === 'financing' && (
        <Button className={styles.closeFinancingBtn}>Завершить сбор средств</Button>
      )}
      {role === 'viewer' && type === 'support' && (
        <Button className={styles.supportBtn} onClick={supportProject}>
          Поддержать
        </Button>
      )}
    </div>
  );
};

export default CrowdfundingCard;
