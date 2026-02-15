import { createDrawerNavigator } from "@react-navigation/drawer";
import TapGesture from "../screens/TapGesture.jsx";
import LongPressGesture from "../screens/LongPressGesture.jsx";
import FlingGesture from "../screens/FlingGesture.jsx";
import PanGesture from "../screens/PanGesture.jsx";


export default function MainNavigator() {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>

            <Drawer.Screen name="TapGesture" component={TapGesture} options={{ title: 'Tap Gesture' }} />
            <Drawer.Screen name="LongPressGesture" component={LongPressGesture} options={{ title: 'Long Press' }} />
            <Drawer.Screen name="FlingGesture" component={FlingGesture} options={{ title: 'Fling Gesture' }} />
            <Drawer.Screen name="PanGesture" component={PanGesture} options={{ title: 'Pan Gesture' }} />
   
        </Drawer.Navigator>
    );
}
