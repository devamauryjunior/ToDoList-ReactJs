import React, { useEffect, useState } from "react";
import './style.css'

function Tarefa(props) {
    const { tarefa } = props;

    const handleRadioInput = (event) => {
        event.target.parentElement.style.display = "none";
        props.handleTarefaConcluida(event.target.nextElementSibling.textContent);
    }

    return (
        <div className="Tarefas">
            <input type="radio" name="radioTarefa" id="radioTarefa" className="radioTarefa" onClick={handleRadioInput}/>
            <span className="spanTarefa">{tarefa}</span>
        </div>
    )
}

export default Tarefa;