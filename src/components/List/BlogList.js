import React,{useContext} from 'react';
import BlogListItems from './BlogListItems';
import BlogContext from '../../store/BlogContext';
import classes from "./BlogList.module.css";

const BlogList = (props) => {
    const {blogList} = useContext(BlogContext); 
  return <div className={classes.listContainer}>
    {
       blogList.length>0 && blogList.map((item, index) =>{
           return  <BlogListItems key={index} index={index} item={item}/>
        })
    }
  </div>
}

export default BlogList
