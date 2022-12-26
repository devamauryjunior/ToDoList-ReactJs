import React from "react";
import './style.css';

function TarefasConcluidas(props) {
    const { tarefaConcluida } = props;
    return (
        <div className="TarefasConcluidas">
            <span className="spanTarefasConcluidas">{tarefaConcluida}</span>
        </div>
    )
}

export default TarefasConcluidas;