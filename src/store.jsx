import { createContext, useState } from "react";

export const FormContext = createContext(null);

export const FormProvider = ({children, initialForm={}}) => {
    const [form, setForm] = useState(initialForm);
    return <FormContext.Provider value={{form, setForm}}>{children}</FormContext.Provider>
}