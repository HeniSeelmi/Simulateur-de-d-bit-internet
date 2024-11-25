import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employeeCount, setEmployeeCount] = useState(0);
    ;

    return (
        <EmployeeContext.Provider value={{ employeeCount, setEmployeeCount}}>
            {children}
        </EmployeeContext.Provider>
    );
};
