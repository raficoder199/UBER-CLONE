import React, { useContext, useState, useEffect } from 'react';
import { UserDataContext } from './Context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        
        navigate('/login');
        return;
      }
 
  
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
  
        if (response.status === 200 && response.data && response.data.user) {
         
          setUser(response.data.user);
          navigate('/home');
        } else {
          
          throw new Error('Invalid user data');
        }
      } catch (error) {
      
        localStorage.removeItem('token');
        navigate('/login');
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchUserProfile();
  }, [navigate, setUser]);
  

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <>{children}</>;
};

export default UserProtectWrapper;
