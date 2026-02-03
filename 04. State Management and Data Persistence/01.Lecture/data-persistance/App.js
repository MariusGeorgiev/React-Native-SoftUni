import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    loadHandler();
  }, []);

  const saveHandler = async () => {
    try {
      await AsyncStorage.setItem('text', text);

      setText('');
    } catch (err) {
      alert('Cannot save to storage...');
    }
  }

  const loadHandler = async () => {
    try {
      const loadedText = await AsyncStorage.getItem('text');

      setText(loadedText);
    } catch (err) {
      alert('Cannot read from storage');
    }
  }

  const clearHandler = async () => {
    try {
      // await AsyncStorage.clear();
      await AsyncStorage.removeItem('text');

      setText('');
    } catch (err) {
      alert('Canot clear the storage');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Data Persistance</Text>

      <TextInput
        value={text}
        onChangeText={setText}
        placeholder='Text to save...'
      />

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button title="Save" onPress={saveHandler} />
        <Button title="Load" onPress={loadHandler} />
        <Button title="Clear" onPress={clearHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
