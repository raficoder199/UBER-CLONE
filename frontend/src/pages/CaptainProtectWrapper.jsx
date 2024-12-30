import React, { useState, useEffect, useContext } from 'react';
import { CaptainDataContext } from './Context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainProtectWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [captain, setCaptain] = useState(null);
  const { setcaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCaptainProfile = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          navigate('/captain-login');
          return;
        }

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true, // Include cookies
        });

        if (response.status === 200) {
          setCaptain(response.data.captain);
          setcaptain(response.data.captain);

          navigate('/captain-home');
        } else {
          throw new Error('Unauthorized');
        }
      } catch (error) {
        localStorage.removeItem('token'); // Semicolon added here
        navigate('/captain-login');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaptainProfile();
  }, [navigate, setcaptain]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <>{captain ? children : null}</>;
};

export default CaptainProtectWrapper;
