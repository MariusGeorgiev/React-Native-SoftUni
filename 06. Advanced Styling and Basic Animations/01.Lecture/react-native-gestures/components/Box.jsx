import { StyleSheet, View } from "react-native";
import Animated from 'react-native-reanimated';

export default function Box({
    style = {},
}) {
    return (
        <Animated.View style={[styles.box, style]} collapsable={false} testID="box"  />
    );
}

const styles = StyleSheet.create({
    box: {
        height: 120,
        width: 120,
        backgroundColor: '#6875fd',
        borderRadius: 20,
        marginBottom: 30,
    },
});
