import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
       
        <div className=''>
            <Link to={'/home'} className='fixed text-xl bg-red-500 px-4 py-2 rounded-md top-3 right-2 '> 
            <i className=" ri-home-4-fill"></i>
            </Link>
     
      <img className='h-1/2 w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

        </div>
        <div>
            <h1 className='text-center font-semibold mb-2 mt-2 '>You are on a ride!</h1>
        <div className='flex justify-between px- py-3' >
            
        <img
          className="h-20 bg-slate-200 px-2 rounded-lg"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className=''>
            <h4 className='font-medium text-lg '>Rafi</h4>
            <h2 className='text-xl font-semibold'>CU090909</h2>
            <p className='text-md font-medium'>Toyota Land Cruiser</p>
        </div>
        </div>
      <div className="flex gap-2 justify-between flex-col items-center">
       
        
        <div className="w-full">
          <div className="flex justify-start gap-4 p-4 border-b-2">
            <i className="text-xl ri-map-pin-fill"></i>
            <div >
                <h3 className="text-xl font-medium">#11 Pitambar</h3>
                <p className="text-slate-600">Burichang,cumilla</p>
            </div>

          </div>
          <div className="flex justify-start gap-4 p-4 border-b-2">
          <i className= " text-xl ri-rectangle-fill"></i>
            <div >
                <h3 className="text-xl font-medium">#11 Pitambar</h3>
                <p className="text-slate-600">Burichang,cumilla</p>
            </div>

          </div>
         

          <div className="flex justify-start gap-4 p-4 border-b-2">
          <i className=" text-xl ri-money-dollar-circle-line"></i>
            <div >
                <h3 className="text-xl font-medium">199 BDT</h3>
                <p className="text-slate-600">Cash Cash</p>
            </div>

          </div>
        </div>
        <button className="  w-80 bg-green-600 text-white  font-semibold text-xl p-2 rounded-md mt-5">
          Make a payment
        </button>
      </div>
        </div>
      
    </div>
  )
}

export default Riding