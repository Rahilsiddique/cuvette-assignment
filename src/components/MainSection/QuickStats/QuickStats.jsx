import { useSkillContext } from "../../../context/SkillContext";
import "./QuickStats.css";
import Stats from "../../common/Stats/Stats";

const QuickStats = () => {
  const { skillStats } = useSkillContext();
  return (
    <div className="quickstats">
      <div className="quickstats__fontbold">Quick Statistics</div>
      <div className="quickstats__layout">
        {Object.keys(skillStats).map((e, i) => (
          <Stats value={e} index={i} />
        ))}
      </div>
    </div>
  );
};

export default QuickStats;
