import {Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function InfoScreen() {

    return (
        <View >
            <Text>Info Screen</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    header: {
        backgroundColor: '#007AFF',
        padding: 24,
        alignItems: 'center',
    },
    restaurantName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    tagline: {
        fontSize: 16,
        color: '#fff',
        opacity: 0.9,
    },
    section: {
        backgroundColor: '#fff',
        marginTop: 16,
        padding: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 12,
    },
    aboutText: {
        fontSize: 15,
        color: '#666',
        lineHeight: 22,
        marginBottom: 12,
    },
    infoRow: {
        flexDirection: 'row',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    iconContainer: {
        width: 40,
        alignItems: 'center',
        paddingTop: 2,
    },
    infoContent: {
        flex: 1,
    },
    infoLabel: {
        fontSize: 13,
        color: '#999',
        marginBottom: 2,
    },
    infoValue: {
        fontSize: 15,
        color: '#333',
    },
    infoLink: {
        fontSize: 13,
        color: '#007AFF',
        marginTop: 4,
    },
    hoursContainer: {
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        padding: 12,
    },
    hoursRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    dayText: {
        fontSize: 15,
        color: '#333',
    },
    timeText: {
        fontSize: 15,
        color: '#666',
    },
    bottomPadding: {
        height: 24,
    },
});
