import { createContext, useContext } from 'react';
import type { Theme } from '../types';

const FormContext = createContext<
    | undefined
    | {
          theme: Theme;
          setPassword: React.Dispatch<React.SetStateAction<string>>;
          setLogin: React.Dispatch<React.SetStateAction<string>>;
      }
>(undefined);

export const FormContextProvider = FormContext.Provider;

export const useFormContext = () => {
    const context = useContext(FormContext);

    if (!context) {
        throw new Error('This component must be used into a Form component');
    }

    return context;
};
