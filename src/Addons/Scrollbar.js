import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar'
// import SoftScrollPlugin from './SoftScrollPlugin'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

const Scroll = (scrollerRef) => { 
  
  const scroller = scrollerRef.current
  
  Scrollbar.use(OverscrollPlugin)
  
  const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, delegateTo: document, plugins: { overscroll: true } })
  // bodyScrollBar.track.xAxis.element.remove();

  window.bodyScrollBar = bodyScrollBar
  
  gsap.registerPlugin(ScrollTrigger)
  
  
  ScrollTrigger.scrollerProxy(scroller, {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value
      }
      return bodyScrollBar.scrollTop
    },
    scrollLeft(value) {
      if (arguments.length) {
        bodyScrollBar.scrollLeft = value;
      }
      return bodyScrollBar.scrollLeft;
    },
    fixedMarkers: true
  })
  ScrollTrigger.defaults({ scroller: scroller })

  ScrollTrigger.refresh()
  bodyScrollBar.addListener(ScrollTrigger.update)
}

export default Scroll
