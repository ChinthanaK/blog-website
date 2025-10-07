import React from 'react';
import classes from  "./Button.module.css"

const Button = (props) => {
  return (
   
      <div className={`${classes["button-container"]}`}>
        <button onClick={props.onClick} type={props.type || 'submit'} 
        className={`${classes.button} ${props.className}`}>
            {props.children}
      </button>
      </div>
      
   
  )
}

export default Button
