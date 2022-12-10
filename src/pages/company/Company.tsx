import React from 'react';
import {useParams} from "react-router-dom";
import styles from "@components/cards/studentCard/StudentCard.module.scss";
import {STUDENT} from "@src/routes/routes";
import noPhoto from "@assets/mock/noImage.png";
import {combineInfo} from "@src/utils/combineInfo";
import {Button, Form} from "react-bootstrap";
import cn from "classnames";

const Company = () => {
  const {id} = useParams()
  return (
    <div></div>
    /*<div className={styles.student}>
      {image ? (
        <img src={image} alt="photo" className={styles.avatar} />
      ) : (
        <img className={styles.avatar} src={noPhoto} alt={'no-photo'} />
      )}
      <div className={styles.name}>
        {first_name} {last_name}
      </div>
      <div className={styles.info}>{combineInfo(course, qualification_name, faculty_name)}</div>
      <Form.Control
        as={'textarea'}
        disabled={!isRedactor()}
        className={styles.about}
        value={infoValue}
        onChange={infoHandler}
      />
      <div className={styles.managementButtons}>
        {role === 'viewer' && isProfile && (
          <Button className={cn(styles.managementButton, styles.sendBtn)}>
            Отправить сообщение
          </Button>
        )}
        {isProfile && (
          <Button className={cn(styles.managementButton, styles.sendBtn)} onClick={handleFeedback}>
            {profile.shouldShowFeedback ? 'Вернуться в профиль' : 'Отзывы о студенте'}
          </Button>
        )}
      </div>
    </div>*/
  );
};

export default Company;
