import { BsSun } from 'react-icons/bs'
import { CiDark } from 'react-icons/ci'
import './lightDark.css'
import '../animation/animation.css'
import { ThemeContext } from '../../context/ThemeContext';
import React, { useContext } from 'react';

const LightDark = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
  {theme === 'light' ? (
    <BsSun className="light" style={{ color: 'black' }} onClick={toggleTheme} />,
    <CiDark className="dark" style={{ color: 'black' }} onClick={toggleTheme} />
  ) : (
    <CiDark className="dark" style={{ color: 'white' }} onClick={toggleTheme} />,
    <BsSun className="light" style={{ color: 'white' }} onClick={toggleTheme} />
  )}
    </div>
    
);
};

export default LightDark;
