import React, {FC, useCallback, useRef} from 'react';
import styles from './FormLogin.module.scss'
import {Button, Form} from "react-bootstrap";
import mail from '@assets/icons/mail.svg'
import view from '@assets/icons/view.svg'
import {Formik} from "formik";
import {CreateJWTProps} from "@lib/types/auth/authTypes";
import {MAIN} from "@src/routes/routes";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

interface CustomInputProps {
    type: 'email' | 'password'
}

enum CurrentInput {
    email= 'Email',
    password = 'Password'

}

const initValues: CreateJWTProps = {
    email: '',
    password: ''
}

const CustomInput: FC<CustomInputProps> = ({type}) => {
    const refInput = useRef<HTMLInputElement>(null);
    const onDivClick = () => {
        // `current` points to the mounted text input element
        if (refInput.current){
            refInput.current.focus();

        }
    };
    return (
        <div className={styles.inputMail} onClick={onDivClick}>
            <div className={styles.inputMailImgWrapper}>
                <img src={type === 'email' ? mail : view} alt="mail" className={styles.inputMailImg}/>
            </div>
            <Form.Control ref={refInput} placeholder={CurrentInput[type]} type={type === 'email' ? 'text' :'password'}/>
        </div>
    )
}

const FormLogin = () => {
    const navigate = useNavigate();
    const createTokenAndRedirect = useCallback(
        async (e: CreateJWTProps) => {
            try {
                // await creatAuthTokenAndSaveLocalFx(e);
                console.log(12321)
                navigate(MAIN);
            } catch (e: any) {
                toast.error('Неверный логин или пароль.');
                console.log(e);
            }
        },
        [navigate],
    );
    return (
        <div className={styles.formWrapper}>
            <h3 className={styles.login}>Вход</h3>
            <Formik initialValues={initValues} onSubmit={createTokenAndRedirect}>
                {({ handleChange, submitForm }) => {
                    return (
                        <Form className={styles.formInputs}>
                            <CustomInput type={'email'}/>
                            <CustomInput type={'password'}/>
                            <Button className={styles.btnLogin} onClick={submitForm}>Войти</Button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
};

export default FormLogin;