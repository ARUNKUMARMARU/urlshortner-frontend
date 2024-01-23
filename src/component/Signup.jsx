import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Signin from './Signin';
import authService from '../service/auth';

function Signup() {

    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname ] = useState("")
    const [password, setPassword] = useState("")

    const handleSignup = (e)=>{
        e.preventDefault();

        const user = {
            username : username,
            firstname : firstname,
            lastname : lastname,
            password : password
        }
        authService.signup(user);

        setUsername("");
        setFirstname("");
        setLastname("");
        setPassword("");
    }

  return (
    <div>
        <p>Compleate the form below for Signup</p>

      <form onSubmit={handleSignup}>

     <div>
     <label>
        Username (email) &nbsp;
        <input type='email'
        placeholder='email...'
        name='username'
        value={username}
        onChange={(e)=>
            setUsername(e.target.value)
        }
        />
       </label> 
     </div> <br/>

       <div>
       <label>
        Firstname &nbsp;
        <input
        placeholder='firstname...'
        name='firstname'
        value={firstname}
        onChange={(e)=>
            setFirstname(e.target.value)
        }
        />
       </label> 
       </div><br/>

      <div>
      <label>
       Lastname &nbsp;
        <input
        placeholder='lastname...'
        name='lastname'
        value={lastname}
        onChange={(e)=>
            setLastname(e.target.value)
        }
        />
       </label>
      </div><br/>

       <div>
       <label>
        Password &nbsp;
        <input
        placeholder='password...'
        name='password'
        value={password}
        onChange={(e)=>
            setPassword(e.target.value)
        }
        />
       </label>
       </div><br/>

       <button type='submit'>Done !</button><br />

      </form>
      <p>Id activation link will send your mail id, Kindly visit your email account and click that link to activate your account </p><br />

      <p>Already a member? <Link to='/signin'>signin</Link></p>
    </div>
  )
}

export default Signup;