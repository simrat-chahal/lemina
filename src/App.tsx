import React from 'react';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Posts from './Components/Posts';
import PostDetails from './Components/PostDetails';
import Home from './Components/Home';
import {Users} from "./Components/Users"
import { UserDetails } from './Components/UserDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path='/posts' element={<Posts />}></Route>
          <Route path='/posts/:id' element={<PostDetails />}></Route>
          <Route path="/users/:id" element={<UserDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
