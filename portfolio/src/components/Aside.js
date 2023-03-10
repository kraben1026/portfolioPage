import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from 'react-icons/hi'

import "./aside.css";

const Aside = () => {
  return (
    <>
    <aside className="iconsWrapper">
      <AiFillGithub className="icons" /> <AiFillLinkedin className="icons" />
      <HiOutlineMail className="icons" />
    </aside>
    
</>
  );
};

export default Aside;
