import React from "react"
import {FaFacebookSquare, FaTwitterSquare, FaLinkedin} from "react-icons/fa"

export default function Footer(){
    return(
        <div className="footer container">
            <div className="content">
                <h4 className="title">company</h4>
                <ul>
                    <a href="#">about</a>
                    <a href="#">careers</a>
                    <a href="#">contact</a>
                </ul>
            </div>

            <div className="content">
                <h4 className="title">resources</h4>
                <ul>
                    <a href="#">blog</a>
                    <a href="#">support</a>
                    <a href="#">FAQs</a>
                    <a href="#">help center</a>
                </ul>
            </div>

            <div className="content">
                <h4 className="title">legal</h4>
                <ul>
                    <a href="#">terms</a>
                    <a href="#">privacy</a>
                    <a href="#">security</a>
                </ul>
            </div>

            <div className="content">
                <div className="social">
                    <span><FaFacebookSquare /></span>
                    <span><FaTwitterSquare /></span>
                    <span><FaLinkedin /></span>
                </div>
                <p>contact@savewise.com</p>
                <p>+234 08098282978</p>
            </div>
        </div>
    )
}