import React from "react"
import { BsFillRocketTakeoffFill, BsSave2Fill } from "react-icons/bs"
import { GiReceiveMoney } from "react-icons/gi"

export default function Steps(){
    return(
        <div className="steps-session container">
            <div className="steps-heading">
              <h3 className="title">Get a little  richer each day</h3>
            </div>

           <div className="steps-text">
            <div className="text">
              <span><BsFillRocketTakeoffFill /></span>
              <h4 className="title">Build your savings</h4>
              <p>Consistently automate your savings while setting realistic goals.</p>
              <a href="#">learn more</a>
            </div>

            <div className="text">
              <span><BsSave2Fill /></span>
              <h4 className="title">Invest deliberately</h4>
              <p>Invest in our diverse range of assets that grow in value over time.</p>
              <a href="#">learn more</a>
            </div>
            
            <div className="text">
              <span><GiReceiveMoney /></span>
              <h4 className="title">Stay rich</h4>
              <p>Protect your wealth by managing risk, seeking advice and making smart financial decisions.</p>
              <a href="#">learn more</a>
            </div>
           </div>
        </div>
    )
}