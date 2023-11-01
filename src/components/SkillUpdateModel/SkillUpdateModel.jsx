import React, { useState } from "react";
import htmlLogo from "/htmlLogo.png";
import { BsArrowRightShort } from "react-icons/bs";
import { useSkillContext } from "../../context/SkillContext";
import "./SkillUpdateModel.css";
import CustomInput from "../common/CustomInput/CustomInput";
import Button from "../common/Button/Button";

const SkillUpdateModel = ({ visible }) => {
  const {
    setShowSkillModel,
    setSkillStats,
    skillStats,
    setLineGraph,
    lineGraph
  } = useSkillContext();
  const [localChange, setLocalChange] = useState(skillStats);

  const input = [
    {
      id: 1,
      name: "rank",
      errorMessage: "required | should be number",
      placeholder: "Rank",
      label: "Rank",
      pattern: "^[0-9]+$",
      required: true
    },
    {
      id: 2,
      name: "percentile",
      errorMessage: "required | precentile 0-100",
      placeholder: "Percentile",
      label: "Percentile",
      pattern: "^[0-9]$|^[1-9][0-9]$|^(100)$",
      required: true
    },
    {
      id: 3,
      name: "score",
      errorMessage: "required | score 0-15",
      placeholder: "score",
      label: "Current Score (out of 15)",
      required: true,
      pattern: "^(1[0-5]?|0|[0-9])$"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      localChange.score === 0 ||
      localChange.percentile === 0 ||
      localChange.rank === 0
    ) {
      alert("please enter all values correctly");
    }
    setSkillStats(localChange);

    setLineGraph((p) => [
      ...p,
      {
        percentile: localChange.percentile,
        id: lineGraph.length + 1,
        numberOfStudent: Math.floor(Math.random() * 10)
      }
    ]);
    setShowSkillModel((prev) => !prev);
  };
  const handleChange = (e) => {
    setLocalChange((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  if (!visible) return;
  return (
    <div className="skillupdatemodel">
      <div className="skillupdatemodel__wrapper">
        <form onSubmit={handleSubmit}>
          <div className="skillupdatemodel__title">
            <div className="skillupdatemodel__maintitle">Update scores</div>
            <div>
              <img src={htmlLogo} height={35} width={25} alt="html icon" />
            </div>
          </div>
          {input.map((e) => (
            <CustomInput
              key={e.id}
              {...e}
              value={localChange[e.name]}
              onChange={handleChange}
            />
          ))}
          <div className="skillupdatemodel__btns">
            <Button>
              save
              <BsArrowRightShort size={20} className="mt-1" />
            </Button>
            <button
              className="cancle"
              onClick={() => setShowSkillModel((prev) => !prev)}
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SkillUpdateModel;
