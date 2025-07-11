import { ScrollTrigger,SplitText } from "gsap/all";
import gsap from "gsap";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cocktils from "./components/Cocktils";

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
          <main>
            <NavBar/>
            <Hero/>
            
            <Cocktils/>
          </main>
  );
}

export default App;
