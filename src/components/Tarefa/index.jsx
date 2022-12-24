import React from "react";
import './style.css'

function Tarefa(props) {
    const { tarefa } = props;
    return (
        <div className="Tarefas">
            <input type="radio" name="radioTarefa" id="radioTarefa" className="radioTarefa"/>
            <span className="spanTarefa">{tarefa}</span>
        </div>
    )
}

export default Tarefa;