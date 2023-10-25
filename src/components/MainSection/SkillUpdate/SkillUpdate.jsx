import htmlIcon from "/htmlLogo.png";
import { useSkillContext } from "../../../context/SkillContext";
import "./SkillUpdate.css";
import Button from "../../common/Button/Button";
const SkillUpdate = () => {
  const { setShowSkillModel } = useSkillContext();

  return (
    <div className="skillupdate">
      <div className="skillupdate__first">
        <div>
          <img src={htmlIcon} height={55} width={40} alt="HTML icon" />
        </div>
        <div className="skillupdate__first__child">
          <span className="skillupdate__font__block">
            Hyper Text Markup Language
          </span>
          <span className="skillupdate__info">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </span>
        </div>
      </div>
      <div>
        <Button onClick={() => setShowSkillModel((prev) => !prev)}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default SkillUpdate;
