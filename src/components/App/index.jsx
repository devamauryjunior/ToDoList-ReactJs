import React, { useState } from 'react'
import './../../styles/App.css'
import { BsArrowRight } from "react-icons/bs";
import Tarefa from '../Tarefa';
import TarefasConcluidas from '../TarefasConcluidas';

function App() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  
  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);

  const handleTarefasConcluidas = (tarefa) => setTarefasConcluidas(prevState => [...prevState, tarefa]);

  return (
    <div className="App">
      <form action="#" className='appForm' onSubmit={event => {
        setTarefas(prevState => [...prevState, novaTarefa]);
        event.preventDefault();
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
          tarefas.map((tarefa, idx) => <Tarefa key={idx} tarefa={tarefa} handleTarefaConcluida={handleTarefasConcluidas}/>)
        }
      </div>
      <div className="appTarefasConcluidas">
        <h1 className='appTarefasConcluidas-title'>Completed</h1>
        {
          tarefasConcluidas.map((concluidas, idx) => <TarefasConcluidas key={idx} taarefaConcluida={concluidas} />)
        }
      </div>
    </div>
  )
}

export default App
