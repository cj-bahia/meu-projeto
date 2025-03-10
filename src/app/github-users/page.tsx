"use client";

import { useEffect, useState } from "react";

interface GitHubUser {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
}

export default function GitHubUsers() {
    const [users, setUsers] = useState<GitHubUser[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const res = await fetch("https://api.github.com/users");
                const data: GitHubUser[] = await res.json();
                setUsers(data);
            }catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4"> Usuários do GitHub</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {users.map((user) => (
                        <div key={user.id} className="p-4 border rounded-lg shadow-lg">
                            <img src = {user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mx-auto"/>
                            <h2 className="text-center font-semibold mt-2">{user.login}</h2>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-center block mt-2">Ver Perfil</a>
                        </div>
                    ))}    
                </div>
            )}
        </div>
    );
} 