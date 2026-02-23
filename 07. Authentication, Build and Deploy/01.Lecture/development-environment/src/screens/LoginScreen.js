import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import { COLORS } from "../theme";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  function handleLogin() {
    if (!email.trim() || !password.trim()) return;
    login(email.trim(), password);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.inner}>
        <Text style={styles.logo}>Megdana</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={COLORS.textSecondary}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={COLORS.textSecondary}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={[
            styles.button,
            (!email.trim() || !password.trim()) && styles.buttonDisabled,
          ]}
          onPress={handleLogin}
          disabled={!email.trim() || !password.trim()}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.linkContainer}
        >
          <Text style={styles.linkText}>
            Don't have an account?{" "}
            <Text style={styles.linkHighlight}>Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  logo: {
    fontSize: 36,
    fontWeight: "700",
    color: COLORS.primary,
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginBottom: 36,
  },
  input: {
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 14,
    fontSize: 15,
    color: COLORS.text,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 14,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 8,
  },
  buttonDisabled: {
    backgroundColor: COLORS.primaryDark,
    opacity: 0.4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  linkContainer: {
    marginTop: 24,
    alignItems: "center",
  },
  linkText: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  linkHighlight: {
    color: COLORS.primary,
    fontWeight: "600",
  },
});
