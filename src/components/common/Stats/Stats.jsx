import { useSkillContext } from "../../../context/SkillContext";
import "./Stats.css";
import quickStatLogo1 from "/quickStatLogo1.png";
import quickStatLogo2 from "/quickStatLogo2.png";
import quickStatLogo3 from "/quickStatLogo3.png";
const Stats = ({ value, index }) => {
  const { skillStats } = useSkillContext();
  console.log();
  const logoDecider = (i) => {
    if (i === 0) {
      return quickStatLogo1;
    } else if (i == 1) {
      return quickStatLogo2;
    } else {
      return quickStatLogo3;
    }
  };
  const valueDecider = (value) => {
    if (value == "score") {
      return "correct answers";
    } else if (value == "rank") {
      return "your rank";
    } else {
      return value;
    }
  };
  const textDecider = () => {
    if (value == "rank") {
      return skillStats[value].toLocaleString();
    } else if (value === "percentile") {
      return skillStats[value] + "%";
    } else if (Number(skillStats[value]) < 10) {
      return "0" + skillStats[value] + " / 15";
    }
    return skillStats[value] + " / 15";
  };
  return (
    <div className="stats">
      <div>
        <img src={logoDecider(index)} alt="trophie" />
      </div>
      <div className="stats__p">
        <div className="stats__fontbold">{textDecider()}</div>
        <div className="stats__stat">{valueDecider(value)}</div>
      </div>
    </div>
  );
};

export default Stats;
