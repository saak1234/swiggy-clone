import React,{useState} from 'react'
import Modal from '../UI/Modal'
import CloseIcon from '@mui/icons-material/Close';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
function LoginForm(props) {
    const [input,setInput]=useState("");
    const changeHandler=(value)=>{
        if(!isNaN(value.target.value)){
            setInput(value.target.value);
        }
      else{
        setInput(input);
      }

    }
  return (
    <Modal onClose={props.onClose} >
        <form className="p-10">
           <CloseIcon onClick={props.onClose}/>
           <div className="flex"><div>
             <h1 className='text-3xl font-bold mt-4 mb-2'>Login</h1>
           <h4>or <button onClick={props.gotosignup} className="text-orange-500">create an account</button></h4>
           <HorizontalRuleIcon/>
           </div>
           <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" className="w-28 ml-auto"/></div>
   <input className='w-full h-16  p-3 border mt-8 mb-4 outline-none' onChange={changeHandler} value={input} placeholder='Phone number'/>
   <div className='bg-orange-500 w-full  text-sm h-12 text-white font-bold justify-center flex items-center uppercase '> Login</div>
   <dic className="text-gray-400 text-xs font-bold">By clicking on Login,<span className='text-gray-600'> I accept the Terms & Condition </span>& <span className='text-gray-600'>privacy Policy</span></dic>
        </form>
    </Modal>
  )
}

export default LoginForm;