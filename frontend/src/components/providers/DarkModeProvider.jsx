import React, { createContext, useContext, useState } from "react";

const ColorModeContext = createContext();

// export const ColorModeType = {
//     Dark: "dark",
//     Light: "light",
//     Red: "red",
// };

export function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("isDarkMode") === "true"
    );

    const changeMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("isDarkMode", !isDarkMode);
    };

    return (
        <ColorModeContext.Provider
            value={{
                isDarkMode,
                changeMode,
            }}>
            {children}
        </ColorModeContext.Provider>
    );
}

export function useDarkMode() {
    const { isDarkMode, changeMode } = useContext(ColorModeContext);
    return {
        isDarkMode,
        changeMode,
    };
}

export function useDarkModeValue(color1, color2) {
    const { isDarkMode } = useDarkMode();
    if (!color2) return color1;
    return !isDarkMode ? color1 : color2;
}
