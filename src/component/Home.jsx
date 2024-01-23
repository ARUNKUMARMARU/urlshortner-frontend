import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <p>Welcome to urlshortner web app</p>
        <p>Kindly <Link to='/signin'>signin</Link> to use our service</p>
        <p>Don't have an account <Link to='/register'>clickhere</Link> for register</p>
    </div>
  )
}

export default Home;