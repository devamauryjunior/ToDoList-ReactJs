import React, { useState } from 'react'
import './../../styles/App.css'
import { BsArrowRight } from "react-icons/bs";
import Tarefa from '../Tarefa';

function App() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

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
          tarefas.map(tarefa => <Tarefa key={tarefa} tarefa={tarefa} />)
        }
      </div>
    </div>
  )
}

export default App
