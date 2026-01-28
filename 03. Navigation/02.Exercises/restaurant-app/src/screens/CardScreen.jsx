import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CardScreen() {

    return (
      <ScrollView>
            <View style={styles.header}>
               <Text>Card screen</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {

    }
});