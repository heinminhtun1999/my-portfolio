import React, { useState, useEffect, useRef } from "react";
import './App.css';
import Home from '../components/Home/Home';
import Nav from "../components/Nav/Nav";
import About from "../components/About/About";
import Projects from "../components/Portfolio/Projects";
import Contact from "../components/Contact/Contact";
import emailjs from 'emailjs-com';

let index = localStorage.getItem("index");

function App() {

  const [dir, setDir] = useState([]);
  const [expandClicked, setExpandClicked] = useState(false);
  const [navMouseOver, setNavMouseOver] = useState(false);
  // for skill component
  const [skillEnteredViewPort, setSkillEnterViewPort] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [formInputs, setFormInputs] = useState({
    user_name: "",
    user_email: "",
    message: ""
  })

  const goToDiv = (div) => {
    if (div === "home") {
      index = 0;
      localStorage.setItem("index", index)
      dir[0].scrollIntoView({ behavior: "smooth" });
    } else if (div === "about") {
      index = 1;
      localStorage.setItem("index", index)
      dir[1].scrollIntoView({ behavior: "smooth" });
    } else if (div === "projects") {
      index = 2;
      localStorage.setItem("index", index)
      dir[2].scrollIntoView({ behavior: "smooth" });
    } else {
      index = 3;
      localStorage.setItem("index", index)
      dir[3].scrollIntoView({ behavior: "smooth" });
    }
    setExpandClicked(false)
  }

  const expandMenu = () => {
    setExpandClicked(expandClicked ? false : true)
    setNavMouseOver(false)
  }

  const navHandleOver = () => {
    setNavMouseOver(true)
  }

  const navHandleOut = () => {
    setNavMouseOver(false)
  }

  // for skill component
  const onSkillEnterViewPort = () => {
    setSkillEnterViewPort(true)
  }

  const onSkillExitViewPort = () => {
    setSkillEnterViewPort(true)
  }

  // contact-form 
  const form = useRef();

  const formHandleChange = (e) => {
    setFormInputs(prevValue => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value
      }
    })
  }

  const sendEmail = (e) => {
    alert("Email Sent")
    e.preventDefault();
    setEmailSent(true);
    setFormInputs({
      user_name: "",
      user_email: "",
      message: ""
    })
    emailjs.sendForm('service_dadv9s6', 'template_1tf11qa', form.current, 'user_e7mFYYESLpTsBzxlx105W')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  useEffect(() => {
    const home = document.querySelector(".home");
    const about = document.querySelector(".about");
    const projects = document.querySelector(".projects");
    const contact = document.querySelector(".contact");
    const homePosition = window.scrollY + home.getBoundingClientRect().top;
    const aboutPosition = window.scrollY + about.getBoundingClientRect().top;
    const projectsPosition = window.scrollY + projects.getBoundingClientRect().top;
    const contactPosition = window.scrollY + contact.getBoundingClientRect().top;
    const ary = [homePosition, aboutPosition, projectsPosition, contactPosition];

    localStorage.setItem("index", index);
    let scroll = true;

    const scrollTo = (position) => {
      window.scrollTo({
        top: position,
        left: 0,
        behavior: "smooth"
      })
    }

    const scrollEffect = (e) => {
      if (scroll) {
        if (e.wheelDeltaY < 0) {
          index++;
          scrollTo(ary[index]);
          // to store current index in localStorage
          localStorage.setItem("index", index);
          if (index >= 3) index = 3;
        } else if (e.wheelDeltaY > 0) {
          index--;
          scrollTo(ary[index]);
          // to store current index in localStorage
          localStorage.setItem("index", index);
          if (index <= 0) index = 0;
        }
      }
      scroll = false;
      window.removeEventListener("wheel", scrollEffect);
      setTimeout(() => {
        scroll = true;
        window.addEventListener("wheel", scrollEffect);
      }, 1000);
    }

    window.addEventListener("wheel", scrollEffect);

    setDir([home, about, projects, contact]);
  }, [])

  return (
    <div className="App">
      <Nav
        expandClicked={expandClicked}
        expandMenu={expandMenu}
        navMouseOver={navMouseOver}
        navHandleOver={navHandleOver}
        navHandleOut={navHandleOut}
        goToDiv={goToDiv}
      />
      <Home />
      <About
        onSkillEnterViewPort={onSkillEnterViewPort}
        onSkillExitViewPort={onSkillExitViewPort}
        skillEnteredViewPort={skillEnteredViewPort}
      />
      <Projects />
      <Contact sendEmail={sendEmail} form={form} emailSent={emailSent} formHandleChange={formHandleChange} formInputs={formInputs} />
    </div>
  );
}

export default App;
