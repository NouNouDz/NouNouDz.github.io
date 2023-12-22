import { useEffect, useState } from "react";
import Footer from "../Addons/Footer";
import gsap from "gsap";
import Menu from "../Addons/Menu";
import { Link } from "react-router-dom";
import Button from "../Addons/Button";
import work from "../work";

export default function Work() {
  const [open, setOpen] = useState(false);
  
  useEffect(()=> {
    document.body.classList.add("light")
    window.bodyScrollBar?.setPosition(0,0);

    gsap.fromTo(".s-show",{
      y: "-100%",
      skewX: 20,
    }, {
      y: 0,
      skewX: 0,
    })
    gsap.fromTo(".s-case",{
      y: "-100%",
      skewX: -20,
    }, {
      y: 0,
      skewX: 0,
      delay: .15,
    })

    gsap.to(".show",{
      ease: "none",
      scrollTrigger: {
        trigger: '.show',
        scrub: true,
        start: "top top",
        pin: true,
        pinSpacing: false,
        endTrigger: ".h-200",
        end: "center center",
      }
    })

    gsap.fromTo(".s-show", {
      y: 0,
      skewX: 0,
    }, {
      y: "100%",
      skewX: -20,
      scrollTrigger: {
        trigger: ".h-200",
        start: "top top",
        toggleActions: "restart reverse restart reverse"

      }
    })
    gsap.fromTo(".s-case", {
      y: 0,
      skewX: 0,
    }, {
      y: "100%",
      skewX: 20,
      delay: .15,
      scrollTrigger: {
        trigger: ".h-200",
        start: "top top",
        toggleActions: "restart reverse restart reverse"

      }
    })
  },[])
  return (<>
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
    <div>
   <h1 className="show"><span className="s-show">SHOW</span><span className="s-case">CASE</span></h1>
   </div>
   <div className="h-200">
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
   <Footer/>
  </>)
}