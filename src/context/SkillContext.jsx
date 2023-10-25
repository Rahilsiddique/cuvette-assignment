import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [showSkillModel, setShowSkillModel] = useState(false);
  const [skillStats, setSkillStats] = useState({
    rank: 0,
    percentile: 0,
    score: 0
  });
  let ans = [
    {
      percentile: 0,
      id: 1,
      numberOfStudent: 1
    },
    {
      percentile: 10,
      id: 10,
      numberOfStudent: 2
    },
    {
      percentile: 20,
      id: 20,
      numberOfStudent: 3
    },
    {
      percentile: 30,
      id: 30,
      numberOfStudent: 6
    },
    {
      percentile: 35,
      id: 1,
      numberOfStudent: 12
    },
    {
      percentile: 40,
      id: 2,
      numberOfStudent: 14
    },

    {
      percentile: 45,
      id: 3,
      numberOfStudent: 16
    },
    {
      percentile: 50,
      id: 4,
      numberOfStudent: 22
    },
    {
      percentile: 55,
      id: 5,
      numberOfStudent: 19
    },
    {
      percentile: 60,
      id: 6,
      numberOfStudent: 9
    },
    {
      percentile: 70,
      id: 7,
      numberOfStudent: 3
    },
    {
      percentile: 85,
      id: 8,
      numberOfStudent: 2
    },
    {
      percentile: 90,
      id: 9,
      numberOfStudent: 4
    },
    {
      percentile: 100,
      id: 10,
      numberOfStudent: 1
    }
  ];
  const [lineGraph, setLineGraph] = useState(ans);
  lineGraph.sort((a, b) => a.percentile - b.percentile);
  return (
    <GlobalContext.Provider
      value={{
        showSkillModel,
        setShowSkillModel,
        skillStats,
        setSkillStats,
        ans,
        lineGraph,
        setLineGraph
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useSkillContext = () => {
  return useContext(GlobalContext);
};
