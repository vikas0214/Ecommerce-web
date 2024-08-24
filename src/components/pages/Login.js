import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../App.css'
import { Button } from 'react-bootstrap'

function Login() {
  return (
    <div className='main-wrapper'>
        <div className='wrapper-form'>
    <form action='' method='put'> 
    <input className='inputfields'   type="email" placeholder='johnsmith@gmail.com' name='email'/>
    <input className='inputfields' type='password' name='password' placeholder='password'/>
    <Button>Login</Button>
    <p>Already have an account<NavLink to={'/register'} className={"navItem"} style={{color:'blue',marginLeft:'2px'}}>Login</NavLink></p>
    </form>
    
</div></div>
  )
}

export default Login