import React, { useCallback, useEffect, useMemo } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { AUTH, CROWDFUNDING, MY_PROFILE, PROJECTS, STUDENTS } from '@src/routes/routes';
import { checkLocalAuth, LOCAL_TOKEN_KEY } from '@store/auth/authStore';

const Header = () => {
  const location = useLocation();

  const isAuth = useMemo(() => {
    return localStorage.getItem(LOCAL_TOKEN_KEY);
  }, [location.pathname]);

  return (
    <div className={styles.wrapper}>
      <NavLink to={'/'}>
        <img src={logo} alt="logo" />
      </NavLink>
      <div className={styles.nav}>
        <NavLink to={STUDENTS} className={styles.link}>
          Студенты
        </NavLink>
        <NavLink to={PROJECTS} className={styles.link}>
          Проекты
        </NavLink>
        <NavLink to={CROWDFUNDING} className={styles.link}>
          Краудфандинг
        </NavLink>
        {isAuth ? (
          <>
            <NavLink to={MY_PROFILE} className={styles.link}>
              Личный кабинет
            </NavLink>
          </>
        ) : (
          <NavLink to={AUTH} className={styles.link}>Авторизация</NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
