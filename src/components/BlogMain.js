import React from 'react';
import classes from "./BlogMain.module.css";

const BlogMain = () => {
  return (
    <div className={`${classes.body}`}>
      <h1>Blog Website</h1>
      <button>Add New Blog</button>
      <hr></hr>
    </div>
  )
}

export default BlogMain
