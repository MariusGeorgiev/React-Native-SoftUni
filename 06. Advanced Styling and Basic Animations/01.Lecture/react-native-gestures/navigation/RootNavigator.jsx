import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator.jsx";


export default function RootNavigator() {
    return (
        <NavigationContainer>

            <MainNavigator />
            
        </NavigationContainer>
    );
}