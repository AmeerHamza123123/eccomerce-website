import React from 'react'

import  x from "../images/123.jpg"

export default function Display() {
  return (
    <>
      <div className='display'>
          <div className="displaycontent">
          <div className='displayspans'>
            <span> <h3 className='test'>Welcome to</h3></span>
            <span className='displayspan2'> <h3 className='h3'>ABC Mart</h3></span>
          </div>
          <div className='displayp'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolorem architecto temporibus porro quo mollitia odit, laboriosam id quisquam sed similique alias saepe eos magni provident pariatur explicabo, autem maiores.</p>
            <a href={x} download>download</a>

            </div>
          </div>
          
          </div>
    </>

  )
}
