import React from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import CaptainDetail from '../Components/CaptainDetail'
import RidePopup from '../Components/RidePopup'
import { useState,useRef } from 'react'
import { useGSAP} from '@gsap/react'
import ConfirmRidePopup from '../Components/ConfirmRidePopup'

const CaptainHome = () => {

  const [RidePop, setRidePop] = useState(false)
  const [confirmRidePop, setConfirmRidePop] = useState(false);
  const RidePopRef = useRef(null)
  const confirmRidePopRef = useRef(null)


  useGSAP(()=>{
      if(RidePop){
       gsap.to(RidePopRef.current,{
         transform:'translateY(0)'
       })
      }else{
       gsap.to(RidePopRef.current,{
         transform:'translateY(100%)'
       })
      }
     },[RidePop])

     useGSAP(()=>{
      if(confirmRidePop){
       gsap.to(confirmRidePopRef.current,{
         transform:'translateY(0)'
       })
      }else{
       gsap.to(confirmRidePopRef.current,{
         transform:'translateY(100%)'
       })
      }
     },[confirmRidePop])


  return (
    <div className='h-screen w-full overflow-hidden'>
       
    <div className=''>
        <Link to={'/home'} className='fixed text-xl bg-red-500 px-4 py-2 rounded-md top-3 right-2 '> 
        <i className="ri-logout-box-line"></i>
        </Link>
 
  <img className='h-[65vh] w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

    
        
    
    </div>
    <div >
      <CaptainDetail/>
  

    </div>
    <button className='bg-green-600 text-black  w-full border-2 border-green-600 font-semibold text-xl  px-6 py-2 rounded-md active:border-slate-600' onClick={()=>{
      setRidePop(true)
    }}>click here to see a demo</button>
 
    <div ref={RidePopRef} className='fixed z-10  mt-2 translate-y-full  bottom-0 p-4 bg-white w-full'>
      <RidePopup setRidePop={setRidePop} setConfirmRidePop={setConfirmRidePop} />
                    
</div>  
<div ref={confirmRidePopRef} className='fixed z-10  h-screen mt-2 translate-y-full  bottom-0 p-4 bg-white w-full'>

  <ConfirmRidePopup setRidePop={setRidePop} setConfirmRidePop={setConfirmRidePop} />
      
                    
</div>  
  
</div>
  )
}

export default CaptainHome