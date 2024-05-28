import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TransitionWrapper = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        document.body.classList.add('fade-in');

        return () => {
            document.body.classList.remove('fade-in');
        };
    }, [location]);

    return (
        <div className="transition-wrapper">
            {children}
        </div>
    );
};

export default TransitionWrapper;