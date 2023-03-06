import React from 'react'

const Ads = ({open , setOpen}) => {
  return (
     <div className= {open ? 'ads' : "ads closed"}>
         <img src='https://mobilemonkey.com/wp-content/uploads/2020/09/free-advertising-sites.png' />
         <i onClick={()=>setOpen(false)} class="fa-solid fa-circle-xmark"></i>
     </div>
  )
}

export default Ads