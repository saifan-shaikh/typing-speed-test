// imports
import { useState } from "react";
import cx from "classnames";

// type declarations
type Time = {
  minutes: number;
  seconds: number;
};

type DifficultyMode = {
  type: string;
  name: string;
};

type DifficultyModeOptions = {
  difficulty: boolean;
  mode: boolean;
};

// global variables
const difficultyLevels: DifficultyMode[] = [
  { type: "easy", name: "Easy" },
  { type: "medium", name: "Medium" },
  { type: "hard", name: "Hard" },
];

const modeLevels: DifficultyMode[] = [
  { type: "timed", name: "Timed(60s)" },
  { type: "unlimited", name: "Passage" },
];

/* 
  *****************************************************************************************************
    MAIN COMPONENT STARTS HERE - component to show details like wpm, accuracy, time, difficulty, mode
  *****************************************************************************************************
*/
const Details = () => {
  // state declarations
  const [testStatus, setTestStatus] = useState<string>("notStarted"); // 'notStarted' | 'inProgress' | 'completed'
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(100);
  const [time, setTime] = useState<Time>({
    minutes: 0,
    seconds: 60,
  });
  const [difficulty, setDifficulty] = useState<DifficultyMode>({
    type: "easy",
    name: "Easy",
  });
  const [mode, setMode] = useState<DifficultyMode>({
    type: "timed",
    name: "Timed(60s)",
  });
  const [showDificultyModeOptions, setShowDificultyModeOptions] =
    useState<DifficultyModeOptions>({ difficulty: false, mode: false });

  // cx classnames
  const accuracyClass = cx({
    "performance-metric-value": testStatus === "notStarted",
    "performance-metric-value-accuracy-high":
      accuracy === 100 && testStatus !== "notStarted",
    "performance-metric-accuracy-low":
      accuracy < 100 && testStatus !== "notStarted",
  });

  const timeClass = cx({
    "performance-metric-value": testStatus === "notStarted",
    "performance-metric-value-time": testStatus !== "notStarted",
  });

  const generateDifficultyButtonsDesktop = () => {
    return difficultyLevels.map((level, index) => {
      const difficultyClass = cx({
        "performance-button-desktop": true,
        "performance-button-desktop-active": level.type === difficulty.type,
      });

      return (
        <button
          className={difficultyClass}
          key={index}
          onClick={() => setDifficulty(level)}
        >
          {level.name}
        </button>
      );
    });
  };

  const generateModeButtonsDesktop = () => {
    return modeLevels.map((level, index) => {
      const modeClass = cx({
        "performance-button-desktop": true,
        "performance-button-desktop-active": level.type === mode.type,
      });
      return (
        <button
          className={modeClass}
          key={index}
          onClick={() => setMode(level)}
        >
          {level.name}
        </button>
      );
    });
  };

  const generateDifficultyOptionsMobile = () => {
    return difficultyLevels.map((level, index) => {
      return (
        <div key={level.type}>
          {/* radio */}
          <button
            className="performance-level-option-button-mobile"
            onClick={() => setDifficulty(level)}
          >
            <input
              checked={level.type === difficulty.type}
              name={level.type}
              type={"radio"}
              value={level.type}
            />
            <label htmlFor={level.type}>{level.name}</label>
          </button>
          {/* separator */}
          {index < difficultyLevels.length - 1 && <hr />}
        </div>
      );
    });
  };

  const generateModeOptionsMobile = () => {
    return modeLevels.map((level, index) => {
      return (
        <div key={level.type}>
          {/* radio */}
          <button
            className="performance-level-option-button-mobile"
            onClick={() => setMode(level)}
          >
            <input
              checked={level.type === mode.type}
              name={level.type}
              type={"radio"}
              value={level.type}
            />
            <label htmlFor={level.type}>{level.name}</label>
          </button>
          {/* separator */}
          {index < modeLevels.length - 1 && <hr />}
        </div>
      );
    });
  };

  // return statement
  return (
    <div className="details-container">
      {/* metrics */}
      <div className="performance-metrics-container">
        {/* WPM */}
        <div className="performance-metric">
          <div className="performance-metric-header">WPM:</div>
          <div className="performance-metric-value">{wpm}</div>
        </div>
        <span className="vertical-separator"></span>
        {/* Accuracy */}
        <div className="performance-metric">
          <div className="performance-metric-header">Accuracy:</div>
          <div className={accuracyClass}>{accuracy}%</div>
        </div>
        <span className="vertical-separator"></span>
        {/* Time */}
        <div className="performance-metric">
          <div className="performance-metric-header">Time:</div>
          <div className={timeClass}>
            {time.minutes}:{time.seconds}
          </div>
        </div>
      </div>
      {/* difficulty and mode */}
      <div className="performance-values-container">
        {/* mobile */}
        <div className="performance-values-container-mobile">
          {/* difficulty levels */}
          <div className="performance-levels-mobile">
            <button
              className="performance-level-button-mobile"
              onClick={() =>
                setShowDificultyModeOptions((prev) => ({
                  ...prev,
                  difficulty: !prev.difficulty,
                }))
              }
            >
              <span>{difficulty.name}</span>
              <img
                src="src/assets/images/icon-down-arrow.svg"
                alt="arrow-icon-down"
              />
            </button>
            {showDificultyModeOptions.difficulty && (
              <div className="performance-level-difficultymode-options-container-mobile">
                {generateDifficultyOptionsMobile()}
              </div>
            )}
          </div>
          {/* mode */}
          <div className="performance-levels-mobile">
            <button
              className="performance-level-button-mobile"
              onClick={() =>
                setShowDificultyModeOptions((prev) => ({
                  ...prev,
                  mode: !prev.mode,
                }))
              }
            >
              <span>{mode.name}</span>
              <img
                src="src/assets/images/icon-down-arrow.svg"
                alt="arrow-icon-down"
              />
            </button>
            {showDificultyModeOptions.mode && (
              <div className="performance-level-difficultymode-options-container-mobile">
                {generateModeOptionsMobile()}
              </div>
            )}
          </div>
        </div>
        {/* desktop */}
        <div className="performance-values-container-desktop">
          {/* difficulty Levels */}
          <div className="performance-levels-desktop">
            <div className="performance-level-header-desktop">Difficulty:</div>
            <div className="performance-levels-buttons-desktop">
              {generateDifficultyButtonsDesktop()}
            </div>
          </div>
          <span className="vertical-separator"></span>

          {/* mode */}
          <div className="performance-levels-desktop">
            <div className="performance-level-header-desktop">Mode:</div>
            <div className="performance-levels-buttons-desktop">
              {generateModeButtonsDesktop()}
            </div>
          </div>
        </div>
      </div>

      {/* typing */}
      
    </div>
  );
};

// exports
export default Details;
