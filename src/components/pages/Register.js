import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
function Register() {
  return (
    <div className='main-wrapper'>
        <div className='wrapper-form'>
    <form action='' method='put'> 
    <input className='inputfields' type='text' placeholder='@username' name='username'/>
    <input className='inputfields'  type="email" placeholder='johnsmith@gmail.com' name='email'/>
    <input className='inputfields' type='password' name='password' placeholder='password'/>
    <Button>Sign up</Button>
    <p>Need an account <NavLink to={'/login'} className={"navItem"} style={{color:'blue',marginLeft:'2px'}}>Sign up</NavLink></p>
    </form>
    
</div></div>
  )
}

export default Register