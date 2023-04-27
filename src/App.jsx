import React from "react"
import Header from "./components/Header"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero"
import Safety from "./components/Safety"
import Steps from "./components/Steps"
import Testimonial from "./components/Testimonial"
import Cta from "./components/Cta"
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Safety />
      <Steps />
      <Testimonial />
      <Cta />
      <Footer />
    </>
  )
}
export default App
