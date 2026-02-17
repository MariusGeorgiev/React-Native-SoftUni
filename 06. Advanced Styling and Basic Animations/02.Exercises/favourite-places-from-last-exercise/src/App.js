import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { AuthProvider } from './contexts/auth/AuthProvider';
import { PlaceProvider } from './contexts/places/PlaceProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>

        <StatusBar style="auto" />

        <AuthProvider>
          <PlaceProvider>
            <AppNavigator />
          </PlaceProvider>
        </AuthProvider>
        
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}


