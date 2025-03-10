interface BotaoProps {
    texto: string;
    propsAltEstado: () => void;
    propsEstado: boolean;
}

export default function Botao({texto, propsAltEstado, propsEstado}: BotaoProps) {
    return (
        <button
            onClick={propsAltEstado}
            style={{
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                backgroundColor: propsEstado ? "green" : "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
            }}
            >
            {texto}
        </button>
    );
}