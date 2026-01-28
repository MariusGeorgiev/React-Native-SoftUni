// import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';

export default function RootNavigator() {

    const Tabs = createBottomTabNavigator();

    return (
        // <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name='HomeTab' component={HomeNavigator}/>
            </Tabs.Navigator>
        // </NavigationContainer>
    );
}