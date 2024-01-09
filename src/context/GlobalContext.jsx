import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [state, setState] = useState({
        title: "",
        categories: "",
        sub_categories: "",
        skills: [],
        sum: 0,
        desc: "",
        questions: [],
        requirements: "",
        images: [],
        files: []
    });
    const contextValue = {
        workState: state,
        setWorkState: (data) => setState(prev => ({ ...prev, ...data }))
    };
    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};
