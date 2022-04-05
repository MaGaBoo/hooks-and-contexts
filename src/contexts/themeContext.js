import React, { useCallback, useContext, useMemo, useState } from 'react';

const THEME_KEY = 'theme'

const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

const supportedThemes = ['normal', 'fluffy'];

const validateTheme = (theme) => supportedThemes.includes(theme) ? theme : 'normal';

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        validateTheme(localStorage.getItem(THEME_KEY)) || 'normal'
    )

    const toggleTheme = useCallback(() => {
        const nextTheme = theme === 'normal' ? 'fluffy' : 'normal'
        setTheme(nextTheme)
        localStorage.setItem(THEME_KEY, nextTheme)
    }, [theme]);

    const value = useMemo(() => ({
        theme, toggleTheme
    }), [theme,toggleTheme]);

    return (
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>
    )
};

export default ThemeContext