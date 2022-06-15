import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const Post = () => {
    const params = useParams();
    //console.log(params);
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getPostById(params.id);
        setPost(response.data);
    });
    useEffect(() => {
        fetchPostById()
    }, []);
    return(
        <div>
            <h1>
                Пост c ID = {params.id}
                {isLoading
                    ? <Loader />
                    : <div>{post.id}  {post.title}</div>
                }
                
            </h1>
        </div>
    );
}

export default Post;