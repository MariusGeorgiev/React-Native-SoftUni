import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator.jsx";
import { useTheme } from "../contexts/theme/useTheme.js";

export default function RootNavigator() {
    const { theme } = useTheme();
    
    return (
        <NavigationContainer theme={theme}>
            <MainNavigator />
        </NavigationContainer>
    );
}