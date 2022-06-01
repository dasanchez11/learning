import React,{useState} from "react";


const NewSongForm = ({addSong}) => {
    const [title,setTitle] = useState("")
    const handleChange = (e) =>{
        e.preventDefault()
        setTitle(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        addSong(title)
        setTitle('')
    }
    return (  
        <form onSubmit={handleSubmit}>
            <label>Song name:</label>
            <input type="text" value={title} required onChange={handleChange}></input>
            <input type='submit' value="add song"></input>
        </form>
    );
}
 
export default NewSongForm;