import React, { useContext} from "react";
import { BookContext } from "../../Context/ThemeContext/BookContext";
import { ThemeContext } from "../../Context/ThemeContext/ThemeContext";

// class Booklist extends Component {
//     static contextType = ThemeContext
//     render() { 
//         const {isLightTheme, light, dark} = this.context;
//         const theme = isLightTheme ? light : dark;

//         return (
//             <div className="book-list" style={{color: theme.syntax, background:theme.bg}}>
//                 <ul>
//                     <li style={{background: theme.ui}}>The way of kings</li>
//                     <li style={{background: theme.ui}}>The wave</li>
//                     <li style={{background: theme.ui}}>Love in the cholera time</li>
//                 </ul>

//             </div>
//         );
//     }
// }
 
// export default Booklist;

// CONTEXT IN FUNCTIONAL COMPONENTS
const Booklist = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const {books} = useContext(BookContext)
    return (
        <div className="book-list" style={{color: theme.syntax, background:theme.bg}}>
            <ul>
                {books.map(book =>{
                    return(
                    <li style={{background: theme.ui}} key={book.id}>{book.title}</li>
                    )
                })}
               
             </ul>
           </div>
      );
}
 
export default Booklist;