import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CaptainDataContext } from './Context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Captainlogin = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const {captain, setcaptain } = React.useContext(CaptainDataContext)

  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState(""); // For displaying error messages

 


  

  const submitHandler = async (e)=>{
    e.preventDefault();
    const Captain = ({
      email:email,
      password:password
    })

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/login`,
        Captain,
        { withCredentials: true } // Include this line
      );
    
      if (response.status === 200) {
        const data = response.data;
        setcaptain(data.captain);
        localStorage.setItem('token',data.token);
        
        
        navigate('/captain-home');
      } else {
        
      }
      setemail('')
      setpassword('')
    } catch (error) {
     
      if (error.response) {
      
        const errorResponse = error.response?.data;
        if (errorResponse?.message) {
          setErrorMessage(errorResponse.message);
        } else if (errorResponse?.errors) {
          setErrorMessage(
            errorResponse.errors
              ? errorResponse.errors.map((err) => `${err.path}: ${err.msg}`).join(", ")
              : "Signup failed. Please try again."
          );
        } else {
          setErrorMessage("Signup failed. Please try again.");
        }
      } else if (error.request) {
      
        setErrorMessage("No response from the server. Please try again later.");
      } else {
     

        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };
    
   
 
  
  

    


  return (
    <div className='p-6 h-screen flex flex-col justify-between  '>
     <div>
     <img className='w-16 mb-8'  src="https://pngimg.com/d/uber_PNG24.png" alt="Uber logo" />
     
     {errorMessage && (
          <p className="text-yellow-50 text-md mb-4 bg-slate-400 px-3 py-2 rounded-lg">{errorMessage}</p>
        )}
        <form onSubmit={(e)=>{
          submitHandler(e)

        }} action="">
          <h3 className='text-2xl font-medium tracking-tight mb-2'>What's Your Email </h3>
          <input required value={email} onChange={(e)=>{
            setemail(e.target.value)
         
            

          }}
           className='bg-[#eeeeee] rounded px-4 mt-2 py-2 border w-full text-lg placeholder:text-base'  type="email"  placeholder='email@example.com' />
          <h3 className='text-2xl font-medium tracking-tight mt-2'>Enter Your Password </h3>

          <input required value={password} onChange={(e)=>{
            setpassword(e.target.value)
            
         
            

          }} className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mt-4' type="password" placeholder='Your password' />
          <button  className= 'inline-block flex justify-center font-semibold mt-4 py-2 bg-black w-full rounded-md  text-2xl tracking-tighter text-white'>Login</button>

        </form>
     </div>

     <div>
      <p className='text-xl tracking-tighter  ml-7 px-4 w-full py-2 rounded-md mb-96 text-black'>Wanna Join? <Link to={'/captain-signup' } className='text-blue-600'> Register as captain</Link></p>
     </div>
     <Link to={'/login'} className='bg-slate-900 text-white px-3 tracking-tight rounded-md py-2.5 text-2xl font-semibold inline-block w-full flex justify-center'>Sign in as User</Link>
    </div>
  )
}

export default Captainlogin