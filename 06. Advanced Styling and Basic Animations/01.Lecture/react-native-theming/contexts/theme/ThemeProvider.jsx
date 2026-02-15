import { Platform, useColorScheme } from "react-native";
import { ThemeContext } from "./ThemeContext.js";
import { useMemo, useState, useEffect } from "react";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { setBackgroundColorAsync } from "expo-system-ui";

export default function ThemeProvider({
    children,
}) {
    const colorScheme = useColorScheme();
    const [manualDarkMode, setManualDarkMode] = useState(null);
    const isDarkMode = manualDarkMode ?? colorScheme === "dark";

    const lightTheme = useMemo(() => ({
        ...DefaultTheme,
        dark: false,
        colors: {
            ...DefaultTheme.colors,
            primary: "#6200ee",
            background: "#f5f5f5",
            text: "#000000",
        },
        fonts: Platform.select({
            ios: "San Francisco",
            android: "Roboto",
            default: "System",
        })
    }), []);

    const darkTheme = useMemo(() => ({
        ...DarkTheme,
        dark: true,
        colors: {
            ...DarkTheme.colors,
            primary: "#bb86fc",
            background: "#121212",
            text: "#ffffff",
        },
        fonts: Platform.select({
            ios: "San Francisco",
            android: "Roboto",
            default: "System",
        })
    }), []);

    useEffect(() => {
        setBackgroundColorAsync(isDarkMode ? darkTheme.colors.background : lightTheme.colors.background);
    }, [isDarkMode]);

    const toggleTheme = () => {
        setManualDarkMode((prevMode) => !prevMode);
    };

    const contextValue = {
        toggleTheme,
        isDarkMode,
        theme: isDarkMode ? darkTheme : lightTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}