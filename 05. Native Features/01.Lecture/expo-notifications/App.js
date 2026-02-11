import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getPermissionsAsync, requestPermissionsAsync, SchedulableTriggerInputTypes, scheduleNotificationAsync, setNotificationHandler, addNotificationReceivedListener, addNotificationResponseReceivedListener } from 'expo-notifications';
import { useEffect, useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
