
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { UserDataContext} from './Context/UserContext'


const Usersignup = () => {
  
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [firstName, setfirstName] = useState("");
const [lastName, setlastName] = useState("");
const [userData, setuserData] = useState({})


const {user , setUser} = React.useContext(UserDataContext)

const navigate = useNavigate()

  const submitHandler = async (e) =>{
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email:email,
      password:password
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/register`,
        newUser
      );
    
      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);

        navigate('/home');
      } else {
   
      }
    } catch (error) {
      
    }
    
    
    setemail('')
    setfirstName('')
    setlastName('')
    setpassword('')

  }

  return (
    <div className='p-6 h-screen flex flex-col justify-between  '>
     <div>
     <img className='w-16 mb-8'  src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber logo" />
        <form onSubmit={(e)=>{
          submitHandler(e)

        }} action="">
          
          <h3 className='text-2xl font-medium tracking-tight  text-base'>What's Your Name </h3>
          <div className='flex gap-4 mb-3 '>

          <input required 
           className='bg-[#eeeeee] w-1/2 rounded px-4 mt-2  py-2 border  text-lg placeholder:text-base'  type="text"  placeholder='First Name' value={firstName} onChange={(e)=>{
             setfirstName(e.target.value)

           }}  />
          <input required 
           className='bg-[#eeeeee] w-1/2 rounded px-4 mt-2 py-2 border  text-lg placeholder:text-base'  type="text"  placeholder='Last Name' value={lastName} onChange={(e)=>{
             setlastName(e.target.value);

           }} />
           </div>
          <h3 className='text-2xl font-medium text-base tracking-tight '>What's Your Email </h3>
          <input required 
           className='bg-[#eeeeee] rounded px-4 mt-2 py-2 border w-full mb-3 text-lg placeholder:text-base'  type="email"  placeholder='email@example.com' value={email} onChange={(e)=>{
            setemail(e.target.value);

           }} />
          <h3 className='text-base font-medium tracking-tight  mt-2'>Set  Your Password </h3>

          <input required  className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mt-2 mb-3' type="password"  placeholder='Set Password' value={password} onChange={(e)=>{
            setpassword(e.target.value);

          }} />
          <button  className= 'inline-block flex justify-center font-semibold mt-4 bg-black w-full rounded-md py-3 text-2xl tracking-tighter text-white'>SignUp</button>

        </form>
     </div>

     <div>
      <p className='text-xl tracking-tighter  ml-3 px-4 w-full py-2 rounded-md mb-96 text-black'>Already have a account ? <Link to={'/login' } className='text-blue-600'> Login Here</Link></p>
     </div>
     <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
     Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
    </div>
  )
}

export default Usersignup