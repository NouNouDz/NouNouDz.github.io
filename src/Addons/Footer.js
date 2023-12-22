import gsap from "gsap"
import { useEffect } from "react"

export default function Footer() {
  useEffect(()=> {
    gsap.fromTo(".footer", {
      borderRadius: "500px 500px 0 0",
      scaleX: .7
    }, {
      scrollTrigger: {
        // trigger: ".footer",
        // start: "top top",
        markers: false,
        endTrigger: ".footer",
        end: "end end",
        scrub: 1,
      },
      borderRadius: "40px 40px 0 0",
      scaleX: 1,
    })

  },[])

  return(
    <div className="footer">
    <div className="f-circle" />
    <div className="f-bg" />
    <div className="f-body">
      <div className="f-logo"><span>Abdennour</span>Mez</div>
      <div className="f-flex">
        <a className="social" href="https://dribbble.com/NouNouDz" target="_blank" rel="noreferrer">
          Dribbble
          <span>@NouNouDz</span>
        </a>
        <a className="social" href="https://discord.com/@mez9" target="_blank" rel="noreferrer">
          Discord
          <span>@mez9</span>
        </a>
        <a className="social" href="https://instagram.com/mez.png" target="_blank" rel="noreferrer">
          Instagram
          <span>@mez.png</span>
        </a>
        <a className="social" href="https://x.com/AbdennourPro" target="_blank" rel="noreferrer">
          Twitter
          <span>@AbdennourPro</span>
        </a>
        <a className="social" href="https://behance.com/abdennourmez" target="_blank" rel="noreferrer">
          Behance
          <span>@abdennourmez</span>
        </a>
      </div>
      <div>
        All Rights Reserved © 2023 | <a href="https://abdennour.me/portfolio" className="link">Portfolio 2020</a>
      </div>
    </div>
  </div>
  )
}