import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CategoryScreen({ route }) {

    return (
      <ScrollView>
            <View style={styles.container}>
               <Text>Category screen</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

 
});