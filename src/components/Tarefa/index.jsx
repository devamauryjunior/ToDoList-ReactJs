import React, { useEffect, useState } from "react";
import './style.css'

function Tarefa(props) {
    const { tarefa, handleTarefaConcluida } = props;

    const handleRadioInput = (event) => {
        event.target.parentElement.style.display = "none";
        handleTarefaConcluida(event.target.nextElementSibling.textContent);
    }

    return (
        <div className="Tarefas">
            <input type="radio" name="radioTarefa" id="radioTarefa" className="radioTarefa" onClick={handleRadioInput}/>
            <span className="spanTarefa">{tarefa[0].toUpperCase() + tarefa.substr(1, tarefa.length - 1)}</span>
        </div>
    )
}

export default Tarefa;