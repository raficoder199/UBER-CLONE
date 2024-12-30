import React, { createContext, useState, useContext } from 'react';

// Create the context
export const CaptainDataContext = createContext();

// Custom Hook to Use Context
export const useCaptain = () => {
    const context = useContext(CaptainDataContext);
    if (!context) {
        throw new Error('useCaptain must be used within a CaptainDataContext.Provider');
    }
    return context;
};

// Context Provider Component
const CaptainContext = ({ children }) => {
    const [captain, setcaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (newCaptain) => {
        setcaptain(newCaptain);
    };

    const value = {
        captain,
        setcaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain,
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;
