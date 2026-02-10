import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Share, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Native Features</Text>
      <Button title="Share" onPress={() => Share.share({ url: "https://example.com" })} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
