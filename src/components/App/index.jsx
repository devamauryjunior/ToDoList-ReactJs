import React, { useEffect, useState } from 'react'
import './../../styles/App.css'
import { BsArrowRight } from "react-icons/bs";
import Tarefa from '../Tarefa';
import TarefasConcluidas from '../TarefasConcluidas';

function App() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  
  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);

  const handleTarefasConcluidas = (tarefa) => {
    setTarefasConcluidas(prevState => [...prevState, tarefa]);
    const filtroTarefaConcluidaERetirarDoArrayDeTarefa = tarefas.filter(tarefasAdicionadas => {
      return tarefasAdicionadas !== tarefa;
    });
    setTarefas(filtroTarefaConcluidaERetirarDoArrayDeTarefa);
  }

  return (
    <div className="App">
      <form action="#" className='appForm' onSubmit={event => {
        event.preventDefault();
        if(!tarefas.includes(novaTarefa)) {
          setTarefas(prevState => [...prevState, novaTarefa]);
          return;
        }
        window.alert("Tarefa adicionada ou já realizada :)");
      }}>
        <input 
        type="text" 
        className='appFormInput'
        onChange={event => setNovaTarefa(event.target.value)}
        onClick={event => event.target.value = ""}
        />
        <button 
        className='appFormButton'
        >
          <BsArrowRight />
        </button>
      </form>
      <div className="appTarefas">
        {
          tarefas.map(tarefa => <Tarefa key={tarefa} tarefa={tarefa} handleTarefaConcluida={() => handleTarefasConcluidas(tarefa)}/>)
        }
      </div>
      <div className="appTarefasConcluidas">
        <h1 className='appTarefasConcluidas-title'>Completed</h1>
        {
          tarefasConcluidas.map(concluidas => <TarefasConcluidas key={concluidas} tarefaConcluida={concluidas} />)
        }
      </div>
    </div>
  )
}

export default App
