import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
   
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captain/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true, // Include cookies in the request
      })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          localStorage.removeItem('token'); // Clear token
          navigate('/captain-login'); // Redirect to login page
        }
      })
      .catch((error) => {
        console.error('Logout failed:', error);

        // Handle unauthorized errors (401)
        if (error.response?.status === 401) {
          localStorage.removeItem('token'); // Clear invalid token
          navigate('/capatain-login'); // Redirect to login
        }
      });
  }, [navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default CaptainLogout;
