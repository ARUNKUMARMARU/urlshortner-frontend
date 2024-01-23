import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './component/Home';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Resetpassword from './component/Resetpassword';
import Urlshort from './component/Urlshort';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/reset password' element={<Resetpassword/>}/>
            <Route path='/urlshort' element={<Urlshort/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;