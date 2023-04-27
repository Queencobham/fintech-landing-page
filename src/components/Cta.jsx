import React from "react"
import Appstore from "../assets/app-store-.svg"
import Googleplay from "../assets/google-play.svg"
import Mobile from "../assets/mobile.png"

export default function(){
    return(
        <div className="cta container">
            <div className="cta-content">
                <h3>get started with savewise</h3>
                <p>Keep track of your saving and investment right from your phone</p>
                <div className="app-store">
                    <img src={Appstore} alt="appstore" />
                    <img src={Googleplay} alt="Googleplay" />
                </div>
            </div>

            <div className="cta-img">
                <img src={Mobile} alt="mobile-phone" />
            </div>
        </div>
    )
}