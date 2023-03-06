import React from 'react'
import bu from"../images/categoryjacket.jpg"
import par from "../images/categoryshoe.jpg"
import  piz from "../images/categoryshirt.jpg"

// import "./images /panda.jpg"
// import "./images /paratha roll.jpg"


export default function Home() {
  return (
    
    <div className='Home'>
        <div className="headingx">
        <h1>ORDER NOW!</h1>
        </div>
    <div className='home1'>
      <div className="images" >
        <img src={bu} alt="jacket image" style={{animationDelay:'0.4s'}} />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo suscipit quam quas corporis odio incidunt.</p>
      </div>

      <div className="images">
        <img src={par} alt="shoe image" style={{animationDelay:'0.7s'}} />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo suscipit quam quas corporis odio incidunt.</p>
      </div>

      <div className="images">
        <img src={piz} alt="shirt image" style={{animationDelay:'1.1s'}} />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo suscipit quam quas corporis odio incidunt.</p>
      </div>
    </div>
    </div>
  )
}
