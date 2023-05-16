import "./App.css";
import HeroSection from "./components/Landing-Page/Hero-Section/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/MenuHeroSection/Menu";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Menu />
    </div>
  );
}

export default App;
