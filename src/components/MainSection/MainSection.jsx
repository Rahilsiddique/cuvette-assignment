import CompGraph from "./CompGraph/CompGraph";
import "./MainSection.css";
import QuickStats from "./QuickStats/QuickStats";
import SkillUpdate from "./SkillUpdate/SkillUpdate";

const MainSection = () => {
  return (
    <div className="main__p">
      <div className="skilltest">Skill Test</div>
      <SkillUpdate />
      <QuickStats />
      <CompGraph />
    </div>
  );
};

export default MainSection;
