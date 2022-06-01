import React, {useState} from 'react';

const Boton = ({activity,setActivity,titulo,hora,setHora,setTitulo}) => {


    
    const handleClick = (titulo,hora) => {
        setActivity([...activity,`${titulo} ${hora}`])
        setTitulo("");
        setHora("")

    }

    
    return (
        <button onClick={() =>{
            handleClick(titulo,hora)
        }}>Sumbmit</button>

    )
}

export default Boton