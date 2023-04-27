import React from "react"
import heroImg from "../assets/hero-img.jpeg"

export default function Hero(){
    return(
        <div className="hero container">
            <div className="hero-content">
             <h2 className="title">Save and invest for the future.</h2>
             <p>We will help you achieve your financial goals by helping you save and invest with ease.</p>
             <a href="#" className="getstarted">create free account</a>
            </div>

            <div className="hero-img">
              <img src={heroImg} alt="woman smiling" />
            </div>
        </div>
    )
}