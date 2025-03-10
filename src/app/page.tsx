import EstadoPage from "./estado/EstadoBotao";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store"});

  if (!res.ok) {
    throw new Error("Erro ao buscar usuários");
  }

  const users: { id: number; name: string }[] = await res.json();

  return (
    <div>
      <h1>Página Inicial</h1>
      <EstadoPage/>
      <h2>Usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
