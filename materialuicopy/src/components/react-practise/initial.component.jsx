import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom'


const Initial = ({history}) => {
    const [user, setUser] = useState([])
    const [ya, setYa] = useState(false)

    const fetchRandomData = () => {
        return axios.get('https://randomuser.me/api/')
            .then(({data}) => { 
                return data.results
            })
            .catch(error => {
                console.log(error)
            })
    }

    const multipleFetch = () => {
        if (!ya) {
            for (let i = 0; i < 10 ;i++) {
                fetchRandomData()
                .then(data => {
                    setUser(user => [...user,data[0]])
                })
            }    
        }
        

    }

    useEffect (()=>{
       multipleFetch()
       
    },[multipleFetch])

    console.log(ya)
    return(
        <div>
          {  user.map((user,idx )=> {
                return (
                    <li key={idx} >
                        <Link to={{pathname: `/${idx}`, state:{user}}}>
                            {user.email}
                        </Link>
                    </li>
                )
            })}
        </div>

    )
}

export default withRouter(Initial)