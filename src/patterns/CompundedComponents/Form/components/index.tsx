import React from 'react';
import { useFormContext } from '../FormContext';

export const InputButton = () => {
    return <button type="submit">Submit</button>;
};

export const InputLogin = () => {
    const { theme, setLogin } = useFormContext();

    const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    };

    return (
        <label htmlFor="inputLogin" style={theme}>
            Login:
            <input id="inputLogin" type="text" onChange={hanldeChange} />
        </label>
    );
};

export const InputPassword = () => {
    const { theme, setPassword } = useFormContext();

    const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <label htmlFor="inputPassword" style={theme}>
            Password:
            <input id="inputPassword" type="password" onChange={hanldeChange} />
        </label>
    );
};
