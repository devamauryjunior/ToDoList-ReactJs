import React from "react";

function TarefasConcluidas(props) {
    const { taarefaConcluida } = props;
    return (
        <div className="TarefasConcluidas">
            <span>{taarefaConcluida}</span>
        </div>
    )
}

export default TarefasConcluidas;