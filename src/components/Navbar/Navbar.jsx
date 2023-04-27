import React from "react";
import {CgMenuLeftAlt} from "react-icons/cg"
import "./Navbar.css";

export default function Navbar(){
    const handleToggle = () => {
        let sidebar = document.querySelector(".nav__links");
        sidebar.classList.toggle("show");
    };

    return (
        <div className="mobile-nav">
           <div className="logo">
                <h2 className="title">save<span>wise</span></h2>
            </div>

            <div className="nav__toggler" onClick={handleToggle}>
               <span><CgMenuLeftAlt /></span>
            </div>
            
            <div className="nav__links">
                <div className="nav-links-links">
                <ul>
                    <li><a href="#">company</a></li>
                    <li><a href="#">learn</a></li>
                    <li><a href="#">stories</a></li>
                    <li><a href="#">help</a></li>
                </ul>

                <div className="btn">
                    <a href="#" className="login">Login</a>
                    <a href="#" className="getstarted">Create free account</a>
                </div>
                </div>

                {/* close nav */}
                <button className="nav__links-close" onClick={handleToggle}>
                    X
                </button>
            </div>
        </div>
    );
}
