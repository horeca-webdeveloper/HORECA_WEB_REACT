import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const LocalCartCountContext = createContext();

// Create the provider component
export const LocalCartCountProvider = ({ children }) => {
    // Initialize totalCartItems from localStorage or default to 0
    const [totalCartItems, setTotalCartItems] = useState(() => {
        const storedCount = localStorage.getItem("TotalCartItems");
        return storedCount ? parseInt(storedCount) : 0;
    });

    // Function to increment the quantity
    const incrementCartItems = (quantity) => {
        setTotalCartItems((prevCount) => {
            const newCount = prevCount + quantity;
            localStorage.setItem("TotalCartItems", newCount); // Update localStorage
            return newCount;
        });
    };

    return (
        <LocalCartCountContext.Provider value={{ totalCartItems, incrementCartItems }}>
            {children}
        </LocalCartCountContext.Provider>
    );
};

// Custom hook for easy access to the context
export const useLocalCartCount = () => {
    return useContext(LocalCartCountContext);
};
