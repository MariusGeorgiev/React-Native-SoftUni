import {  Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.body}>
      
      <View><Text>Todo list</Text></View>
      
      <View><Text>Creation</Text></View>
      
      <View><Text>View</Text></View>

    </View>
  );
}

const styles = {
  body: {
    padding:40,
    alignItems: 'center',
  }
}
