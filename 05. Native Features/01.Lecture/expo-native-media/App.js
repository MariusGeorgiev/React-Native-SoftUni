import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CameraDemo from './screens/CameraDemo.jsx';
import ImagePickerCameraDemo from './screens/ImagePickerCameraDemo.jsx';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ImagePicker from './screens/ImagePicker.jsx';
import DocumentPicker from './screens/DocumentPicker.jsx';

export default function App() {

  const Drawer = createDrawerNavigator();

  return (

    <NavigationContainer>
      <StatusBar style="auto" />

      <Drawer.Navigator>
        <Drawer.Screen name="Camera" component={CameraDemo} />
        <Drawer.Screen name="ImagePickerCamera" component={ImagePickerCameraDemo} options={{ title: 'ImagePicker Camera' }} />
        <Drawer.Screen name="ImagePicker" component={ImagePicker} options={{ title: 'Image Picker' }} />
        <Drawer.Screen name="DocumentPicker" component={DocumentPicker} options={{ title: 'Document Picker' }} />

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
