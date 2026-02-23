import { useState, useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import { COLORS } from "../theme";

function formatTime(date) {
    return new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function ChatScreen() {
    const { user, logout } = useAuth();
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const flatListRef = useRef(null);

    useEffect(() => {
        async function fetchMessages() {
            try {
                const response = await fetch(process.env.EXPO_PUBLIC_API_URL + "/messages");
                const result = await response.json();
                setMessages(result);
            } catch (error) {
                console.error("Failed to fetch messages:", error);
                // Handle fetch errors (e.g., show a message to the user)
            }
        }

        fetchMessages();
    }, []);

    async function handleSend() {
        const trimmed = text.trim();
        if (!trimmed) return;

        const newMessage = {
            //   id: Date.now().toString(),
            text: trimmed,
            sender: user.email,
            timestamp: new Date(),
        };

        try {
            const response = await fetch(process.env.EXPO_PUBLIC_API_URL + "/messages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMessage),
            });

            const result = await response.json();

            setMessages((prev) => [...prev, result]);
            setText("");
        } catch (error) {
            console.error("Failed to send message:", error);
            // Handle send errors (e.g., show a message to the user)
        }
    }

    function renderMessage({ item }) {
        return (
            <View style={styles.messageBubble}>
                <Text style={styles.senderText}>{item.sender}</Text>
                <Text style={styles.messageText}>{item.text}</Text>
                <Text style={styles.messageTime}>{formatTime(item.timestamp)}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            {/* ── Header ── */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View style={{ width: 60 }} />
                    <View style={styles.headerCenter}>
                        <Text style={styles.headerTitle}>Megdana</Text>
                        <Text style={styles.headerSubtitle}>Group Chat</Text>
                    </View>
                    <TouchableOpacity onPress={logout} style={styles.logoutButton}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.userEmail}>{user.email}</Text>
            </View>

            {/* ── Messages ── */}
            <FlatList
                ref={flatListRef}
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={renderMessage}
                contentContainerStyle={[
                    styles.messageList,
                    messages.length === 0 && styles.emptyList,
                ]}
                onContentSizeChange={() =>
                    flatListRef.current?.scrollToEnd({ animated: true })
                }
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyEmoji}>💬</Text>
                        <Text style={styles.emptyText}>No messages yet</Text>
                        <Text style={styles.emptySubtext}>
                            Start the conversation below
                        </Text>
                    </View>
                }
            />

            {/* ── Input ── */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={0}
            >
                <View style={styles.inputRow}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type a message…"
                        placeholderTextColor={COLORS.textSecondary}
                        value={text}
                        onChangeText={setText}
                        onSubmitEditing={handleSend}
                        returnKeyType="send"
                        multiline
                    />
                    <TouchableOpacity
                        style={[styles.sendButton, !text.trim() && styles.sendButtonDisabled]}
                        onPress={handleSend}
                        disabled={!text.trim()}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.sendButtonText}>▶</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

// ── Styles ───────────────────────────────────────────────────
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg,
    },

    /* Header */
    header: {
        paddingTop: 54,
        paddingBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: COLORS.surface,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        alignItems: "center",
    },
    headerTop: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    headerCenter: {
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: COLORS.primary,
        letterSpacing: 1,
    },
    headerSubtitle: {
        fontSize: 12,
        color: COLORS.textSecondary,
        marginTop: 2,
    },
    userEmail: {
        fontSize: 11,
        color: COLORS.textSecondary,
        marginTop: 6,
    },
    logoutButton: {
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    logoutText: {
        color: COLORS.primary,
        fontSize: 13,
        fontWeight: "600",
    },

    /* Message list */
    messageList: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    emptyList: {
        flexGrow: 1,
        justifyContent: "center",
    },
    emptyContainer: {
        alignItems: "center",
        opacity: 0.6,
    },
    emptyEmoji: {
        fontSize: 48,
        marginBottom: 12,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: "600",
        color: COLORS.text,
    },
    emptySubtext: {
        fontSize: 14,
        color: COLORS.textSecondary,
        marginTop: 4,
    },

    /* Bubble */
    messageBubble: {
        backgroundColor: COLORS.surface,
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 16,
        borderTopLeftRadius: 4,
        marginBottom: 10,
        maxWidth: "85%",
        alignSelf: "flex-start",
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    senderText: {
        fontSize: 12,
        fontWeight: "600",
        color: COLORS.primary,
        marginBottom: 3,
    },
    messageText: {
        fontSize: 15,
        color: COLORS.text,
        lineHeight: 21,
    },
    messageTime: {
        fontSize: 11,
        color: COLORS.textSecondary,
        marginTop: 6,
        alignSelf: "flex-end",
    },

    /* Input row */
    inputRow: {
        flexDirection: "row",
        alignItems: "flex-end",
        paddingHorizontal: 12,
        paddingVertical: 10,
        paddingBottom: Platform.OS === "ios" ? 28 : 12,
        backgroundColor: COLORS.surface,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
    },
    input: {
        flex: 1,
        minHeight: 42,
        maxHeight: 120,
        backgroundColor: COLORS.inputBg,
        borderRadius: 22,
        paddingHorizontal: 18,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 15,
        color: COLORS.text,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    sendButton: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 8,
    },
    sendButtonDisabled: {
        backgroundColor: COLORS.primaryDark,
        opacity: 0.4,
    },
    sendButtonText: {
        color: "#fff",
        fontSize: 18,
    },
});
