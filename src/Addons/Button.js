import { gsap } from "gsap";
import { useEffect, useId, useRef } from "react"

export default function Button ({ children, isMagnent = true, style={width: 100, height: 100}, className, parentClass ="", ...props }) {
  const ref = useRef()
  const id = useId()

  useEffect(()=> {


    ref.current.addEventListener("mousemove", (e) => {
      const y = (e.clientY - ref.current.offsetTop - style.height / 2) * .2;
      const x = (e.clientX - ref.current.offsetLeft - style.width / 2) * .2;
      move(x, y);
    })

    ref.current.addEventListener('mouseleave', ()=> move(0, 0))

    const move = (x, y) => gsap.to('#'+id.replace(/:/g, ""), {
        x: x,
        y: y,
        force3D: true,
        overwrite: true,
        duration: 0.6
      });

  }, [])
  return (
    <div data-magnent={isMagnent} ref={ref} style={style} className={parentClass}>
    <button id={id.replace(/:/g, "")} className={className} {...props}>
      {children}
    </button>
    </div>
  )
}