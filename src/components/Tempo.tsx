import { useState, useEffect } from "react";

export default function Tempo() {
    const [tempo, setTempo] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTempo((t) => t + 1);
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <p>Tempo: {tempo} segundos</p>
    );
}