import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (

    <SafeAreaProvider> 
      <SafeAreaView style={styles.container}>
        

          {/* Header */}
          <View style={[styles.section, styles.header]}>
            <Text style={styles.heading}>Calorie Tracker</Text>
          </View>

          {/* Overview  */}
          <View style={styles.section}>
            <Text>Calorie Overview</Text>
          </View>

          {/* Meal Section */}
          <View style={styles.section}>
            <Text>List of meals</Text>
          </View>

          {/* App Bar */}
          <View >
            <Text>App Bar</Text>
          </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider> 
  );
}

const colors = {
  white: '#fff',
  background: '#F9FAFB',
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  section: {
    boxShadow: [{offsetX: 2, offsetY: 3, blurRadius: 4, colors: 'rgba(200, 200, 200, 0.53)' }],
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor:'#edf2f7',
    borderRadius: 15,
    width: '90%',
    padding: 10,

  },
  header: {

  },
  
  heading: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  }
});
