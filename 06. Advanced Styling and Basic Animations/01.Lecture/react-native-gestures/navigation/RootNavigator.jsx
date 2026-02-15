import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator.jsx";
import OfflineBanner from "../components/OfflineBanner.jsx";

export default function RootNavigator() {
    return (
        <NavigationContainer>
            
            <OfflineBanner />
            <MainNavigator />

        </NavigationContainer>
    );
}