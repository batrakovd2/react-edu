import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/app.css';
import PostItem from './components/PostItem';

function App() {
  
  return (
    <div className="App">
        <PostItem value={"222"}/>
        <PostItem/>
        <PostItem/>
    </div>
  );
}

export default App;
