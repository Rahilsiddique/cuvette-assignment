import { Cell, Pie, PieChart } from "recharts";
import { useSkillContext } from "../../context/SkillContext";

const ScoreChart = () => {
  const { skillStats } = useSkillContext();
  const score = Number(skillStats.score);
  const data01 = [
    { name: "score", value: score },
    { name: "outOff", value: 15 - score }
  ];
  const COLORS = ["#EDF4FF", "#438AF6"];
  return (
    <PieChart width={250} height={250}>
      <Pie
        data={data01}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={55}
        outerRadius={80}
      >
        <Cell key="cell-1" fill={COLORS[1]} />
        <Cell key="cell-2" fill={COLORS[0]} />
      </Pie>
    </PieChart>
  );
};

export default ScoreChart;
