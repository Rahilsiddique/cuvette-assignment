import { useSkillContext } from "../../../context/SkillContext";
import LineComp from "../../Graphs/LineComp";
import commGraphRightLogo from "/commGraphRightLogo.png";
import "./CompGraph.css";

const CompGraph = () => {
  const { skillStats } = useSkillContext();
  return (
    <div className="compgraph">
      <div className="compgraph__content">
        <div>
          <div className="compgraph__fontbold">Comparison Graph</div>
          <div className="compgraph__text">
            <span className="compgrph__semibold">
              You scored {skillStats.percentile}% percentile
            </span>{" "}
            which is lower than the <span className="compgraph__block"></span>{" "}
            average percentile 72% of all the engineers who took this assessment
          </div>
        </div>
        <div>
          <img
            src={commGraphRightLogo}
            height={50}
            width={50}
            alt="line chart logo"
          />
        </div>
      </div>
      <div className="pt-4">
        <LineComp />
      </div>
    </div>
  );
};

export default CompGraph;
