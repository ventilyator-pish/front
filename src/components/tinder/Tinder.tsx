import React, { useCallback, useEffect, useState } from 'react';
import styles from './Tinder.module.scss';
import { StudentExtendedCard } from '@components/cards/studentExtendedCard/studentExtendedCard';
import { Button } from 'react-bootstrap';
import dislike from '@assets/dislike.png';
import like from '@assets/like.png';
import cn from 'classnames';
import { Student } from '@src/utils/api/types/main';
import { http } from '@server/http';
import { urls } from '@server/urls';

const Tinder = () => {
  const [student, setStudent] = useState<Student | null>(null);

  const getRandomUser = useCallback(async () => {
    await http.get<Student>(urls.randomPick()).then((res) => setStudent(res.data));
  }, []);

  const likeStudent = async () => {
    if (student) {
      await http.post(urls.like(student.id)).then(getRandomUser);
    }
  };

  const dislikeStudent = async () => {
    if (student) {
      await http.post(urls.dislike(student.id)).then(getRandomUser);
    }
  };

  useEffect(() => {
    getRandomUser().then();
  }, [getRandomUser]);
  return (
    <div className={styles.tinder}>
      <h3 className={styles.title}>Тиндер студентов</h3>
      {
        !student && <div></div>
      }
      {student && (
        <div className={styles.chooseWrapper}>
          <Button className={cn(styles.dislike, styles.btn)} onClick={dislikeStudent}>
            <img src={dislike} alt="dislike" />
          </Button>
          <div className={styles.center}>
            <StudentExtendedCard student={student} />
            <Button className={styles.skip} onClick={getRandomUser}>
              Пропустить
            </Button>
          </div>
          <Button className={cn(styles.like, styles.btn)} onClick={likeStudent}>
            <img src={like} alt="like" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Tinder;
