import { createContext, ReactNode } from "react";

const AuthContext = createContext(null);

type AuthProviderProps = {
    children: ReactNode;
}

type User = {
    id: string,
    name: string,
    login: string,
    avatar_url: string
}

type AuthContextData = {
    user: User
}

export function AuthProvider(props: AuthProviderProps) {
    return (
        <AuthContext.Provider value={null}>
            {props.children}
        </AuthContext.Provider>
    );
}