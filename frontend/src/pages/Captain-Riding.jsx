import React from 'react';
import { Link } from 'react-router-dom';
import FinishRide from '../Components/FinishRide';
import { useState,useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const CaptainRiding = () => {

     
  const [finishPannel, setfinishPannel] = useState(false)
  const finishPannelRef = useRef(null)

  useGSAP(()=>{
    if(finishPannel){
     gsap.to(finishPannelRef.current,{
       transform:'translateY(0)'
     })
    }else{
     gsap.to(finishPannelRef.current,{
       transform:'translateY(100%)'
     })
    }
   },[finishPannel])


  return (
    <div className="h-screen min-h-screen flex flex-col">
     
      <div>
        <Link
          to="/home"
          className="fixed text-xl bg-red-500 px-4 py-2 rounded-md top-3 right-2"
        >
          <i className="ri-logout-box-line" aria-hidden="true"></i>
          <span className="sr-only">Logout</span>
        </Link>
      </div>

      <div className="flex-grow">
        <img
          className="h-[85vh] w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Captain Riding Animation"
        />
      </div>

      <div className='h-[15vh] p-6 bg-yellow-400 p-2 flex items-center justify-between relative pt-10'>
     
      
       
        <h5 onClick={() =>{
            setfinishPannel(true);
        }}
        
         
        className="justify-center flex   absolute top-0 text-center  left-[45%]"
      >
        <i className="text-3xl text-center   text-black ri-arrow-up-wide-fill"></i>
      </h5>
  


      <h4 className='text-xl font-semibold'> 4KM Away</h4>
      <button onClick={()=>{
        setfinishPannel(true)
      }} className=' bg-green-600 text-black  border-2 border-green-600 font-semibold text-xl  px-6 py-2 rounded-md active:border-slate-600'>Complete Ride</button>

      


       


        
      </div>
      <div ref={finishPannelRef} className='fixed z-10  h-screen mt-2 translate-y-full  bottom-0 p-4 bg-white w-full'>
        <FinishRide setfinishPannel={setfinishPannel} />

  
      
                    
</div> 
      
    </div>
  );
};

export default CaptainRiding;
