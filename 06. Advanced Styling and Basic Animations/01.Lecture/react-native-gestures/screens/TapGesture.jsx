import { StyleSheet, View, Text, ScrollView } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Box from "../components/Box.jsx";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export default function TapGesture() {
    const color = useSharedValue('#91ffb4');

    const animatedStyle = useAnimatedStyle(() => ({
        backgroundColor: color.value,
    }));

    const tapGesture = Gesture.Tap()
        .maxDuration(250)
        .numberOfTaps(1)
        .onStart(() => {
            console.log('single tap');
            color.value = color.value === '#91ffb4' ? '#ff91a4' : '#91ffb4';
        });

    const doubleTapGesture = Gesture.Tap()
        .maxDuration(250)
        .numberOfTaps(2)
        .onStart(() => {
            console.log('double tap');
            color.value = '#ffea00';
        });

    // const composedGesture = Gesture.Race(tapGesture, doubleTapGesture);
    // const composedGesture = Gesture.Simultaneous(tapGesture, doubleTapGesture);
    const composedGesture = Gesture.Exclusive(doubleTapGesture, tapGesture);
    
    return (
        <View style={styles.container}>
            <Text>Tap Gesture Screen</Text>
            <GestureDetector gesture={composedGesture}>
                <Box style={animatedStyle} />
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
