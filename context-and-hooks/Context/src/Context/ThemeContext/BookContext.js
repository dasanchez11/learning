import React, {createContext,useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books,setBooks] = useState([
        { title: 'Miénteme',id:1 },
        { title: 'La noche sin ti',id:2 },
        { title: 'Universo Paralelo',id:3 },
        { title: 'Te Mentiría',id:4 }

    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
