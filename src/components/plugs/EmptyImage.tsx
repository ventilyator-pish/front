import React, {FC} from "react";
import DisabledByDefault from "@assets/icons/DisabledByDefault";
import styles from './EmptyImage.module.scss'

interface EmptyImageProps {
  type: 'project' | 'profile';
}

const EmptyImage: FC<EmptyImageProps> = ({ type }) => {
  return (
    <div className={styles.emptyCardInner}>
      <DisabledByDefault />
      <div className={styles.noModels}>
        {type === 'project' ? 'Нет аватара проекта' : 'Нет аватара профиля'}
      </div>
    </div>
  );
};
export default EmptyImage
