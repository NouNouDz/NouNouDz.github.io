import "../Dist/style.css"
import { gsap } from "gsap";

import { useNavigate, Link } from "react-router-dom";
import React, { useEffect } from "react";
import Menu from "../Addons/Menu";
import Falling from "../Addons/Falling";
import Button from "../Addons/Button";
import Footer from "../Addons/Footer";
import work from "../work";

export default function Homev2() {
  const [hover, setHover] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate();

  const move = (s, x, y)=> gsap.to(document.querySelector(".circle"), {scale: s, x, y, duration: 0});

  React.useEffect(()=> {
    document.body.classList.add("light")
    window.bodyScrollBar?.setPosition(0,0);


    gsap.to(".header-section",{
      ease: "none",
      scrollTrigger: {
        trigger: '.hero',
        scrub: true,
        start: "center center",
        pin: true,
        pinSpacing: false,
      }
    })

    if(document.readyState !== "complete") gsap.set(".logo", {
      scale: 3,
      y: window.innerHeight/2,
      color: "#fff",
    })
    else gsap.to(".loader", {
      x: "-100%",
      duration: 2,
      skewX: 10,
      onComplete: () => {
        gsap.set(".loader", {
          skewX: 0,
          x: "-100%",
        })
      }
    })

    window.addEventListener("load", (event) => {
      gsap.to(".logo", {
        scale: 1,
        y: 0,
        color: "#000",
        duration: .5,
      })
      gsap.to(".loader", {
        x: "-100%",
        duration: 2,
        skewX: 10,
        onComplete: () => {
          gsap.set(".loader", {
            skewX: 0,
            x: "-100%",
          })
        }
      })
    })

  },[])
  useEffect(()=> {
    if(open) document.querySelector(".menu-f")?.addEventListener("mousewheel", (e)=> {
      if(open) e.preventDefault();
    })
  },[open])
  React.useEffect(()=> {
    function circ (e) {
      move(.2, e.clientX - 80 , e.clientY - 200 )
    }
    if(!hover){
      move(1, 0, 0);
    } else {
      document.querySelector(".contact-section")?.addEventListener("mousemove", circ)
    }
    return () => document.querySelector(".contact-section")?.removeEventListener("mousemove", circ)
  }, [hover])

  const moveContact = () => {
    gsap.to(document.querySelectorAll(".circle")[1], {x: "300%", duration: .6});
    gsap.to(document.querySelectorAll(".circle")[2], {x: "200%", duration: .4});
    gsap.to(document.querySelectorAll(".circle")[3], {x: "200%", duration: .2});
    gsap.to(document.querySelectorAll(".circle")[0], {scale: 10, duration: 1, onComplete: ()=> navigate("/contacts")});
    gsap.to(document.querySelector(".c-text"), {x: -100, opacity: 0, duration: .9});
  }

  return(
  <>
  
  <div className="loader"/>
    <Menu open={open} setOpen={setOpen}/>
    <div className="nav-bar">
      <Link to="/" className="logo"><span>Abdennour</span>Mez</Link>
      <div className="links">
        <Button className="menu" onClick={()=> setOpen(true)} parentClass="close-parent v2">
          <div className="burger-lines"/>
          <div className="burger-lines"/>
          <div className="burger-lines"/>
        </Button>

      </div>
    </div>
    <div className="header-section">
      <div className="hero">
      <h1 className="title">Bringing your ideas to life,<br/>one line of code at a time.</h1>
      <div className="btn-container">
        <button className="showreel" onClick={()=> navigate("/contacts")}>
          <div>
            <span>Contact</span>
            <span>Contact</span>
          </div>
        </button>
        <button className="showreel v2" onClick={()=> navigate("/work")}>
          <div>
            <span>Work</span>
            <span>Work</span>
          </div>
        </button>
      </div>
      </div>
      <div className="work-grid">
        <div className="work" style={{"--bg": "#FFFFFF"}}>
          <img src={require("../Dist/ardev.png")} alt="Showcase"/>
        </div>
        <div className="work" style={{"--bg": "#D8D8D8"}}>
          <img src={require("../Dist/aliafy.png")} alt="Showcase"/>
        </div>
        <div className="work" style={{"--bg": "#000F14"}}>
          <img src={require("../Dist/fit.png")} alt="Showcase"/>
        </div>
        <div className="work" style={{"--bg": "#000000"}}>
          <img src={require("../Dist/govncy.png")} alt="Showcase"/>
        </div>

      </div>
    </div>

    <div className="about">
      <div className="heading">About<br/>Abdennour</div>
      <p className="description">I am a UI/UX designer and full stack web developer with over 5 years of experience. I am passionate about creating beautiful and user-friendly web experiences. I have a strong track record of success in delivering high-quality projects on time and within budget.
      <br/><br/>
      I have a deep understanding of user psychology and design principles. I am also proficient in a variety of programming languages and technologies, including HTML, CSS, JavaScript, React, Node.js, and Express.
      <br/><br/>
      I am a team player and I am always willing to go the extra mile to help my team succeed. I am also a quick learner and I am always eager to take on new challenges.
      <br/><br/>
      I am excited about the future of web development, and I am committed to creating the best possible web experiences for my users.
      </p>
    </div>
    <Falling />
    <div className="creation">
      <h1 className="h1">My newest creation, ready to be seen.</h1>
      <p>My latest work is a reflection of my passion for creating beautiful and user-friendly web experiences.</p>
      <div className="cards" >
        {work.slice(0, 6).map((e,i)=> <a href={e.link} target="_blank" rel="noreferrer" key={i} className="card" style={{"--color": e.color}}>
          <img src={e.image} alt="cardds"/>
          <div className="bg" />
          <div>
          <div className="text">
            <h2>{e.field}</h2>
            <h1>{e.title}</h1>
          </div>
            <div className="arrow"><svg width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 16H35.72L28.46 24.72C28.2919 24.9222 28.1653 25.1556 28.0874 25.4068C28.0095 25.6579 27.9818 25.922 28.006 26.1839C28.0547 26.7127 28.3116 27.2005 28.72 27.54C29.1284 27.8795 29.655 28.0428 30.1838 27.994C30.7127 27.9453 31.2005 27.6884 31.54 27.28L41.54 15.28C41.6073 15.1846 41.6674 15.0843 41.72 14.98C41.72 14.88 41.82 14.82 41.86 14.72C41.9507 14.4907 41.9981 14.2466 42 14C41.9981 13.7534 41.9507 13.5093 41.86 13.28C41.86 13.18 41.76 13.12 41.72 13.02C41.6674 12.9157 41.6073 12.8155 41.54 12.72L31.54 0.720004C31.352 0.494239 31.1165 0.312678 30.8503 0.188236C30.5841 0.0637941 30.2938 -0.000473344 30 3.82072e-06C29.5327 -0.000909205 29.0798 0.161842 28.72 0.460004C28.5175 0.627902 28.3501 0.834103 28.2274 1.0668C28.1047 1.29949 28.0291 1.55411 28.0049 1.81606C27.9808 2.07801 28.0085 2.34216 28.0866 2.59337C28.1647 2.84457 28.2916 3.07791 28.46 3.28L35.72 12H2C1.46957 12 0.96086 12.2107 0.585787 12.5858C0.210714 12.9609 0 13.4696 0 14C0 14.5304 0.210714 15.0391 0.585787 15.4142C0.96086 15.7893 1.46957 16 2 16Z" fill="white"/>
              </svg>
            </div>
        </div>
        </a>)}
      </div>
      <div className="btn-container">
        <button className="showreel v2" onClick={()=> navigate("/work")}>
          <div>
            <span>Show more</span>
            <span>Show more</span>
          </div>
        </button>
        </div>
    </div>
    <div className="contact-section">
      <div className={`circles${hover? " hoverd": ""}`}>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="c-text" onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} onClick={moveContact}>
        <p>LET’S CHAT</p>
        <p>DROP A LINE</p>
        
      </div>
    </div>
    <Footer/>
  </>)
}