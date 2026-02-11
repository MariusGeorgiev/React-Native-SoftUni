import { getCurrentPositionAsync, LocationAccuracy, useForegroundPermissions, reverseGeocodeAsync, geocodeAsync } from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [status, requestPermission] = useForegroundPermissions();
  const [pending, setPending] = useState(false);
  const [address, setAddress] = useState(null);
  const [addressAccuracy, setAddressAccuracy] = useState(null);
  const [altitude, setAltitude] = useState(null);
  const [altitudeAccuracy, setAltitudeAccuracy] = useState(null);
  const [timestampAt, setTimestampAt] = useState(null);

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
      setAddress(null);
      setAddressAccuracy(null);
      setAltitude(null);
      setAltitudeAccuracy(null);
      setTimestampAt(null);
      

      const location = await getCurrentPositionAsync({ accuracy: LocationAccuracy.BestForNavigation });
      console.log(location);

      const address = await reverseGeocodeAsync(location.coords);
      // const address = await geocodeAsync("bul. Tsarigradsko shose 66, Sofia");
      console.log(address);

      if (address.length > 0) {
        const a = address[0];

        setAddress(
          `${a.street || ''} ${a.streetNumber || ''}, ${a.postalCode} ${a.city}, ${a.country}`
        );

        setAddressAccuracy(
          `+/- ${(location.coords.accuracy).toFixed(2)} m.`
        );

        setAltitude(
          `${(location.coords.altitude).toFixed(1)} m.`
        );

        setAltitudeAccuracy(
          location.coords.altitudeAccuracy != null
            ? `+/- ${location.coords.altitudeAccuracy.toFixed(1)} m.`
            : 'Altitude accuracy unavailable'
        )

        setTimestampAt(
          new Date(location.timestamp)
        )

      };

  

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
          ? (<ActivityIndicator />)
          : (<Text style={{ backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 5 }}>Get Current Location</Text>)
          }
      </TouchableOpacity>
          {address && (
            <View>
              <Text style={{ color: 'black', marginTop: 15, textAlign: 'center', fontSize: 16}}>At: {timestampAt.toLocaleString()}</Text>
              <Text style={{ color: 'green', marginTop: 15, textAlign: 'center', fontSize: 16}}>{altitudeAccuracy}</Text>
              <Text style={{ color: 'green', textAlign: 'center', fontSize: 16}}>Altitude: {altitude}</Text>
              <Text style={{ marginTop: 15, textAlign: 'center', fontSize: 16}}>📍</Text>
              <Text style={{ color: 'red', marginTop: 3, textAlign: 'center', fontSize: 16}}>{addressAccuracy}</Text>
              <Text style={{ color: 'red', marginTop: 3, textAlign: 'center', fontSize: 16}}>
                {address}
              </Text>
            </View>
          )}
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