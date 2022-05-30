import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './Home';
import KeyFeature from './KeyFeature';
import Pricing from './Pricing';
import Services from './Services';
import Demo from './Demo';
import Navbar from './Navbar/Navbar';
import "./App.css";

const App = () => {
  return (
<div className='container'>

    <Router>
    <Navbar/>
<Routes>
     <Route path='/' exact element={<Home/>} />
    <Route path='/features' element={<KeyFeature/>} />
    <Route path='/pricing' element={<Pricing/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/demo' element={<Demo/>} />

</Routes>
    </Router>
</div>
  )
}

export default App;
