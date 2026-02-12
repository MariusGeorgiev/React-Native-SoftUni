import { api } from "./api.js";

export async function login(email, password) {
    const result = await api.post('/login', { email, password });

    return result.data;
}

