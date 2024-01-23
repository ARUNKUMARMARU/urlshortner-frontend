import React, { useState } from 'react';
import authService from '../service/auth';

function Resetpassword() {

    const [email, setEmail] = useState("");

    const handleReset = (e)=>{
        e.preventDefault();

        const mailid = {email};
        authService.resetpassword(mailid);

        setEmail("");
    }
  return (
    <div>
        <form onSubmit={handleReset}>
            <div>
                <label>Enter registerd mail id &nbsp;
                <input type="email" 
                placeholder='email...'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                </label>
            </div> <br />

            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Resetpassword;