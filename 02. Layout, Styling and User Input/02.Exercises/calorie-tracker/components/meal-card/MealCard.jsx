import { Text, View, StyleSheet } from 'react-native';

export default function MealCard({
    name,
    calories
}) {

    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{calories} cal</Text>
        </View>
        
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});