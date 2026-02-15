import { StatusBar } from 'expo-status-bar';
import ThemeProvider from './contexts/theme/ThemeProvider.jsx';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './navigation/RootNavigator.jsx';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StatusBar style="auto" />
        <RootNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
