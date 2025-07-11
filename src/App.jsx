import { ScrollTrigger,SplitText } from "gsap/all";
import gsap from "gsap";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cocktils from "./components/Cocktils";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
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
          </main>
  );
}

export default App;
