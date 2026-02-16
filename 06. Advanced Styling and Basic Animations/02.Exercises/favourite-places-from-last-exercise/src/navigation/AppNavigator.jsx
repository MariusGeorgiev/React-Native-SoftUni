import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthNavigator from "./AuthNavigator.jsx";
import PlaceNavigator from "./PlaceNavigator.jsx";
import { useAuth } from "../contexts/auth/useAuth.js";

export default function AppNavigator() {
    const Stack = createNativeStackNavigator();
    const { isAuthenticated } = useAuth();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* Define your screens here */}
            {isAuthenticated
                ? <Stack.Screen name="Places" component={PlaceNavigator} />
                : <Stack.Screen name="Auth" component={AuthNavigator} />
            }
        </Stack.Navigator>
    );
}
