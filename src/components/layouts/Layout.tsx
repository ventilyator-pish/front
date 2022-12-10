import React, {FC} from 'react';
import Header from "@components/header/Header";
import styles from './Layout.module.scss'
import {useLocation} from "react-router-dom";
import {AUTH} from "@src/routes/routes";

interface LayoutProps {
    children: React.ReactNode
}
const Layout: FC<LayoutProps> = ({children}) => {
    const {pathname: location} = useLocation()
    console.log(location)
    return (
        <>
            {
                location !== AUTH ? (
                    <div className={styles.layout}>
                        <div className={styles.container}>
                            <Header />
                            {children}
                        </div>
                    </div>
                ) : (
                    <div className={styles.layout}>
                            {children}
                    </div>
                )

            }
        </>


    );
};


/*<div className={styles.layout}>
    <div className={styles.container}>
        {
            location !== AUTH && <Header />
        }

        {children}
    </div>
</div>*/
export default Layout;
