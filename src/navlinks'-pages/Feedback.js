import React from 'react'

export default function Feedback () {
  return (
    <>
    <div className="formContainer">
    <div className="heading">
        YOUR EXPERIENCE HERE!
    </div>
    <div className="description">
        <p> Please fill the form below to support us.</p>
    </div>
    <div className="form">
        <form id="form">
            <label for="name">Name</label>
            <input name="name" type="text" id="name" />
            <label for="email">Email</label>
            <input name="email" type="email" id="email" />
            <label for="designation">Your experience in using our online Mart?</label>
            <input name="designation" type="text" id="designation" />
            <label for="feedback" >Feedback</label>
            <textarea name="feedback" placeholder='min-1 max-5' id="feedback"></textarea>
            <button type="submit" className='submit'>SUBMIT</button>
        </form>
    </div>

    <div id="loading">
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
    </div>

    <div id="status">

    </div>

</div>

    </>
  )
}
