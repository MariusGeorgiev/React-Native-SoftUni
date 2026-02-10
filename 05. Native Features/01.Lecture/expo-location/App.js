import { getCurrentPositionAsync, LocationAccuracy, useForegroundPermissions, reverseGeocodeAsync, geocodeAsync } from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [status, requestPermission] = useForegroundPermissions();
  const [pending, setPending] = useState(false);

  if (!status) {
    return <ActivityIndicator />;
  }

  if (!status.granted) {
    return (
      <View style={styles.container}>
        <Text>Location permission is required to use this app.</Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  const getLocationHandler = async () => {
    try {
      setPending(true);
      const location = await getCurrentPositionAsync({ accuracy: LocationAccuracy.BestForNavigation });
      console.log(location);
      // const address = await reverseGeocodeAsync(location.coords);
      const address = await geocodeAsync("bul. Tsarigradsko shose 66, Sofia");
      console.log(address);
    } catch (error) {
      console.log('Error getting location:', error);
    } finally {
      setPending(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={getLocationHandler}>
        {pending
          ? <ActivityIndicator />
          : <Text style={{ backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 5 }}>Get Current Location</Text>}
      </TouchableOpacity>
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