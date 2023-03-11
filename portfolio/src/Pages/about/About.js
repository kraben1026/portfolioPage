import Aside from "../../components/Aside";
import Header from "../../components/Header";
import "./about.css";
import { ReactComponent as React } from "../../assets/react.svg";
import { ReactComponent as Net } from "../../assets/.net.svg";
import { ReactComponent as C } from "../../assets/c#.svg";
import { ReactComponent as Docker } from "../../assets/docker.svg";
import { ReactComponent as JS } from "../../assets/javascript.svg";
import { ReactComponent as Mysql } from "../../assets/mysql.svg";
import { ReactComponent as Node } from "../../assets/nodejs.svg";
import { ReactComponent as Tailwind } from "../../assets/tailwindcss.svg";
import { ReactComponent as TS } from "../../assets/typescript.svg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Animation from "../../components/animation/Animation";
import LightDark from "../../components/lightDark/LightDark";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Animation />
      <div className="contentWrapper">
        <Header />
        <div className="homeContent">
          <main className="aboutContent">
            <div className="aboutText">
              As a full stack developer, I bring a diverse range of technical
              skills to the table, including proficiency in Typescript,
              JavaScript, React, Node.js, or C#. I'm not scared to bring the
              design with CSS frameworks like Tailwind. I am constantly
              expanding my skill set to keep up with emerging technologies and
              industry trends. This passion for learning ensures that I am
              always equipped to handle the latest challenges in web development
              and deliver top-quality solutions to my clients.
            </div>
            <div className="aboutIcons">
              <React className="aboutIcon" />
              <Net className="aboutIcon" />
              <C className="aboutIcon" />
              <Docker className="aboutIcon" />
              <JS className="aboutIcon" />
              <Mysql className="aboutIcon" />
              <Node className="aboutIcon" />
              <Tailwind className="aboutIcon" />
              <TS className="aboutIcon" />
            </div>
            <Button
              text="Check out my projects here"
              onClick={() => navigate("/projects")}
            />
          </main>
          <Aside />
          <footer className="homeFooterAfter">
            <LightDark />
          </footer>
        </div>
      </div>
    </>
  );
};

export default About;
