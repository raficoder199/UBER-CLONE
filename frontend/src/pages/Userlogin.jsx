  import React from 'react'
  import { Link } from 'react-router-dom'
  import { useState, useContext } from 'react'
  import { useNavigate } from 'react-router-dom'
  import axios from 'axios'
  import { UserDataContext } from './Context/UserContext'

  const Userlogin = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const {user, setUser } = React.useContext(UserDataContext)

    const [errorMessage, setErrorMessage] = useState(""); // For displaying error messages


    const navigate = useNavigate()



    
    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/user/login`,
          { email, password },
          { withCredentials: true }
        );
    
      
    
        if (response.status === 200) {
          const { token, user } = response.data;
    
          if (token) {
            localStorage.setItem('token', token);
            setUser(user);
           
            navigate('/home');
          } else {
        
            setErrorMessage('Login failed: No token received.');
          }
        } else {
       
          setErrorMessage(response.data.message || 'Login failed.');
        }
      } catch (error) {
 
    
        if (error.response) {
          const errorResponse = error.response.data;
          setErrorMessage(errorResponse?.message || 'Login failed.');
        } else if (error.request) {
          setErrorMessage('No response from the server.');
        } else {
          setErrorMessage('An unexpected error occurred.');
        }
      }
    
      setemail('');
      setpassword('');
    };
    
    return (
      <div className='p-6 h-screen flex flex-col justify-between  '>
      <div>
      <img className='w-16 mb-8'  src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber logo" />
      
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
            <button  className= 'inline-block flex justify-center font-semibold mt-4 bg-black w-full rounded-md py-3 text-2xl tracking-tighter text-white'>Login</button>

          </form>
      </div>

      <div>
        <p className='text-xl tracking-tighter  ml-7 px-4 w-full py-2 rounded-md mb-96 text-black'>New Here ? <Link to={'/signup' } className='text-blue-600'> Create new account</Link></p>
      </div>
      <Link to={'/captain-login'} className='bg-green-500 px-3 tracking-tight rounded-md py-2.5 text-2xl font-semibold inline-block w-full flex justify-center'>Sign in as Captain</Link>
      </div>
    )
  }

  export default Userlogin