import "./home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Aside from "../components/Aside";

const Home = () => {
  const [mainContent, setMainContent] = useState(true);
  const [footer, setFooter] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setMainContent(false);
    setFooter(false);
  }, []);
  const mainContentClass = `${
    mainContent ? "mainContent" : "mainContentAfter"
  }`;
  const footerClass = `${footer ? "homeFooter" : "homeFooterAfter"}`;
  return (
    <>
      <div>
        <Header />
        <div className="homeContent">
          <main className={mainContentClass}>
            <div className="homeH1Wrapper">
              <h1 className="homeH1">I</h1>
              <h1 className="homeH1">'</h1>
              <h1 className="homeH1">m</h1>
              <h1 className="homeH1">_</h1>
              <h1 className="homeH1">B</h1>
              <h1 className="homeH1">e</h1>
              <h1 className="homeH1">n</h1>
              <h1 className="homeH1">c</h1>
              <h1 className="homeH1">e</h1>
            </div>
            <div className="homeH2Wrapper">
              <h2 className="homeH2">W</h2>
              <h2 className="homeH2">e</h2>
              <h2 className="homeH2">b</h2>
              <h2 className="homeH2">_</h2>
              <h2 className="homeH2">D</h2>
              <h2 className="homeH2">e</h2>
              <h2 className="homeH2">v</h2>
              <h2 className="homeH2">e</h2>
              <h2 className="homeH2">l</h2>
              <h2 className="homeH2">o</h2>
              <h2 className="homeH2">p</h2>
              <h2 className="homeH2">e</h2>
              <h2 className="homeH2">r</h2>
            </div>
            <p className="introduction">
              As a full stack web developer, I'm passionate about creating
              innovative solutions to real-world problems.
              <br /> I have a strong foundation in both front-end and back-end
              development, and I thrive in collaborative environments where I
              can work with other creative minds.
            </p>
          </main>
          <footer className={footerClass}></footer>
          <Aside />
        </div>
      </div>
    </>
  );
};

export default Home;
