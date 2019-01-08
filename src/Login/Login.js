import React from 'react'
import './Login.css';
import TextBox from './Components/TextBox.js';
import Button from './Components/Button.js';
const Login = () => {
  return (
    <div>
 {/* Username Form */}
 <div >
 <form>
   <fieldset className="username">
     Username
   </fieldset>
      <input className="inputform" type="text" username="username"/>
 </form>
 </div>
      <TextBox/>



      
{/*Log in button*/}

<div className="whole">
<button href="" className="button">Done</button>
</div>
      <Button/>


      
      </div>


  )
}

export default Login;