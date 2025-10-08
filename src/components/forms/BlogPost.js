import React, { useContext } from 'react';
import Button from '../UI/Button';
import classes from "./BlogPost.module.css";
import Modal from '../UI/Modal';
import BlogContext from '../../store/BlogContext';

const BlogPost = (props) => {
  const {addBlogs, editingItem, editBlogs, resetEditingItem, editingIndex} = useContext(BlogContext);

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        const url = event.target.url.value;
        const title = event.target.title.value;
        const desc= event.target.description.value;
        const enteredData={
            url,
            title,
            desc
        }
        addBlogs(enteredData);
        resetEditingItem();
    }
  return (
   <Modal onClose={props.onClose}>
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <div className={classes.field}>
          <label htmlFor="url">Image Url:</label>
          <input type="url" name="url" id="url"  value={editingItem.url || ""} onChange={(e) =>editBlogs("url", e.target.value)}/>
        </div>

        <div className={classes.field}>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" value={editingItem.title || ""} onChange={(e) =>editBlogs("title", e.target.value)} />
        </div>

        <div className={classes.field}>
          <label htmlFor="description">Blog Description:</label>
          <input type="text" name="description" id="description" value={editingItem.desc || ""} onChange={(e) => editBlogs("desc",e.target.value)}/>
        </div>

        <div className={classes['button-container']}>
          <Button type="submit">{editingIndex!==null?"Update":"Post"}</Button>
          <Button onClick={props.onClose}>Close</Button>
        </div>
      </form>
    </Modal>
  )
}

export default BlogPost
