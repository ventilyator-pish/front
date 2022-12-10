import React from 'react';
import styles from './Recommendations.module.scss'
import {NavLink, useLocation} from "react-router-dom";
import {PROJECTS, STUDENTS} from "@src/routes/routes";

const Recommendations = () => {
    const {pathname} = useLocation()
    return (
        <div>
            <div className={styles.linkWrapper}>
                <NavLink to={STUDENTS} className={pathname === STUDENTS ? styles.linkActive : styles.link}>Лучшие студенты для ваших задач</NavLink>
                <div className={styles.separator}>|</div>
                <NavLink to={PROJECTS} className={pathname === PROJECTS ? styles.linkActive : styles.link}>Интересные проекты</NavLink>
            </div>
        </div>
    );
};

export default Recommendations;
