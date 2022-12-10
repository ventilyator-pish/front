import React, {FC, ReactNode} from 'react';
import styles from "./ProfilePartLayout.module.scss";

interface ProfilePartLayoutProps {
    children: ReactNode;
}

const ProfilePartLayout: FC<ProfilePartLayoutProps> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
};

export default ProfilePartLayout;
