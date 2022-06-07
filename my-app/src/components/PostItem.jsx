import React from "react";

const PostItem = (props) => {
    console.log(props)
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id} {props.post.title}</strong>
                <div>
                    {props.post.title}
                </div>
            </div>
            <div className="post_btns">
                <button>Удалить</button>
            </div>
        </div>
    );
}

export default PostItem;