import { createDrawerNavigator } from "@react-navigation/drawer";
import TapGesture from "../screens/TapGesture.jsx";


export default function MainNavigator() {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            
            <Drawer.Screen name="TapGesture" component={TapGesture} options={{ title: 'Tap Gesture' }} />
   
        </Drawer.Navigator>
    );
}
