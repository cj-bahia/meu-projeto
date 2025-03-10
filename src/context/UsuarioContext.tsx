"use client";

import { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

interface UsuarioContextType {
    nome: string;
    setNome: Dispatch<SetStateAction<string>>;
}

const UsuarioContext = createContext<UsuarioContextType | null>(null);

export function UsuarioProvider({ children }: {children: React.ReactNode}) {
    const [nome, setNome] = useState("Desconhecido");

    return (
        <UsuarioContext.Provider value={{ nome, setNome }}>
            {children}
        </UsuarioContext.Provider>
    );
}

export function useUsuario() {
    const context = useContext(UsuarioContext);
    if(!context) {
        throw new Error("useUsuario deve ser usado dentro de um UsuarioProvider");
    }
    return context;
}