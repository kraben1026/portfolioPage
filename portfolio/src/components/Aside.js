import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import "./aside.css";

const Aside = () => {
  return (
    <aside className="iconsWrapper">
      <AiFillGithub className="icons" /> <AiFillLinkedin className="icons" />
      <BsMedium className="icons" />
    </aside>
  );
};

export default Aside;
