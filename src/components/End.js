import React from 'react'

function end() {
  return (
    <div className='flex'>
        <div className="p-14">
        <p className="font-bold text-4xl mt-20">Restaurants in</p> 
        <p className="font-bold text-4xl mb-6">your pocket</p>
        <p className="text-gray-500">Order from your favorite restaurants & track 
        <p className="text-gray-500">on the go, with the all-new Swiggy app.</p></p>
        <div className='flex space-x-3 mt-16'>
        <div className='flex flex-row bg-black p-3 rounded-md w-48 space-x-3 h-16'>
            <img src='playstore.webp' className='h-7 w-7'/>
        <div>
        <p className="font-bold text-white text-xs">GET IT ON</p>
         <p className="font-bold text-white text-xl">Google Play</p>
         </div>

        </div>
        <div className='flex flex-row bg-black p-3 rounded-md w-44 space-x-3 h-16'>
        <img src='apple.webp' className='h-7 w-7'/>
        <div>
        <p className="font-bold text-white text-xs">Download on the</p>
         <p className="font-bold text-white text-xl">App Store</p>
         </div>
        </div> 
        </div>
        
        </div>
        <img src='mobile.png' className="ml-auto w-1/2"/>
    </div>
  )
}

export default end