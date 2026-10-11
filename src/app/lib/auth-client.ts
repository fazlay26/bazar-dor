import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
    fetchOptions: {
        credentials: 'include', // কুকি সবসময় পাঠাবে
        headers: {
            'Content-Type': 'application/json',
        },
    },
});

export const { 
    useSession, 
    signIn, 
    signUp, 
    signOut 
} = authClient;