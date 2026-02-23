import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    async function login(email, password) {
        // TODO: implement real login handler
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log("Login successful:", result.user);
            
            setUser(result.user);
        } catch (error) {
            console.error("Login failed:", error);
            // Handle login errors (e.g., show a message to the user)
        }
    }

    async function register(email, password) {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Registration successful:", result.user);
            setUser(result.user);
        } catch (error) {
            console.error("Registration failed:", error);
            // Handle registration errors (e.g., show a message to the user)
        }
    }

    function logout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
    return ctx;
}
