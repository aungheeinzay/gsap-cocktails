import { ScrollTrigger,SplitText } from "gsap/all";
import gsap from "gsap";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cocktils from "./components/Cocktils";
import About from "./components/About";
import Art from "./components/Art";
gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
          <main>
            <NavBar/>
            <Hero/>
            <Cocktils/>
            <About/>
            <Art/>
            <div className="h-dvh"></div>
          </main>
  );
}

export default App;
