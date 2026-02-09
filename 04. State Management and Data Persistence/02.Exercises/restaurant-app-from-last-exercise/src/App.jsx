import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import RootNavigator from './navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native'
import CartProvider from './contexts/cart/CartProvider';

export default function App() {
  return (
        <NavigationContainer>
              <StatusBar style="auto" />
              {/* <SafeAreaView> */}
              <CartProvider>
                <RootNavigator />
              </CartProvider>
              {/* </SafeAreaView> */}
        </NavigationContainer> 
  );
}


