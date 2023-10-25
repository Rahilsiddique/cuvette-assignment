import "./NavBar.css";
import cuvetteLogo from "/cuvetteLogo.svg";
import profilePic from "/profilePic.png";
const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={cuvetteLogo} alt="cuvetteLogo" />
      </div>
      <div className="navbar__profile">
        <img src={profilePic} height={40} width={40} alt="profilePic" />
        <span className="navbar__profilename">Rahil Siddique</span>
      </div>
    </div>
  );
};

export default NavBar;
