import React, { useState } from 'react';
import authService from '../service/auth';

function Urlshort() {
    const [geturl, setGeturl] = useState("");
    const [shortURL, setShortURL] = useState("");

    const handleShorturl = async(e)=>{
        e.preventDefault();
        
        const longUrl = {geturl}
        let res = await authService.getShortUrl(longUrl)
console.log(res)
        setShortURL(res)
    }
  return (
    <div>
        <form onSubmit={handleShorturl}>
            <div>
                <label htmlFor="">Enter your long url &nbsp;
                <input type="text" 
                placeholder='longurl...'
                value={geturl}
                onChange={(e)=>setGeturl(e.target.value)}/>
                </label>            
            </div><br />

            <div><button type='submit'>create short url</button></div>
        </form>

       <p>{"your shortned url is : "} {shortURL}</p>
    </div>
  )
}

export default Urlshort;