import React, { useEffect, useState } from 'react';
import './styles/app.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import { useFetching } from './hooks/useFetching';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';

function App() {
  
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });
 
  useEffect(() => {
    fetchPosts();
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1> Произошла ошибка ${postError}</h1>}
      {isPostLoading 
        ? <Loader />
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1"/>
      }
      

    </div>
  );
}

export default App;
