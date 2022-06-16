import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Post from '../pages/Post';
import Error from '../pages/Error';
import Navbar from '../components/UI/navbar/Navbar';
import {routes} from '../router'

const AppRouter = () => {
    return(
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="about" element={<About />} />
            <Route exact path="posts" element={<Posts />} />
            <Route exact path="post/:id" element={<Post />} /> 
            <Route path="*" element={ <Error /> } />
          </Routes>
        </BrowserRouter>
    );
} 

export default AppRouter;