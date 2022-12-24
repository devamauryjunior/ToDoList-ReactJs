import React from "react";
import './style.css';

function TarefasConcluidas(props) {
    const { taarefaConcluida } = props;
    return (
        <div className="TarefasConcluidas">
            <span className="spanTarefasConcluidas">{taarefaConcluida}</span>
        </div>
    )
}

export default TarefasConcluidas;