import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';
import InfoScreen from '../screens/InfoScreen';
import CardScreen from '../screens/CardScreen';

export default function RootNavigator() {

    const Tabs = createBottomTabNavigator();

    return (
            <Tabs.Navigator>
                <Tabs.Screen 
                    name='HomeTab' 
                    component={HomeNavigator} 
                    options={{ headerShown: false }}
                />
                <Tabs.Screen name='Card' component={CardScreen} />
                <Tabs.Screen name='Info' component={InfoScreen} />
            </Tabs.Navigator>
    );
}