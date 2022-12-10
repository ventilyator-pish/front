import React from 'react';
import styles from './Header.module.scss'
import logo from '../../assets/logo.svg';
import {NavLink} from "react-router-dom";
import {CROWDFUNDING, PROFILE, PROJECTS, STUDENTS} from "@src/routes/routes";

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <NavLink to={'/'}>
                <img src={logo} alt="logo"/>
            </NavLink>
            <div className={styles.nav}>
                <NavLink to={STUDENTS} className={styles.link}>Студенты</NavLink>
                <NavLink to={PROJECTS} className={styles.link}>Проекты</NavLink>
                <NavLink to={CROWDFUNDING} className={styles.link}>Краудфандинг</NavLink>
                <NavLink to={PROFILE} className={styles.link}>Личный кабинет</NavLink>
            </div>
        </div>
    );
};

export default Header;
