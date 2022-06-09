import React, { useState } from 'react';
import './styles/app.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  
  const [posts, setPosts] = useState([
    {id: 11, title:'JS 1', body: 'Descr'},
    {id: 22, title:'JS 2', body: 'Descr'},
    {id: 33, title:'JS 3', body: 'Descr'}
  ]);

  const createPost = (newPost) => {
    setPosts(...posts, newPost)
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title="Список постов 1"/>
  
    </div>
  );
}

export default App;
