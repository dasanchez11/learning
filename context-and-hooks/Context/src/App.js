import Booklist from './Components/Booklist/Booklist.component';
import Navbar from './Components/Navbar/Navbar.component';
import ThemeToggle from './Components/ThemeToggle/ThemeToggle.component';
import AuthContextProvider from './Context/ThemeContext/AuthContext';
import BookContextProvider from './Context/ThemeContext/BookContext';
import ThemeContextProvider from './Context/ThemeContext/ThemeContext'


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar></Navbar>
          <BookContextProvider>
            <Booklist></Booklist>

          </BookContextProvider>
          <ThemeToggle></ThemeToggle>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
