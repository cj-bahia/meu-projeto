"use client"; // o NextJs usa por padrão Server Side e precisamos que o arquivo seja Client Side

import Botao from "@/components/Botao";
import Tempo from "@/components/Tempo";

import { useState } from "react"; // importa a função useState do react

export default function EstadoPage() { // Componente principal
    // Estado para controlar o texto do botão
    const [ativo, setAtivo] = useState(false);
    const [contAtivo, setContAtivo] = useState(0)
    const [contDesativo, setContDesativo] = useState(0)

    // Função que muda o estado ao clicar o botão
    const alternarEstado = () => { //  sempre chamada ao cliclar no botão
        setAtivo(!ativo); //muda o valor de *ativo* para o valor oposto
        if (!ativo) {
            setContAtivo(contAtivo + 1);
        } else {
            setContDesativo(contDesativo + 1);
        }
    };

    return ( //Código JSX da interface do usuário
        <div style={{ textAlign: "center", marginTop: "20%" }}> {/*Estilização do componente //DIV centralizando o conteúdo*/}
            <h1>Estado no Next.js</h1>
            <p>O botão está: {ativo ? "Ativado" : "Desativado"}</p> {/*Texto para exibir status atual do botão*/}
            <Botao texto = {ativo ? "Desativar" : "Ativar"} propsAltEstado = {alternarEstado} propsEstado = {ativo} /> {/*Botão importado do componente*/}
            <p>🔹Botão ativado {contAtivo} vezes</p>
            <p>🔸Botão desativado {contDesativo} vezes</p>
            <Tempo />
        </div>
    );
}