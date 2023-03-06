import '.header.css';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <AiFillGithub className="icons"/>{" "}
      <AiFillLinkedin
        className="icons"
      />
      <BsMedium className="icons" />
    </div>
  );
};

export default Header;
