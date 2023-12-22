import Matter from 'matter-js'
import { useEffect, useLayoutEffect, useRef } from 'react'

export default function Falling() {
  let matter = useRef()

  useLayoutEffect(()=>{
    if(document.querySelector("canvas")) return;
    var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies
    var engine = Engine.create({
    });
    //create renderer on screen
    var render = Render.create({
    element: matter.current,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: 400,
      wireframes: false,
      background: "transparent"
    }
    });
    var boxes = []
    for(let i=0; i < 15; i++) boxes.push(Bodies.rectangle(Matter.Common.random(0, window.innerWidth), Matter.Common.random(0, 400), 230, 40, {
      chamfer: 20, render: {
        sprite: {
          texture: createImage(),
        }
    }
    }))

    
    World.add(engine.world, [
      Bodies.rectangle(0, 410, window.innerWidth*2, 10, { isStatic: true, fillStyle: "transparent"  }),
      Bodies.rectangle(0, -10, window.innerWidth*2, 10, { isStatic: true, fillStyle: "transparent" }),  
      Bodies.rectangle((window.innerWidth)+10, 0, 10, 400*2, { isStatic: true, fillStyle: "transparent" }), 
      Bodies.rectangle(-10, 0, 10, 400*2, { isStatic: true }),
      ...boxes
    ]);
    Matter.Runner.run(engine);
    Render.run(render);

    var mouse = Matter.Mouse.create(render.canvas),
    mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);


    Matter.Composite.add(engine.world, mouseConstraint);

  }, [])

  function createImage() {
    let text = ["Web development", "Web design", "User interface", "User experience", "Front-end", "Back-end", "Mobile", "Prototype", "Graphic design"][Math.floor(Math.random()*9)]
    let drawing = document.createElement("canvas");

    drawing.width = '230'
    drawing.height = '40'

    let ctx = drawing.getContext("2d");

    ctx.fillStyle = "#D9D9D9";
    ctx.beginPath();
    ctx.roundRect(0, 0, 230, 40, 20);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#000";
    ctx.font = "16px Montserrat";
    ctx.textAlign = "center";
    ctx.fillText(text, 230/2, 25);
    // ctx.strokeText("Canvas Rocks!", 5, 130);

    return drawing.toDataURL("image/png");
}
  return(<>
  <div ref={matter}/>
  
  </>

  )
}