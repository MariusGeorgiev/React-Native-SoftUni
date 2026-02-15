import { StyleSheet, View, Text, ScrollView } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Box from "../components/Box.jsx";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export default function PitchGesture() {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { scale: scale.value },
        ],
    }));
    
    const pitchGesture = Gesture.Pinch()
        .onStart(() => {
            console.log('Pitch started');
        })
        .onUpdate((event) => {
            // console.log('Pitch updated: ', event);
            scale.value = event.scale;
        })
        .onEnd(() => {
            console.log('Pitch ended');
        });

    return (
        <View style={styles.container}>
            <Text>Pitch Gesture</Text>
            <GestureDetector gesture={pitchGesture}>
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
        justifyContent: 'space-around',
        padding: 20,
    },
});

