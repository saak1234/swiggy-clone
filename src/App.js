import Start from './components/Start';
import Middle from './components/Middle';
import End from './components/End';
import LoginForm from './components/LoginForm';
import { useState } from 'react';
import SignForm from './components/SignForm';
import './App.css'

function App() {
  const [loginState,setloginState]=useState(false);
  const [signup,setsignup]=useState(false);
  const loginHandler=()=>{
    console.log("logged");
    setloginState(true);
   setsignup(false);
  }
  const signupHandler=()=>{
    console.log("signup");
    setsignup(true);
    setloginState(false);
  }
  const handleClose=()=>{
    setloginState(false);
    setsignup(false);
  }
  return (
    <div >
     <Start loginHandler={loginHandler} signupHandler={signupHandler}/>
     {loginState && <LoginForm onClose={handleClose} gotosignup={signupHandler}/>}
     {signup && <SignForm onClose={handleClose} gotologin={loginHandler}/>}
     <Middle/>
     <End/>
    </div>
  );
}

export default App;
