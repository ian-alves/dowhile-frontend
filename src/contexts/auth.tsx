import { createContext, ReactNode } from "react";

const AuthContext = createContext(null);

type AuthProviderProps = {
    children: ReactNode;
}

export function AuthProvider(props: AuthProviderProps) {
    return (
        <AuthContext.Provider value={null}>
            {props.children}
        </AuthContext.Provider>
    );
}