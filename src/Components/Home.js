import "../Dist/style.css"
import { gsap } from "gsap";
import Scrollbar from "../Addons/Scrollbar";

import { useNavigate, Link } from "react-router-dom";
import React from "react";
import Menu from "../Addons/Menu";

export default function Home() {
  const [hover, setHover] = React.useState(false)
  let [open, setOpen] = React.useState(false)
  const navigate = useNavigate();
  let scroller = React.useRef()

  const move = (s, x, y)=> gsap.to(document.querySelector(".circle"), .1, {scale: s, x, y, duration: 0});

  React.useLayoutEffect(()=> {
    Scrollbar(scroller)
    let sections = gsap.utils.toArray(".panel");
    if(localStorage["theme"] === "light") document.body.classList.add("light")


    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: true,
          pinSpacing: true,
          markers: true,
          end: "+=" + (document.querySelector(".container").offsetWidth - window.innerWidth),
        }
      });

    gsap.fromTo(".footer-section", {
      borderRadius: "1000px 1000px 0 0",
      scaleX: .7
    }, {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top middle",
        end: "+=400px",
        scrub: 1,
      },
      borderRadius: "0 0 0 0",
      scaleX: 1,
    })

    gsap.to(".container", {
      background: "#0075FF",
      duration: .4,
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom bottom"
      }
    })
  },[])
  React.useEffect(()=> {
    function circ (e) {
      let ele = document.querySelector(".circle")
      move(.2, e.clientX - ele.offsetWidth/4 , e.clientY - ele.offsetHeight/4 - 200 )
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
    gsap.to(document.querySelectorAll(".circle")[0], {scale: 10, duration: 1, onComplete: ()=> navigate("/contact")});
    gsap.to(document.querySelector(".text"), {x: -100, opacity: 0, duration: .9});
  }

  const changeTheme = () => {
    const theme = localStorage["theme"]
    if(theme === "dark" || !theme) {
      localStorage["theme"] = "light"
      document.body.classList.add("light")
    }
    else {
      localStorage["theme"] =  "dark"
      document.body.classList.remove("light")
    }
  }

  return(
  <>
  <div ref={scroller} style={{maxHeight: "100vh"}}>
    <Menu open={open} setOpen={setOpen}/>
    <div className="nav-bar">
      <Link to="/" className="logo">Govncy</Link>
      <div className="links">
        <div className="theme">
          <button onClick={changeTheme}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="9" stroke="white" strokeWidth="2"/>
              <rect x="15" width="2" height="5" rx="1" />
              <rect y="17.063" width="2" height="5" rx="1" transform="rotate(-90 0 17.063)" />
              <rect x="6.1178" y="28.6147" width="2" height="5" rx="1" transform="rotate(-140 6.1178 28.6147)" />
              <rect x="4.7699" y="4.69479" width="2" height="5" rx="1" transform="rotate(-45 4.7699 4.69479)" />
              <rect x="15" y="27" width="2" height="5" rx="1" />
              <rect x="27" y="17" width="2" height="5" rx="1" transform="rotate(-90 27 17)" />
              <rect x="24.2003" y="8.56415" width="2" height="5" rx="1" transform="rotate(-140 24.2003 8.56415)" />
              <rect x="22.2803" y="25.2469" width="2" height="5" rx="1" transform="rotate(-45 22.2803 25.2469)" />
            </svg>
          </button>
        </div>
        <div className="lang">
          <button>AR</button>|<button className="active">EN</button>
        </div>
        <button className="menu" onClick={()=> setOpen(true)}>
          <div className="burger-lines"/>
          <div className="burger-lines"/>
          <div className="burger-lines"/>
        </button>
      </div>
    </div>
    <div className="header-section">
      {/* <img src={require('../Dist/blur.svg').default} alt="Blur colors" className="blur" /> */}
      <img src='https://cdn.discordapp.com/attachments/954451770183143424/980908980094267412/unknown.png' alt="Blur colors" className="blur" />
      <h1 className="title">Start your own business at Govncy</h1>
      <button className="showreel">SHOWREEL <svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 8H33M33 8L26 1M33 8L26 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="h-line"/>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At id felis luctus nisl et magnis. Sit vitae lacus turpis rhoncus sagittis, cras ultricies. Massa in adipiscing diam quam dictum. Vel mauris integer ligula sem magna tincidunt mauris diam. Ut vitae euismod neque, turpis habitasse quisque habitant ut arcu. Ut ullamcorper elit porta vel. Facilisis ac dolor enim quisque sit sit. </p>
    </div>
    <h1 className="outter">GOVNCY</h1>

    <div className="container">
      <div className="panel">
        <h1>WEBSITES</h1>
      </div>
      <div className="panel">
        <h1>APPLICATIONS</h1>
      </div>
      <div className="panel">
        <h1>BRANDING</h1>
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
        <p>DROP US A LINE</p>
        
      </div>
    </div>
    <div className="footer-section">
      <div className="left-side">
        <label className="title">Contact</label><br/>
        <label className="email">contact@govncy.com</label>
        <p className="add">3517 W. Gray St. Utica, Pennsylvania 57867</p>
      </div>
      <div className="right-side">
        <a href="/#">Dribbble</a>
        <a href="/#">Discord</a>
        <a href="/#">Facebook</a>
        <a href="/#">Twitter</a>
        <a href="/#">Instagram</a>
        <a href="/#">LinkedIn</a>
      </div>
    </div>
    </div>
  </>)
}