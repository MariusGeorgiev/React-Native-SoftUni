import { Text, View, Button } from "react-native";

export default function TodoItem({
    id,
    text,
    isCompleted,
    onDone,
}) {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{fontSize: 20, }}>{text}</Text>

            <View style={{flexDirection: 'row', gap: 5}}>
                <Button title="Done" onPress={() => onDone(id)}/>
                <Button title="Delete" />
            </View>
            
        </View>
    );
}