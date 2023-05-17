import "./App.css";
import HeroSection from "./components/Landing-Page/Hero-Section/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/MenuHeroSection/Menu";
import BranchesInfo from "./components/BranchesInfo/BranchesInfo";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Menu />
      <BranchesInfo />
    </div>
  );
}

export default App;
