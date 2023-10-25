import { CgLoadbarSound } from "react-icons/cg";
import { TfiMedallAlt } from "react-icons/tfi";
import { AiOutlineFile } from "react-icons/ai";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__option">
        <div>
          <CgLoadbarSound size={25} />
        </div>
        <div className="font__semibold">Dashboard</div>
      </div>
      <div className="sidebar__option selected">
        <div>
          <TfiMedallAlt size={25} />
        </div>
        <div className="font__semibold selected">Skill Test</div>
      </div>
      <div className="sidebar__option">
        <div>
          <AiOutlineFile size={25} />
        </div>
        <div className="font__semibold">Internship</div>
      </div>
    </div>
  );
};

export default SideBar;
