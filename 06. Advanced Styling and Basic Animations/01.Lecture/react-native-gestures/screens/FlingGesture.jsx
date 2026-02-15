import { StyleSheet, View, Text, ScrollView } from "react-native";
import { GestureDetector, Gesture,Directions } from "react-native-gesture-handler";
import Box from "../components/Box.jsx";

export default function FlingGesture() {
    const flingGesture = Gesture.Fling()
        .direction(Directions.RIGHT)
        .onStart(() => {
            console.log('fling right');
        });

    return (
        <View style={styles.container}>
            <Text>Fling Gesture</Text>
            <GestureDetector gesture={flingGesture}>
                <Box />
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
