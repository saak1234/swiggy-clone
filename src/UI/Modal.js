import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
const Backdrop=(props)=>{
    return  <div className='bg-gray-800 bg-opacity-70 z-20 h-full w-full fixed' onClick={props.onClose}/>
 }
 const ModalOverlay=(props)=>{
     return <div className=" bg-white z-30 h-full w-1/3 fixed right-0   ">{props.children}</div>
 }
const portalElement=document.getElementById("overlays");
const Modal=(props)=>{ 
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </Fragment>
    )
}
export default Modal;