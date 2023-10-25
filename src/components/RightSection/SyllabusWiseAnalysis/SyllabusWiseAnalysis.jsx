import ProgressBar from "../../common/ProgressBar/ProgressBar";
import "./SyllabusWiseAnalysis.css";
const SyllabusWiseAnalysis = () => {
  const data = [
    {
      subjects: ["HTML Tools", "Forms", "History"],
      value: 80,
      color: "#438AF6",
      backgroundColor: "#edf4ff"
    },
    {
      subjects: ["Tags & References in HTML"],
      value: 60,
      color: "#FF9142",
      backgroundColor: "#fff4ed"
    },
    {
      subjects: ["Tables & References in HTML"],
      value: 24,
      color: "#FB5E5E",
      backgroundColor: "#ffefef"
    },
    {
      subjects: ["Tables & CSS Bascis"],
      value: 96,
      color: "#2EC971",
      backgroundColor: "#ebfaf1"
    }
  ];
  return (
    <div className="syllabuswiseanalysis">
      <div className="syllabuswiseanalysis__fontbold">
        Syllabus Wise Analysis
      </div>
      {data.map((e) => (
        <ProgressBar {...e} duration={300} />
      ))}
    </div>
  );
};

export default SyllabusWiseAnalysis;
