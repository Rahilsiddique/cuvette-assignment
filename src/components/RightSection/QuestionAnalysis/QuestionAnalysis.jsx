import scoreChartCenter from "/scoreChartCenter.png";
import { useSkillContext } from "../../../context/SkillContext";
import ScoreChart from "../../Graphs/ScoreChart";
import "./QuestionAnalysis.css";

const QuestionAnalysis = () => {
  const { skillStats } = useSkillContext();
  return (
    <div className="qa">
      <div className="qa__score">
        <div className="qa__bold">Question Analysis</div>
        <div className="qa__number">{skillStats.score}/15</div>
      </div>
      <div className="qa__secondarytextcolor">
        <span className="qa__semibold">
          You scored {skillStats.score} question correct out of 15.
        </span>{" "}
        However it still needs some improvements
      </div>
      <div className="piechart">
        <div className="piechart__img">
          <img src={scoreChartCenter} alt="target dart" />
        </div>
        <ScoreChart />
      </div>
    </div>
  );
};

export default QuestionAnalysis;
