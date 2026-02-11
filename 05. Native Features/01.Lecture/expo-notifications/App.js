import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getPermissionsAsync, requestPermissionsAsync, SchedulableTriggerInputTypes, scheduleNotificationAsync, setNotificationHandler, addNotificationReceivedListener, addNotificationResponseReceivedListener } from 'expo-notifications';
import { useEffect, useState } from 'react';

setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function App() {
  const [permissions, setPermissions] = useState(null);

  useEffect(() => {
    getPermissionsAsync()
      .then(({ status }) => {
        setPermissions(status);
      });
  }, []);

  useEffect(() => {
    // This listener is fired whenever a notification is received while the app is foregrounded
    const subscription = addNotificationReceivedListener((notification) => {
      console.log('Notification received:', notification);
      // console.log('Notification data:', notification.request.content.data);
    });

    // This listener is fired whenever a user interacts with a notification (taps on it, etc.)
    const responseSubscription = addNotificationResponseReceivedListener((response) => {
      console.log('Notification response received:', response);
    });

    return () => {
      subscription.remove();
      responseSubscription.remove();
    };
  }, []);

  const scheduleNotificationHandler = async () => {
    try {
      await scheduleNotificationAsync({
        content: {
          title: 'Scheduled Notification',
          body: 'This is the body of the scheduled notification.',
          data: { customData: 'Some data' },
        },
        trigger: {
          seconds: 5,
          type: SchedulableTriggerInputTypes.TIME_INTERVAL,
        }
      });
    } catch (error) {
      console.error('Error scheduling notification:', error);
    }
  };

  if (!permissions) {
    return (
      <ActivityIndicator />
    );
  }

  if (permissions !== 'granted') {
    return (
      <View style={styles.container}>
        <Text>Notification permissions are not granted.</Text>
        <StatusBar style="auto" />
        <Button title="Request Permissions" onPress={async () => {
          const { status } = await requestPermissionsAsync({
            ios: {
              allowAlert: true,
              allowSound: true,
              allowBadge: true,
            },
          });
          setPermissions(status);
        }} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Notification permissions: {permissions}</Text>
      <TouchableOpacity onPress={scheduleNotificationHandler}><Text style={{ backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 5 }}>Schedule Notification</Text></TouchableOpacity>
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