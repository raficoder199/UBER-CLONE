import React from 'react'



const RidePopup = (props) => {
 
   


  return (
    <div>
         <h5
        onClick={() => {
          props.setRidePop(false);
        }}
        className="justify-center flex mt-5  bg-gray-200 rounded-md "
      >
        <i className="text-2xl  text-gray-400 ri-arrow-down-wide-fill"></i>
      </h5>
      
      <h3 className="font-bold text-2xl tracking-tighter text-center mt-4 mb-4">
       New Ride For You!
      </h3>

      <div className=" gap-2 justify-between flex-col items-center">

        <div className='flex justify-between px-4 py-2 mb-3 bg-yellow-400 rounded-lg  border-b-4'>
            <div className='flex items-center gap-2'>
            <img className='w-10 h-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
            <h1 className='text-xl font-medium '>Ms Johnson</h1>

            </div>
            
            <h3 className='mt-2 font-semibold text-lg'>2.2KM</h3>
        </div>
       
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

        <div className='flex  px-10 py-5 justify-between'> 
        <button onClick={()=>{

props.setConfirmRidePop(true)
props.setRidePop(false);
     
    
 }} className=" bg-green-600 text-black  border-2 border-green-600 font-semibold text-xl  px-6 py-2 rounded-md active:border-slate-600 ">
   Accept
 </button>
 <button onClick={()=>{
     props.setRidePop(false);
 
     
    
 }} className=" bg-slate-300 text-black  border-2 border-slate-300 font-semibold text-xl  px-6 py-2 rounded-md  active:border-slate-600 ">
   Ignore
 </button>
        </div>
       
      </div>
    </div>
  )
}

export default RidePopup