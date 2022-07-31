import React from 'react';
import Home from './Home';
import Nav from './Nav'
import Newblog from './Newblog'
import {Routes, Route} from 'react-router-dom'
import Blogdetails from './Blogdetails';


const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Newblog></Newblog>}></Route>
        <Route path='/blogs/:id' element={<Blogdetails></Blogdetails>}></Route>
      </Routes>
    </div>
  );
};

export default App;