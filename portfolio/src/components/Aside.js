import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from 'react-icons/hi'
import { ThemeContext } from '../context/ThemeContext';
import React, { useContext } from 'react';

import "./aside.css";

const Aside = () => {
  const { theme } = useContext(ThemeContext);

  return (

    <>
    <aside className="iconsWrapper">
      <AiFillGithub className={`${theme === 'light' ? 'iconsLight' : 'icons'}`}/> <AiFillLinkedin className={`${theme === 'light' ? 'iconsLight' : 'icons'}`} />
      <HiOutlineMail className={`${theme === 'light' ? 'iconsLight' : 'icons'}`}/>
    </aside>
</>
  );
};

export default Aside;
