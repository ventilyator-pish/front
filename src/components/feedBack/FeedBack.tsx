import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './FeedBack.module.scss';
import avatar from '@assets/mock/mockPhoto.jpg';
import { $reviews, addReview, getReviews } from '@store/reviews/reviewsStore';
import { useStore } from 'effector-react';
import { Review } from '@src/utils/api/types/main';
import { useNavigate } from 'react-router-dom';
import { COMPANY } from '@src/routes/routes';
import { $me } from '@store/me/meStore';
import send from '@assets/mock/send.png';

interface CommentProps {
  review: Review;
}

const Comment: FC<CommentProps> = ({ review }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.commentWrapperOutside}>
      <div className={styles.imgWrapper}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={styles.commentWrapper}>
        <div className={styles.whoWrote} onClick={() => navigate(COMPANY + review.company.id)}>
          {review.company.name}
        </div>
        <div className={styles.comment}>{review.review}</div>
      </div>
    </div>
  );
};

interface FeedBackProps {
  studentId: string | undefined;
}

const FeedBack: FC<FeedBackProps> = ({ studentId }) => {
  const me = useStore($me);
  const reviews = useStore($reviews);
  const [text, setText] = useState<string>(``);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!studentId) {
      return false;
    }

    addReview({ student_id: studentId, text: text })
      .then(() => getReviews(studentId))
    setText(``);
    return false;
  };

  useEffect(() => {
    if (studentId) {
      getReviews(studentId);
    }
  }, [studentId]);

  console.log(me?.company);

  return (
    <div>
      <div className={styles.feedBack}>
        <h3 className={styles.feedbackTitle}>Отзывы о студенте</h3>
        <div className={styles.comments}>
          {reviews.map((review) => (
            <Comment review={review} key={review.id} />
          ))}
        </div>
      </div>
      {me?.company && (
        <div>
          <form onSubmit={handleReviewSubmit} className={styles.form}>
            <input type="text" onChange={handleInputValue} value={text} />
            <button type="submit">
              <img src={send} alt="" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FeedBack;
