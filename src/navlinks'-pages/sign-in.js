import React from 'react'
import bu from"../images/123.jpg"
export default function SIGNIN() {
  return (
    <div className='firstdiv'>
      <div className="imgcontainer">
        <img src={bu} alt="Avatar" className="avatar" />
      </div>

      <div className="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <button type="submit">Login</button>
        <label>
          {/* <input type="checkbox" defaultChecked name="remember"/> */}
        </label>
      </div>

      <div className="container" >
        <button type="button" className="cancelbtn">Cancel</button>
       
      </div></div>

  )
}
