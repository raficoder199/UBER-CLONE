
import LocationSearchPannel from '../Components/LocationSearchPannel'
import VehicleUI from '../Components/VehicleUI'

import 'remixicon/fonts/remixicon.css'
import React, { useState } from 'react'

import gsap from 'gsap'
import { useGSAP} from '@gsap/react'
import { useRef } from 'react'
import ConfirmRide from '../Components/ConfirmRide'
import LookingForDriver from '../Components/LookingForDriver'
import WaitingDriver from '../Components/WaitingDriver'

const Home = () => {
  const [pickup, setpickup] = useState('')
  const [destination, setdestination] = useState('')
  const [pannelOpen, setpannelOpen] = useState(false)
  const pannelRef = useRef(null)
  const pannelCloseRef = useRef(null)
  const [VehiclePannel, setVehiclePannel] = useState(false)
  const vehiclePannelRef = useRef(null)
  const [confirmRide, setConfirmRide] = useState(false)
  const confirmRideRef = useRef(null)
  const [LookingDriver, setLookingDriver] = useState(false)
  const LookingDriverRef = useRef(null)
  const [waitingDriv, setwaitingDriv] = useState(false)
  const waitingDrivRef = useRef(null)

  useGSAP(()=>{
    if(pannelOpen){
      gsap.to(pannelRef.current,{
        height: '70%',
        padding: '20px'
      }),gsap.to(pannelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(pannelRef.current,{
        height: '0%',
        padding: '0px'
      }),gsap.to(pannelCloseRef.current,{
        opacity:0
      })
    }
  },[pannelOpen])

  useGSAP(()=>{
   if(VehiclePannel){
    gsap.to(vehiclePannelRef.current,{
      transform:'translateY(0)'
    })
   }else{
    gsap.to(vehiclePannelRef.current,{
      transform:'translateY(100%)'
    })
   }
  },[VehiclePannel])

  useGSAP(()=>{
    if(confirmRide){
     gsap.to(confirmRideRef.current,{
       transform:'translateY(0)'
     })
    }else{
     gsap.to(confirmRideRef.current,{
       transform:'translateY(100%)'
     })
    }
   },[confirmRide])

   useGSAP(()=>{
    if(LookingDriver){
     gsap.to(LookingDriverRef.current,{
       transform:'translateY(0)'
     })
    }else{
     gsap.to(LookingDriverRef.current,{
       transform:'translateY(100%)'
     })
    }
   },[LookingDriver])

   useGSAP(()=>{
    if(waitingDriv){
     gsap.to(waitingDrivRef.current,{
       transform:'translateY(0)'
     })
    }else{
     gsap.to(waitingDrivRef.current,{
       transform:'translateY(100%)'
     })
    }
   },[waitingDriv])



  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className=' h-screen relative overflow-hidden'>
     <img className='w-16 absolute '  src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber logo" />
     <div className='h-screen w-screen'>
      <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
     </div>
      <div className=' h-screen absolute top-0 flex flex-col justify-end   w-full'>
        <div className='h-[30%] bg-white'>
          <h5 ref={pannelCloseRef} onClick={()=>{
            setpannelOpen(false)
          }}
           className='right-6 absolute text-2xl top-6'
           ><i class="ri-arrow-down-wide-fill"></i></h5>
     <h4 className='font-bold text-2xl mb-4 px-5 mt-6'>Find a trip</h4>
      <form onClick={(e)=>{
        submitHandler(e);

      }} className='px-5'>
         <input onClick={()=>{
          setpannelOpen(true)
         }}
          value={pickup}
         onChange={()=>{
          setpickup(e.target.value);
         }}
         className='bg-[#eee] px-14 border-yellow-50 px-2 py-3 mb-3 mt-4 rounded-lg text-lg w-full ' 
         type="text"
          placeholder="Add a Pickup Location" />
         <input onClick={()=>{
          setpannelOpen(true)
         }}
             value={destination}
           onChange={()=>{
            setdestination(e.target.value);
           }}
          className='bg-[#eee] px-14 border-yellow-50 px-2 py-3  rounded-lg text-lg w-full' 
          type="text"
           placeholder="Enter Your Destination" />
        

      </form>
        </div>
           <div ref={pannelRef} className=' h-0 bg-white  '>
            <LocationSearchPannel pannelOpen={pannelOpen} setpannelOpen={setpannelOpen} VehiclePannel={VehiclePannel} setVehiclePannel={setVehiclePannel}/>
           

           </div>
     </div>
     
     <div ref={vehiclePannelRef} className='fixed z-10 translate-y-full mt-2   bottom-0 p-4 bg-white w-full'>
       <VehicleUI setConfirmRide={setConfirmRide} vehiclePannel={VehiclePannel} setVehiclePannel={setVehiclePannel}/>
                    
</div>  
  <div ref={confirmRideRef} className='fixed z-10 translate-y-full mt-2   bottom-0 p-4 bg-white w-full'>
       <ConfirmRide confirmRide={confirmRide} setConfirmRide={setConfirmRide} setLookingDriver={setLookingDriver} />
                    
  </div>  
  <div ref={LookingDriverRef} className='fixed z-10 translate-y-full mt-2   bottom-0 p-4 bg-white w-full'>
    <LookingForDriver setwaitingDriv={setwaitingDriv} setConfirmRide={setConfirmRide} setLookingDriver={setLookingDriver} />
      
                    
  </div>
  <div ref={waitingDrivRef}  className='fixed z-10  mt-2  translate-y-full bottom-0 p-4 bg-white w-full'>
    
      <WaitingDriver setConfirmRide={setConfirmRide} setwaitingDriv={setwaitingDriv} />
                    
  </div>
     
    
     

    </div>
     
  )
}

export default Home