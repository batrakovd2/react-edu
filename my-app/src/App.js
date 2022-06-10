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
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <select>
          <option value="value1">По названию</option>
          <option value="value2">По описанию</option>
        </select>
      </div>

      {posts.length !== 0 
        ? <PostList remove={removePost} posts={posts} title="Список постов 1"/>
        : <h1 style={{textAlign: 'center'}}> Посты не найдены </h1>
      }
      
  
    </div>
  );
}

export default App;
