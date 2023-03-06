import React, { useState } from 'react'
import "./App.css"
import "./styling/Display.css";
import "./styling/Navbar.css";
import "./styling/Ordernow.css";
import "./styling/Home.css";
import "./styling/Footer.css";
import "./navlinksstyle/signin.css"
import "./navlinksstyle/about.css"
import "./navlinksstyle/feedback.css"
import "./navlinksstyle/cart.css"
import "./styling/Media.css"

import Display from "./components/Display"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Ordernow from "./components/Ordernow"
import Footer from "./components/Footer"
import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import SIGNIN from './navlinks\'-pages/sign-in';
import About from "./navlinks\'-pages/About"
import Main from './components/Main';
import Feedback from "./navlinks'-pages/Feedback"
import Cart from "./navlinks'-pages/Cart"
import Ads from './components/ads';

function App() {
  setTimeout( function(){
      setOpen(true)
  }, 10000)
  const [open , setOpen] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        {/* <Ads open ={open} setOpen = {setOpen}/> */}
        <Routes>
        <Route path='/' element ={<Main/>}/>
        <Route path='/signin' element ={<SIGNIN/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/feedback' element ={<Feedback/>}/>
        <Route path='/cart' element ={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
