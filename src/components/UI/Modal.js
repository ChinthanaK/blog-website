import React from 'react';
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) =>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
    }
const ModelOverlay = (props) =>{
    return <div className={classes.modal}>
            {props.children}
        </div>
}
const Modal = (props) => {
   
  return (
    <>
     {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById("backdrop-root"))};
     {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, document.getElementById("overlay-root"))};
    </>
  )
}

export default Modal
