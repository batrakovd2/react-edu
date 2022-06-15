import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const Post = () => {
    const params = useParams();
    //console.log(params);
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getPostById(params.id);
        setPost(response.data);
    });
    const [fetchComments, isCommentLoading, errorComment] = useFetching(async () => {
        const response = await PostService.getPostCommentsById(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById();
        fetchComments();
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
            <h1>
                Комментарии
            </h1>
            {isCommentLoading
                ? <Loader />
                : <div>
                    {comments.map(comm => 
                        <div style={{marginTop: 15}}>
                            <h3>{comm.email}</h3>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>

            }
        </div>
    );
}

export default Post;