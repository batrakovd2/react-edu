import React, { useState, useRef } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import './styles/app.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  
  const [posts, setPost] = useState([
    {id: 11, title:'JS 1', body: 'Descr'},
    {id: 22, title:'JS 2', body: 'Descr'},
    {id: 33, title:'JS 3', body: 'Descr'}
  ]);

  const [title, setTitle] = useState('111');
  const bodyInputRef = useRef()

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title)
    console.log(bodyInputRef.current.value)
  }


  return (
    <div className="App">
      <form>
        <MyInput 
        type="text"
         placeholder='Название поста' 
         value={title}
         onChange={e => setTitle(e.target.value)}/>
        <MyInput 
        type="text" 
        placeholder='Описание поста'
        ref={bodyInputRef}/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1"/>
  
    </div>
  );
}

export default App;
