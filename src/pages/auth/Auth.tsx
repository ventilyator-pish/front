import React from 'react';
import styles from './Auth.module.scss'
import logo from './../../assets/logo.svg'
import itmo from './../../assets/itmo.jpg'
import {Button} from "react-bootstrap";
import FormLogin from "@components/auth/formLogin/FormLogin";

const Auth = () => {
    return (
        <div className={styles.auth}>
            <div className={styles.authInner}>
                <div className={styles.student}>
                    <img src={logo} alt="" className={styles.logo}/>
                    <Button className={styles.itmoBtn}>
                        <img src={itmo} alt=""/>
                        <span>Войти через ИТМО</span>
                    </Button>
                </div>
                <div className={styles.company}>
                    <FormLogin />
                </div>
            </div>
        </div>
    );
};

export default Auth;
