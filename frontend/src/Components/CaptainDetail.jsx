import React from 'react'

const CaptainDetail = () => {
  return (
    <div>
            <div className='  flex justify-between p-5'>
        <div className='flex gap-3'>

        <img className='w-12 h-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
        <h5 className='text-xl font-semibold mt-2'>Mr Johnson</h5>
        </div>
        <div className=''>

        <i className="text-xl ri-money-dollar-circle-fill ">
          <span className='font-bold'>120 BDT</span>
        </i>
        <p className='text-lg font-semibold mb-2 mt-2 bg-slate-300 px-4 rounded-lg '> Earned</p>
        </div>
      </div>
      
          <div className='p-4'>

       
          <div className='flex justify-center bg-gray-100  p-3 rounded-lg gap-8 px-5 items-start'>
            <div className='text-center'>
            <i className="text-3xl font-thin ri-time-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>

            </div>
            <div className='text-center'>
            <i className="text-3xl font-thin ri-time-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>

            </div>
            <div className='text-center'>
            <i className="text-3xl font-thin ri-booklet-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>

            </div>
          </div>
          </div>
    </div>
  )
}

export default CaptainDetail