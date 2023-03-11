import Animation from "../../components/animation/Animation";
import Aside from "../../components/Aside";
import Header from "../../components/Header";
import LightDark from "../../components/lightDark/LightDark";
import { ThemeContext } from '../../context/ThemeContext';
import React, { useContext } from 'react';

const Blog = () => {
  return (
    <>
      <Animation />
      <div>
        <Header />
        <div className="homeContent">
          <main>
    
          </main>
          <footer></footer>
          <Aside />
        </div>
        <footer className="homeFooterAfter">
          <LightDark/>
        </footer>
      </div>
    </>
  );
};

export default Blog;
