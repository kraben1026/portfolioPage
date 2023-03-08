import { useNavigate } from "react-router-dom";
import Aside from "../../components/Aside";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import "./contact.css";
const Contact = () => {
  const navigate = useNavigate();
  const [formContent, setformContent] = useState(true);
  const [footer, setFooter] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    setformContent(false);
    setFooter(false);
  }, []);
  const formContentClass = `${
    formContent ? "formContent" : "formContentAfter"
  }`;
  const footerClass = `${footer ? "homeFooter" : "homeFooterAfter"}`;
  return (
    <>
      <div>
        <Header />
        <div className="homeContent">
          <form action="" className={formContentClass}>
            <label htmlFor="">Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <label htmlFor="">Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="">Message</label>
            <textarea
              name=""
              id="contactTextArea"
              cols="30"
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              className="sendBtn"
              onClick={(event) => {
                event.preventDefault();
                console.log(name, email, message);
                alert('Your message has been sent!')
              }}
            >
              Send
            </button>
          </form>
          <aside>
            <Aside />
          </aside>
        </div>
        <h2 className="contactInfo">
          If you want to send me a message please fill this form!{" "}
        </h2>
        <footer className={footerClass}></footer>
      </div>
    </>
  );
};

export default Contact;
