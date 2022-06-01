import React from 'react';

import {withRouter} from 'react-router-dom'

const Card = ({location}) =>{
    const {user} = location.state
    console.log(location)
    
   return (
       <div>
           <div>
               <img alt={user.name.first} src={user.picture.thumbnail}>

               </img>
           </div>
           <div>
               {`${user.name.title} ${user.name.first} ${user.name.last}`}
           </div>
       </div>
   )
}

export default withRouter(Card)