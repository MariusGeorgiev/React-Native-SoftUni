import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Delete } from 'lucide-react-native'

export default function MealCard({
    id,
    name,
    calories,
    onDelete
}) {

    return (
        <View style={styles.container}>
            <Text>{name}</Text>

            <View style={{flexDirection: "row", gap: 10}}>
                <Text>{calories} cal</Text>
                <TouchableHighlight onPress={() => onDelete(id)}>
                    <Delete />
                </TouchableHighlight>
            </View>

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