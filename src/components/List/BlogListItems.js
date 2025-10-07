import React from 'react'
import Button from '../UI/Button';
import classes from "./BlogListItems.module.css"

const BlogListItems = ({index,item}) => {
    console.log(item);
  return (

        <div className={classes.card}>
            <h2>{item.enteredTitle}</h2>
            <img src={item.enteredUrl} alt={item.enteredTitle} className={classes.image}/>
            <p>{item.enteredDesc}</p>

            <div className={`${classes["button-container"]}`}>
                
                <Button>Edit</Button>
                <Button>Delete</Button>
            </div>
        </div>
  )
}

export default BlogListItems
