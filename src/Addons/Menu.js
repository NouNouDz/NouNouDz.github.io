import { Link } from "react-router-dom";
import { gsap } from "gsap";
import React from "react";
import Button from "./Button";

export default function Menu ({ open, setOpen }) {
  React.useEffect(()=> {
    if(!open) return;
    gsap.fromTo('.bg', {
      x: "100%"
    }, {
      x: 0
    })
    gsap.fromTo('.a-1',{
      opacity: 0,
    }, {
      opacity: 1,
      duration: .5
    })
    gsap.fromTo('.a-2',{
      opacity: 0,
      y: -100,
    }, {
      opacity: 1,
      y: 0,
      duration: .5,
    })
    gsap.fromTo('.a-3',{
      opacity: 0,
      y: -100,
    }, {
      opacity: 1,
      y: 0,
      duration: .5,
      delay: .5,
    })
    gsap.fromTo('.a-4',{
      opacity: 0,
      y: -100,
    }, {
      opacity: 1,
      y: 0,
      duration: .5,
      delay: 1,
    })
    window.addEventListener("keydown", (e)=> e.key === "Escape" && close())
  },[open])
  function close () {
    gsap.to('.bg-s', {
      opacity: 0,
      duration: .1,
    })
    gsap.to('.menu-f', {
      x: "100%",
      delay: .2,
      onComplete: () => setOpen(false)
    })
    
  }
   return (
    <div>
    {open && 
    <div className="menu-f">
      <div className="bg"/>
      <div className="bg-s" onClick={()=> close()}/>
      <Button className="close-btn" parentClass="close-parent" onClick={()=> close()}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </Button>
      <div className="main">
      <div className="links">
        <label>Navigation</label>
        <Link to="/" className="a-1">Home</Link>
        <Link to="/work" className="a-2">Work</Link>
        <Link to="/" onClick={ (event) => event.preventDefault() } className="a-3">Blog</Link>
        <Link to="/contacts" className="a-4">Contact</Link>
      </div>
      <div className="links">
        <label>Contact</label>
        <a href="https://dribbble.com/NouNouDz" target="_blank" rel="noreferrer">Dribbble</a>
        <a href="https://discord.com/@mez9" target="_blank" rel="noreferrer">Discord</a>
        <a href="https://instagram.com/mez.png" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://x.com/AbdennourPro" target="_blank" rel="noreferrer">Twitter</a>
      </div>
      </div>
    </div>
    }
    </div>
  )
}