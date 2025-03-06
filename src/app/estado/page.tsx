"use client"; // o NextJs usa por padrão Server Side e precisamos que o arquivo seja Client Side

import { useState } from "react"; // importa a função useState do react

export default function EstadoPage() { // Componente principal
    // Estado para controlar o texto do botão
    const [ativo, setAtivo] = useState(false);

    // Função que muda o estado ao clicar o botão
    const alternarEstado = () => { //  sempre chamada ao cliclar no botão
        setAtivo(!ativo); //muda o valor de *ativo* para o valor oposto
    };

    return ( //Código JSX da interface do usuário
        <div style={{ textAlign: "center", marginTop: "40%" }}> {/*Estilização do componente //DIV centralizando o conteúdo*/}
            <h1>Estado no Next.js</h1>
            <p>O botão está: {ativo ? "Ativado" : "Desativado"}</p> {/*Texto para exibir status atual do botão*/}
            <button //botão para ativar/desativar
                onClick={alternarEstado} //Ao clicar no botão chama a função alternarEstado
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: ativo ? "green" : "red", //se ativo for true, cor verde, senão vermelho
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                }}
            >
                {ativo ? "Desativar" : "Ativar"} {/*//altera o texto do botão*/}
            </button>
        </div>
    );
}