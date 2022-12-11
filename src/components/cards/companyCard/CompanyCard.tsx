import React, {FC} from 'react';
import styles from "@components/cards/studentCard/StudentCard.module.scss";
import noPhoto from "@assets/mock/noImage.png";
import {Company} from "@src/utils/api/types/main";

interface CompanyCardProps {
  company: Company
}

const CompanyCard: FC<CompanyCardProps> = ({company}) => {
  return (
    <div className={styles.student}>
      {company?.image ? (
        <img src={company.image} alt="photo" className={styles.avatar} />
      ) : (
        <img className={styles.avatar} src={noPhoto} alt={'no-photo'} />
      )}
      <div className={styles.name}>
        {company?.name}
      </div>
      <div className={styles.info}>{company?.description}</div>
      {/*<Form.Control
          as={'textarea'}
          disabled={!isRedactor()}
          className={styles.about}
          value={infoValue}
          onChange={infoHandler}
        />*/}

    </div>
  );
};

export default CompanyCard;
