import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CameraDemo from './screens/CameraDemo.jsx';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const Drawer = createDrawerNavigator();

  return (

    <NavigationContainer>
      <StatusBar style="auto" />

      <Drawer.Navigator>
        <Drawer.Screen name="Camera" component={CameraDemo} />
        
      </Drawer.Navigator>

    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
