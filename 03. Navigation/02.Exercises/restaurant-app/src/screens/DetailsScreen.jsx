import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen({ route }) {

  const { itemId } = route.params;

    return (
      <ScrollView>
            <View style={styles.header}>
               <Text>Details {itemId}</Text>
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