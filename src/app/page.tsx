"use client";
import { useEffect, useState } from "react";
import EstadoPage from "./estado/EstadoBotao";

interface Usuario {
  id: number;
  nome: string;
}

export default function Home() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    fetch("/api/usuarios")
      .then((res) => res.json())
      .then((data: Usuario[]) => setUsuarios(data))
      .catch((error) => console.error("Erro ao buscar usuários:", error));
  }, []); 

  return (
    <div>
      <h1>Página Inicial</h1>
      <EstadoPage/>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map((user) => (
          <li key={user.id}>{user.nome}</li>
        ))}
      </ul>
    </div>
  );
}
