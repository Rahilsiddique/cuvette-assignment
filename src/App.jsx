import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import NavBar from "./components/NavBar/NavBar";
import RightSection from "./components/RightSection/RightSection";
import SideBar from "./components/SideBar/SideBar";
import SkillUpdateModel from "./components/SkillUpdateModel/SkillUpdateModel";
import { useSkillContext } from "./context/SkillContext";

function App() {
  const { showSkillModel } = useSkillContext();
  return (
    <div className="main">
      <NavBar />
      <div className="sub__layout">
        <div className="sidebar__layout">
          <SideBar />
        </div>
        <div className="main__layout">
          <MainSection />
        </div>
        <div className="right__layout">
          <RightSection />
        </div>
      </div>
      <SkillUpdateModel visible={showSkillModel} />
    </div>
  );
}

export default App;
