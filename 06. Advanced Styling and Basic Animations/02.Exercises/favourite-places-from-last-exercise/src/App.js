import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { AuthProvider } from './contexts/auth/AuthProvider';
import { PlaceProvider } from './contexts/places/PlaceProvider';

export default function App() {
  return (
    <NavigationContainer>

      <StatusBar style="auto" />

      <AuthProvider>
        <PlaceProvider>
          <AppNavigator />
        </PlaceProvider>
      </AuthProvider>
      
    </NavigationContainer>
  );
}


