import React, { FC, useState } from 'react';
import styles from './CrowdfundingCard.module.scss';
import image from '@assets/mock/company.jpg';
import { Button, Form } from 'react-bootstrap';

interface CrowdfundingCardProps {
  role?: 'redactor' | 'viewer';
  type: 'support' | 'financing';
}

const CrowdfundingCard: FC<CrowdfundingCardProps> = ({ role = 'viewer', type }) => {
  const [count, setCount] = useState('10р');
  const handleCount = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCount(e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={image} alt="image" />
      </div>
      <div className={styles.count}>
        <span className={styles.preCount}>Нужно:</span>
        <Form.Control
          className={styles.countInput}
          value={count}
          onChange={handleCount}
          disabled={role === 'viewer'}
        />
      </div>
      <div className={styles.collectedWrapper}>
        <div className={styles.collectedText}>Собрано</div>
        <div className={styles.scale}>
          <div className={styles.scaleCollected} style={{ width: '50%' }}></div>
        </div>
        <div className={styles.collected}>5/10</div>
      </div>
      {role === 'redactor' && type === 'financing' && (
        <Button className={styles.closeFinancingBtn}>Завершить сбор средств</Button>
      )}
      {role === 'viewer' && type === 'support' && (
        <Button className={styles.supportBtn}>Поддержать</Button>
      )}
    </div>
  );
};

export default CrowdfundingCard;
