import { StyleSheet, View, Text } from "react-native";
import { useNetInfo } from "../hooks/useNetinfo.js";

export default function OfflineBanner({
    text = "You are offline",
    style = {},
}) {
    const { isOffline } = useNetInfo();

    if (!isOffline) return null;

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#B00020",
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 13,
        fontWeight: "600",
    },
});
