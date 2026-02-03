import { View, Text } from "react-native"

export default function CharacterItem({
    name,
}) {
    return (
        <View style={{ padding: 30, backgroundColor: '#f0f0f0', marginBottom: 10, borderRadius: 5, width: 300 }}>
            <Text>{name}</Text>
        </View>
    );
}
