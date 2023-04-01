import Logo from "assets/img/logo_2.png";
import "./style.css";
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Navbar(){

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(

       <header>
        <img src={Logo} alt="Logo" className="logo-navbar"></img>

        <i className={"bi bi-list"} onClick={handleClick}></i>
        <nav id="navbar" className={click ? "navbar-active" : "dis"}>
            <i className={"bi bi-x"} onClick={handleClick}></i>
            <a href="#" className="navbar-links" onClick={()=>{}}>Home</a>
            <a href="#" className="navbar-links" onClick={()=>{}}>Sobre</a>
            <a href="#" className="navbar-links" onClick={()=>{}}>Missão</a>
            <a href="#" className="navbar-links" onClick={()=>{}}>Time</a>
            <a href="#" className="navbar-links" onClick={()=>{}}>Contato</a>

        </nav>
       </header>
    );
}

export default Navbar;