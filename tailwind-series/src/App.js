import About from "./components/About/About";
import AllInOne from "./components/AllinOne/AllInOne";
import Hero from "./components/Hero/Hero.component";
import Navbar from "./components/Navbar/Navbar.component";
import Support from "./components/Support/Support";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Support/>
      <AllInOne/>
    </>
  );
}

export default App;
