import React, { useState, useEffect } from 'react';
import './App.css';
import Objeto from './components/list.component';
import Boton from './components/boton.component';

function App() {
  const [activity, setActivity] = useState([])
  const [titulo, setTitulo] = useState("")
  const [hora,setHora] = useState("")



  const onInputChange = (e) => {
    e.preventDefault();
    if (e.target.name === "titulo") {
      setTitulo(e.target.value)
    } else {
      setHora(e.target.value)
    }

  };

  console.log(titulo)
  
  return (
    <div className="App">
      Aquí empezando
      
      {activity.map((item,idx) => {
        return (
          <Objeto key={idx} item={item}/>
        )
        
      })}

      <input onInput={onInputChange} value={titulo} type="text" name="titulo"></input>
      <input onInput={onInputChange} value={hora} type="text" name="hora"/>

      <Boton activity={activity} setActivity={setActivity} titulo={titulo} hora={hora} setTitulo={setTitulo} setHora={setHora} />
      
      
    </div>
  );
}

export default App;
