import React from 'react'

const VehicleUI = (props) => {
  return (
    <div >
         <h5 onClick={()=>{
         props.setVehiclePannel(false)
        }} className='justify-center flex mt-5  bg-gray-200 rounded-md '><i className="text-2xl  text-gray-400 ri-arrow-down-wide-fill"></i></h5>
  <h3 className='font-bold text-2xl tracking-tighter mb-5'>Choose a vehicle</h3>
 <div onClick={()=>{
  props.setConfirmRide(true)
  
 }} className='flex w-full border-2 active:border-black bg-gray-100 rounded-lg items-center justify-between my-3'>

    <img className='h-14' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
    <div className='font-semibold tracking-tight text-[18px] '>
      <h4 className='text-lg'>Uber Go <span><i className="ri-user-fill"></i>4</span> </h4>
      <h5 className='text-base'>2mins away</h5>
      <p className='text-gray-500 text-base'>Book a ride to your destination</p>
    </div>
    <h2 className='font-bold text-xl'>199 BDT</h2>
 </div>

  <div  onClick={()=>{
  props.setConfirmRide(true)
 }} className='flex w-full border-2 active:border-black bg-gray-100 rounded-lg items-center justify-between my-3'>

    <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="" />
    <div className='font-semibold tracking-tight text-[18px] '>
      <h4 className='text-lg'>Moto Go <span><i className="ri-user-fill"></i>1</span> </h4>
      <h5 className='text-base'>5mins away</h5>
      <p className='text-gray-500 text-base'>Book a moto ride to your destination</p>
    </div>
    <h2 className='font-bold text-xl'>110 BDT</h2>
 </div>
  <div onClick={()=>{
  props.setConfirmRide(true)
 }} className='flex w-full border-2 active:border-black bg-gray-100 rounded-lg items-center justify-between my-3'>

    <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
    <div className='font-semibold tracking-tight text-[18px] '>
      <h4 className='text-lg'>Auto Go <span><i class="ri-user-fill"></i>3</span> </h4>
      <h5 className='text-base'>3mins away</h5>
      <p className='text-gray-500 text-base'>Affordable auto rides</p>
    </div>
    <h2 className='font-bold text-xl'>100 BDT</h2>
 </div>

    </div>
  )
}

export default VehicleUI