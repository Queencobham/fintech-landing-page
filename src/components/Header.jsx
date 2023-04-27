import React from "react"

export default function Header(){
    return(
        <>
            <nav className="container">
                <div className="logo">
                    <h2 className="title">save<span>wise</span></h2>
                </div>

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
            </nav>
        </>
    )
}