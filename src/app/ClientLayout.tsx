"use client";

import { UsuarioProvider } from "@/context/UsuarioContext";

export default function ClientLayout ({ children }: { children: React.ReactNode }) {
    return (
        <UsuarioProvider>
            {children}
        </UsuarioProvider>
    );
}