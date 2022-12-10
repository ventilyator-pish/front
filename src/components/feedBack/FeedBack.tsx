import React, {FC, useEffect} from 'react';
import styles from './FeedBack.module.scss';
import avatar from '@assets/mock/mockPhoto.jpg';
import {$reviews, getReviews} from "@store/reviews/reviewsStore";
import {useStore} from "effector-react";
import {Review} from "@src/utils/api/types/main";


interface CommentProps {
  review: Review | undefined
}
const Comment: FC<CommentProps> = ({review}) => {
  return (
    <div className={styles.commentWrapperOutside}>
      <div className={styles.imgWrapper}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={styles.commentWrapper}>
        <div className={styles.whoWrote}>{review?.company.name}</div>
        <div className={styles.comment}>{review?.review}</div>
      </div>
    </div>
  );
};

interface FeedBackProps {
  studentId: string | undefined;
}
const FeedBack: FC<FeedBackProps> = ({studentId}) => {
  const reviews = useStore($reviews)
  useEffect(() => {
    if (studentId) {
      getReviews(studentId)
    }
  }, [])
  return (
    <div className={styles.feedBack}>
      <h3 className={styles.feedbackTitle}>Отзывы о студенте</h3>
      <div className={styles.comments}>
        {
          reviews.map((review) => <Comment review={review} key={review.id}/>)
        }

      </div>

    </div>
  );
};

export default FeedBack;
