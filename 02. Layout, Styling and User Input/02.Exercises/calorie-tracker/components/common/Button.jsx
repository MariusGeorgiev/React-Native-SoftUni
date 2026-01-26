import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({
    title,
    onPress,
    type = 'primary',
    style = {}
}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.button, styles[type], style]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 5,
        fontWeight: 'bold',
        paddingVertical: 5,
    },
    primary: {
        backgroundColor: 'black',
        color: 'white'
    },
    secondary: {
        backgroundColor: '#b6b6b6',
    },
})