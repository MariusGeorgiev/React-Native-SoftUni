import { createDrawerNavigator } from "@react-navigation/drawer";
import TapGesture from "../screens/TapGesture.jsx";
import LongPressGesture from "../screens/LongPressGesture.jsx";


export default function MainNavigator() {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>

            <Drawer.Screen name="TapGesture" component={TapGesture} options={{ title: 'Tap Gesture' }} />
            <Drawer.Screen name="LongPressGesture" component={LongPressGesture} options={{ title: 'Long Press' }} />
   
        </Drawer.Navigator>
    );
}
