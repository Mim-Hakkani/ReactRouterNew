import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div>
            {posts.map(post=><span key={post?.id}>

                <Link to={`${post.id}`} style={{
                    textDecoration:'none'
                }}> {post?.id} </Link>
            </span>)}

             <Outlet></Outlet>
        </div>
    );
};

export default Posts;