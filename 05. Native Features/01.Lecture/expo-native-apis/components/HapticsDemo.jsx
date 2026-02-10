import { View, Text, Button } from "react-native";
import * as Haptics from 'expo-haptics';

export default function HapticsDemo() {

    const hapticsHandler = async () => {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        // await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        // await Haptics.selectionAsync();
    };

    return (
        <View>
            <Text>Haptics Component</Text>
            <Button title="Trigger Haptics" onPress={hapticsHandler} />
        </View>
    );
}