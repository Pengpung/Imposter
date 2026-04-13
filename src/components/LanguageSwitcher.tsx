import React, { useState } from 'react';

const LanguageSwitcher = () => {
    const [language, setLanguage] = useState('English');

    const toggleLanguage = () => {
        setLanguage(prevLang => prevLang === 'English' ? 'Spanish' : 'English');
    };

    return (
        <div>
            <h1>{language}</h1>
            <button onClick={toggleLanguage}>Switch Language</button>
        </div>
    );
};

export default LanguageSwitcher;
