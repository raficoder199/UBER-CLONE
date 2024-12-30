import React from 'react'

const LocationSearchPannel = (props) => {

  

  
  const locations = [
    "#11,Pitambar,Front Gate,Burichang,Cumilla",
    "#101,Pitambar,Front Gate,Burichang,",
    "#10B,Pitambar,Front Gate,Burichang,",
    "#100P,Pitambar,Front Gate,Burichang,Cumilla",
  ]

  return (
    <div className=''>
        {/* sample datas */}
        {
        locations.map(function(elem){
          return <div onClick={()=>{
            props.setVehiclePannel(true)
            props.setpannelOpen(false)
          }} className='flex bg-gray-100 rounded-lg active:border-black border-2 border-white px-2 py-3   items-center justify-start gap-3 mb-2'>
          <h1 className='bg-[#eee] px-3 py-2 rounded-full'><i class="ri-map-pin-2-fill"></i></h1>
          <h1 className='font-semibold '>{elem}</h1>
      </div>
        })
      }

    
       
    </div>
  )
}

export default LocationSearchPannel