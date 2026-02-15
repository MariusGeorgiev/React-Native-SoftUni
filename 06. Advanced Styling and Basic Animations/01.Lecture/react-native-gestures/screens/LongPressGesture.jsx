import { StyleSheet, View, Text, ScrollView } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Box from "../components/Box.jsx";

export default function LongPress() {
    const longPressGesture = Gesture.LongPress()
        .minDuration(250)
        .onStart(() => {
            console.log('long press');
        })
        .onEnd(() => {
            console.log('long press end');
        });

    return (
        <View style={styles.container}>
            <Text>Long Press</Text>
            <GestureDetector gesture={longPressGesture}>
                <Box style />
            </GestureDetector>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 40,
        alignItems: 'center',
        padding: 20,
    },
});
