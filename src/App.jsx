import { ScrollTrigger,SplitText } from "gsap/all";
import gsap from "gsap";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cocktils from "./components/Cocktils";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
          <main>
            <NavBar/>
            <Hero/>
            <Cocktils/>
            <About/>
            <Art/>
            <Menu/>
            <Contact/>
          </main>
  );
}

export default App;
