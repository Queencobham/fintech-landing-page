import React from "react"

export default function Safety(){
    return(
        <div className="safety-section container">
            <div className="safety-heading">
                <h3 className="title">Keeping your money safe is our business.</h3>
                <p>Trust is our currency. We are committed to the security of your money and the protection of your account.</p>
                <a href="#">learn more</a>
            </div>

            <div className="safety-cards">
              <div className="first-card">
                <h4 className="title">bank-grade security</h4>
                <p>Our payment processors are PCI-DSS compliant to ensure security of your data electronically.</p>
              </div>

              <div className="second-card">
                <h4 className="title">regulatory compliance</h4>
                <p>Savewise is a duly registered fund manager with the Securities and Exchange Commission (SEC) of Nigeria. All our activities are in full compliance with regulatory requirements to the ultimate protection of our clients.</p>
              </div>
            </div>
        </div>
    )
}