import React, { useState } from 'react';
import './styles/app.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  
  const [posts, setPosts] = useState([
    {id: 11, title:'JS 1', body: 'Descr'},
    {id: 22, title:'JS 2', body: 'Descr'},
    {id: 33, title:'JS 3', body: 'Descr'}
  ]);
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPost([...posts].sort((a, b) +))

  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={"Сортировка по"}
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>

      {posts.length !== 0 
        ? <PostList remove={removePost} posts={posts} title="Список постов 1"/>
        : <h1 style={{textAlign: 'center'}}> Посты не найдены </h1>
      }
      
  
    </div>
  );
}

export default App;
