const PersonalBest = () => {
  return (
    <div className="personal-best">
      <img className="personal-best-img"
        src="src/assets/images/icon-personal-best.svg"
        alt="icon-personal-best"
      />
      <div className="personal-best-body">
        <div className="personal-best-body-text-lg">Personal best:</div>
        <div className="personal-best-body-text-sm">Best:</div>
        <span>92 WPM</span>
      </div>
    </div>
  );
};

export default PersonalBest;
