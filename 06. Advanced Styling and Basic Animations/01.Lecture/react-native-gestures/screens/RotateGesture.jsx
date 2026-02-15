import { StyleSheet, View, Text, ScrollView } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Box from "../components/Box.jsx";

export default function RotateGesture() {
    const rotateGesture = Gesture.Rotation()
        .onStart(() => {
            console.log('Rotation started');
        })
        .onUpdate((event) => {
            console.log('Rotation updated: ', event);
        })
        .onEnd(() => {
            console.log('Rotation ended');
        });

    return (
        <View style={styles.container}>
            <Text>Rotate Gesture</Text>
            <GestureDetector gesture={rotateGesture}>
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

