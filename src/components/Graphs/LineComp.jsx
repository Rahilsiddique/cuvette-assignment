import { Line, LineChart, ReferenceLine, Tooltip, XAxis } from "recharts";
import { useSkillContext } from "../../context/SkillContext";

const LineComp = () => {
  const { lineGraph, skillStats } = useSkillContext();
  return (
    <LineChart
      height={300}
      width={600}
      data={lineGraph}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="percentile" type="number" />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="numberOfStudent"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <ReferenceLine
        x={Number(skillStats.percentile)}
        label="your percentile"
      />
    </LineChart>
  );
};

export default LineComp;
