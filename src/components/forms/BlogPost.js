import React from 'react';
import Button from '../UI/Button';
import classes from "./BlogPost.module.css";
import Modal from '../UI/Modal';

const BlogPost = (props) => {
    const formSubmitHandler = (event) =>{
        event.preventDefault();
        const enteredUrl = event.target.url.value;
        const eneteredTitle = event.target.title.value;
        const enteredDesc = event.target.description.value;
        const enteredData={
            enteredUrl,
            eneteredTitle,
            enteredDesc
        }
        console.log(enteredData);
    }
  return (
   <Modal onClose={props.onClose}>
      <form onSubmit={formSubmitHandler} className={classes.form}>
        <div className={classes.field}>
          <label htmlFor="url">Image Url:</label>
          <input type="url" name="url" id="url" />
        </div>

        <div className={classes.field}>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" />
        </div>

        <div className={classes.field}>
          <label htmlFor="description">Blog Description:</label>
          <input type="text" name="description" id="description" />
        </div>

        <div className={classes['button-container']}>
          <Button type="submit">POST BLOG</Button>
          <Button type="button" onClick={props.onClose}>Close</Button>
        </div>
      </form>
    </Modal>
  )
}

export default BlogPost
