import React,{useContext, useState} from 'react';
import BlogPost from '../forms/BlogPost';
import Button from '../UI/Button';
import classes from "./BlogListItems.module.css";
import BlogContext from '../../store/BlogContext';

const BlogListItems = ({index,item}) => {
    const [show, setShow] = useState(false);
    const {deleteBlogs,  editItemHandler} = useContext(BlogContext);
    const editBlogs =(item) =>{
        setShow(true);
        editItemHandler(index)

    }
    return (

        <div className={classes.card}>
            <h2>{item.title}</h2>
            <img src={item.url} alt={item.title} className={classes.image}/>
            <p>{item.desc}</p>

            <div className={`${classes["button-container"]}`}>
                
                <Button onClick={() =>editBlogs(index)}>Edit</Button>
                
                <Button onClick={() =>deleteBlogs(index)}>Delete</Button>
                {show && <BlogPost onClose={() =>setShow(false)}  />}
            </div>
        </div>
  )
}

export default BlogListItems
