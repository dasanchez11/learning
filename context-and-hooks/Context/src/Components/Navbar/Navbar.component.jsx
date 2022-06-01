import React,{useContext} from "react";
import { AuthContext } from "../../Context/ThemeContext/AuthContext";
import { ThemeContext } from "../../Context/ThemeContext/ThemeContext";

const NavBar = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const {isAuthenticated,toggleAuth} = useContext(AuthContext)
    return ( 
        <nav style={{background: theme.ui, color: theme.syntax}}>
            <h1>
                Context App
            </h1>
            <div onClick={toggleAuth} style={{cursor: 'pointer'}}>
                {isAuthenticated? 'Logged in' : 'Logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
        
            </ul>
        </nav>
     );
}
 
export default NavBar;


// class Navbar  extends Component {
//     static contextType = ThemeContext
    
//     render() { 
//         const {isLightTheme, light, dark} = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <nav style={{background: theme.ui, color: theme.syntax}}>
//                 <h1>
//                     Context App
//                 </h1>
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
                
//                 </ul>
//             </nav>

//         );
//     }
// }
 
// export default Navbar;


// Other Way to use Context

// class Navbar  extends Component {
    
//     render() { 
//         return (
//             <AuthContext.Consumer>{(authContext)=>{
//                 const {isAuthenticated,toggleAuth} = authContext;
//                 return(
//                     <ThemeContext.Consumer>{(themeContext) =>{
//                         const {isLightTheme, light, dark} = themeContext;
//                         const theme = isLightTheme ? light : dark;
//                         return (
//                             <nav style={{background: theme.ui, color: theme.syntax}}>
//                                 <h1>
//                                     Context App
//                                 </h1>
//                                 <div onClick={toggleAuth} style={{cursor: 'pointer'}}>
//                                     {isAuthenticated? 'Logged in' : 'Logged out'}
//                                 </div>
//                                 <ul>
//                                     <li>Home</li>
//                                     <li>About</li>
//                                     <li>Contact</li>
                                
//                                 </ul>
//                             </nav>
//                         )
//                     }}
//                     </ThemeContext.Consumer>
//                 )
//             }}
                
//             </AuthContext.Consumer>
            

//         );
//     }
// }
 
// export default Navbar;