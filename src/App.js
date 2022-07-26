import { useState,useEffect } from 'react';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './app.css';
import {Issue} from './Issue';
import {Main} from './Main';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
      
      <Routes>
      <Route path='/' exact={true} element={<Main/>}/>
        <Route path='/issue' element={<Issue/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
