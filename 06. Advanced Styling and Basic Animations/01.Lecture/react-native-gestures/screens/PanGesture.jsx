import { useState } from "react";

import { StyleSheet, View, Text, ScrollView } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Box from "../components/Box.jsx";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export default function PanGesture() {
    const positionX = useSharedValue(0);
    const positionY = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: positionX.value },
            { translateY: positionY.value },
        ],
    }));

    const panGesture = Gesture.Pan()
        .onStart(() => {
            console.log('pan start');
        })
        .onUpdate((event) => {
            // console.log('pan update: ', event);
            positionX.value = event.translationX;
            positionY.value = event.translationY;
        })
        .onEnd(() => {
            console.log('pan end');
        });

    return (
        <View style={styles.container}>
            <Text>Pan Gesture</Text>
            <GestureDetector gesture={panGesture}>
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
