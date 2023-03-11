import "./animation.css";
import { ThemeContext } from '../../context/ThemeContext';
import React, { useContext } from 'react';

const Animation = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="animationWrapper">
      <div className={theme === 'light' ? 'lightAnimation' : 'darkAnimation'}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Animation;
