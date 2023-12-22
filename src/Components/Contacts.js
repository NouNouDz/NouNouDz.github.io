import { useEffect, useState } from "react"
import Footer from "../Addons/Footer"
import { Link } from "react-router-dom";
import Button from "../Addons/Button";
import Menu from "../Addons/Menu";
import emailjs from "emailjs-com";

export default function Contacts () {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState();
  const [sent, setSent] = useState(false);
  useEffect(()=> {
    document.body.classList.remove("light")
    window.bodyScrollBar?.setPosition(0,0);
  },[])

  const autoSizer = ( e ) => {
    e.target.rows = e.target.value.split("\n").length;
    setForm({...form, message: e.target.value})
  }
  
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    emailjs.send("service_q84c13j","template_eowqmva",{
      from_name: form.name,
      to_name: form.email,
      message: form.message,
      }, "JLqK3831nG_NK4VJs");
  }
  return (
    <>
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
    <div className="c">

    <h1 className="c-h1">Hey!<br/>Tell me your secrets <img src="https://emojigraph.org/media/apple/face-with-peeking-eye_1fae3.png" className="emoji" alt="Shy emoji"/></h1>

    <h3 className="c-h3">Your secret: </h3>

    <form onSubmit={submit}>
      <input type="name" placeholder="Your name" className="input" required onChange={({target})=> setForm({...form, name: target.value})} value={form?.name || ""}/>
      <input type="email" placeholder="Your email" className="input" required onChange={({target})=> setForm({...form, email: target.value})} value={form?.email || ""}/>
      <textarea placeholder="Tell me your details" className="input" onChange={autoSizer} rows={1} required value={form?.message || ""}/>
      <div className="btn-container">
      <button className={`showreel v2 ${sent? "green":""}`} type="submit" disabled={sent}>
          <div>
            <span>{!sent? "Send": "Successfully sent"}</span>
            <span>{!sent? "Send": "Successfully sent"}</span>
          </div>
        </button>
        </div>
    </form>
    </div>
    <Footer/>
    </>
  )
}