import React,{useEffect,useState} from 'react'
import LoginForm from './LoginForm';
const scenarios = [
    'Hungry?',
    'Unexpected guests?',
    'Cooking gone wrong?',
    'Movie marathon?',
    'Game night?',
    'Late night at office?',
  ];
  
function Start(props) {
 
    const [index, setIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % scenarios.length);
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
   
  return (
    <div className="flex flex-row">
  <div className=" m-10">
    <div className="flex items-center space-x-56">
      <img src="swiggylogo.png" className="w-52 mb-10" alt="Swiggy Logo" />
      <div className="flex space-x-8  ">
        <button className="font-bold hover:text-orange-500" onClick={props.loginHandler}>Login</button>
        <button className="w-28 h-11 font-bold text-white bg-black" onClick={props.signupHandler}>Sign up</button>
       
      </div>
    </div>
    <div>
    <h1 className="text-4xl font-bold transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0 mb-2">
        {scenarios[index]}
      </h1>
      <p className="text-2xl mb-10  text-gray-500">Order food from favorite restaurants near you.</p>
      <div className="flex flex-row">
        <input type="text" className="border border-gray-400 w-3/4 h-14 p-3 font-bold mb-6 outline-orange-300  "
  placeholder="Enter your delivery location"/>
        <button className="bg-orange-500 font-bold text-white p-4 h-14 w-36">FIND FOOD</button>
      </div>
      <p className='text-gray-400 text-md mb-3'>POPULAR CITIES IN INDIA</p>
      <p className="whitespace-nowrap font-bold space-x-1">
        <span className='text-gray-500'>Ahmedabad</span> 
        <span className="text-gray-400">Bangalore</span> 
        <span className="text-gray-500"> Chennai</span>
        <span className="text-gray-400"> Delhi</span>
        <span className="text-gray-500">Gurgaon</span>
        <span className="text-gray-400"> Hyderabad</span>
        <span className="text-gray-500"> Kolkata </span>
        <span className="text-gray-400">Mumbai</span>
       </p>
       <span className="text-gray-500"> Pune</span>
        <span className="text-gray-400"> & more.</span>
    </div>
  </div>

  <div>
    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" className="w-11/12 h-6/7 ml-auto" alt="Food Image" />
  </div>
</div>
 
  )
}

export default Start