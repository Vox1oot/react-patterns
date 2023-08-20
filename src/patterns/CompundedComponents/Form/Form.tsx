import React, { useState } from 'react';
import { InputPassword, InputLogin, InputButton } from './components';
import { FormContextProvider } from './FormContext';
import type { IForm } from './types';

import styles from './Form.module.css';

const Form = (props: IForm) => {
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');

    const { theme, children } = props;

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(password, login);
    };

    return (
        <FormContextProvider value={{ theme, setPassword, setLogin }}>
            <form onSubmit={handleSubmit} className={styles.form}>
                {children}
            </form>
        </FormContextProvider>
    );
};

Form.InputPassword = InputPassword;
Form.InputLogin = InputLogin;
Form.Submit = InputButton;

export default Form;
