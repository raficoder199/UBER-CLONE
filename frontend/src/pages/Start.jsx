import React from 'react'
import bg from '../assets/img/start.png'  
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
       
        <div 
          className='h-screen pt-8 flex justify-between flex-col w-full bg-red-50' 
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',       
            backgroundPosition: 'center',  
            backgroundRepeat: 'no-repeat'  
          }}
        >
            <img className='w-16 ml-8 rounded-lg' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber logo" />
            <div className='bg-white py-5 px-5 '>
                <h2 className='text-3xl font-bold ml-8 mb-5'>Get Started With Uber </h2>
                <Link to={'/login'} className= 'font-semibold inline-block flex justify-center bg-black w-full rounded-md py-2.5 text-2xl tracking-tighter text-white'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start
