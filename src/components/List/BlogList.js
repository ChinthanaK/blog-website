import React from 'react';
import BlogListItems from './BlogListItems';
import classes from "./BlogList.module.css"
const BlogList = (props) => {
  return <div className={classes.listContainer}>
    {
        props.posts.map((item, index) =>{
           return  <BlogListItems key={index} index={index} item={item}/>
        })
    }
  </div>
}

export default BlogList
