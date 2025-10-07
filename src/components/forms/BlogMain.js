import React, { useState } from 'react';
import classes from "./BlogMain.module.css";
import Button from '../UI/Button';
import BlogPost from './BlogPost';
const BlogMain = () => {
    const [show, setShow] = useState(false);
    const showBlogPostHandler = ()=>{
        setShow(true);
    }
    const hideBlogPostHandler = () =>{
        setShow(false)
    }
  return (
    <div className={`${classes.body}`}>
      <h1>Blog Website</h1>
      <Button onClick={showBlogPostHandler}>Add New Blog</Button>
      {show && <BlogPost onClose={hideBlogPostHandler}/>}
      
    </div>
  )
}

export default BlogMain
