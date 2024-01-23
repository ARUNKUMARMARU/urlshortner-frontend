import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../service/auth';
import Resetpassword from './Resetpassword';


function Signin() {
  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (e)=>{
    e.preventDefault();

    const user = {
      username : username,
      password : password
    }
    
    authService.signin(user)

    setUsername("");
    setPassword("");

    navigate('/urlshort')
  }
  return (
    <div>

        <p>SIGNIN</p>

        <form onSubmit={handleSignin}>

          <div>
          <label>Username &nbsp;
            <input type="email" 
            placeholder='username...'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}/>
          </label>
          </div> <br/>

          <div>
          <label>Password &nbsp;
            <input type="text" 
            placeholder='password...'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
          </label><br />

          <Link to='/reset password'>forgot password?</Link>
          </div> <br /><br />

         <div>
         <button type='submit'>Login</button>
         </div>

        </form>

        <p>Don't have accout? <Link to='/register'>Signup</Link></p>
    </div>
  )
}

export default Signin;