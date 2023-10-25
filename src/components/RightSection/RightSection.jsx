import QuestionAnalysis from "./QuestionAnalysis/QuestionAnalysis";
import SyllabusWiseAnalysis from "./SyllabusWiseAnalysis/SyllabusWiseAnalysis";

const RightSection = () => {
  return (
    <div>
      <SyllabusWiseAnalysis />
      <QuestionAnalysis />
    </div>
  );
};

export default RightSection;
