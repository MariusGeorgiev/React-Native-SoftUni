import { View, Text, StyleSheet, Button } from "react-native";
import { useTheme } from "../contexts/theme/useTheme.js";

export default function HomeScreen({ navigation }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <View style={[{ backgroundColor: theme.colors.background }, styles.container]}>
            <Text style={{ color: theme.colors.text, fontFamily: theme.fonts }}>Home Screen</Text>
            <Text style={{ color: theme.colors.text, fontFamily: theme.fonts }}>Welcome to the themed app!</Text>
            <Button title="Toggle Theme" onPress={toggleTheme} color={theme.colors.primary} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});