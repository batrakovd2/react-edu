import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import './styles/app.css';
import PostList from './components/PostList';

function App() {
  
  const [posts, setPost] = useState([
    {id: 11, title:'JS 1', body: 'Descr'},
    {id: 22, title:'JS 2', body: 'Descr'},
    {id: 33, title:'JS 3', body: 'Descr'}
  ]);


  return (
    <div className="App">
      <form>
        <input type="text" placeholder='Название поста'/>
        <input type="text" placeholder='Описание поста'/>
        <button>Создать пост</button>
      </form>
      <PostList posts={posts} title="Список постов 1"/>
  
    </div>
  );
}

export default App;
