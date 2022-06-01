import React,{useState, useEffect} from "react";
import {v1} from 'uuid'
import NewSongForm from "./NewSongForm.component";

const SongList = () => {
    const [songs,setSongs] = useState([
        { title: 'Miénteme',id:1 },
        { title: 'La noche sin ti',id:2 },
        { title: 'Universon Paralelo',id:3 },
    ])

    const addSong = (title) =>{
        //setSongs([...songs, {title: title, id:v1()}])
        setSongs([...songs, {title, id:v1()}])
    }

    useEffect(()=>{
        console.log('useEffect run',songs)
    })
    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song=>{
                    return(
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={addSong}>Add Song</button>
        </div>
     );
}
 
export default SongList;