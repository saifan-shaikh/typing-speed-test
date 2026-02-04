import PersonalBest from "./personal-best";

const Header = () => {
  return (
    <div className="header">
      {/* small screen header */}
      <div className="small-screen-header">
        <img src="src/assets/images/logo-small.svg" alt="logo-small" />
        {/* personal best */}
        <PersonalBest />
      </div>
      {/* large screen header */}
      <div className="large-screen-header">
        <img src="src/assets/images/logo-large.svg" alt="logo-large" />
        {/* personal best */}
        <PersonalBest />
      </div>
    </div>
  );
};

export default Header;
