import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "./Context/CaptainContext";

const Captainsignup = () => {
  const { captain, setcaptain } = useContext(CaptainDataContext);

  // Form fields
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [vehicleType, setvehicleType] = useState("Auto");
  const [vehiclecolor, setvehiclecolor] = useState("");
  const [vehiclePlate, setvehiclePlate] = useState("");
  const [vehicleCapacity, setvehicleCapacity] = useState("");

  const [errorMessage, setErrorMessage] = useState(""); // For displaying error messages

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
  
    const captainData = {
      fullname: {
        firstname: firstname.trim(),
        lastname: lastname.trim(),
      },
      email: email.trim(),
      password: password.trim(),
      vehicle: {
        vehicleType: vehicleType,
        color: vehiclecolor.trim(),
        plate: vehiclePlate.trim(),
        capacity: parseInt(vehicleCapacity, 10),
      },
    };
  
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/register`,
        captainData
      );
  
      if (response.status === 201) {
        const data = response.data;
        setcaptain(data.captain); // 
        localStorage.setItem("token", data.token);
        navigate('/captain-home') 
      }
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
    <div className="p-6 h-screen flex flex-col justify-between ">
      <div>
        <img
          className="w-16 mb-8"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt="Uber logo"
        />

        {errorMessage && (
          <p className="text-yellow-50 text-md mb-4 bg-slate-400 px-3 py-2 rounded-lg">{errorMessage}</p>
        )}

        <form onSubmit={submitHandler}>
          <h3 className="text-2xl font-medium tracking-tight text-base">
            What's Our Captain's Name
          </h3>
          <div className="flex gap-4 mb-3">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 mt-2 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 mt-2 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
          </div>
          <h3 className="text-2xl font-medium text-base tracking-tight">
            What's Our Captain's Email
          </h3>
          <input
            required
            className="bg-[#eeeeee] rounded px-4 mt-2 py-2 border w-full mb-3 text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <h3 className="text-base font-medium tracking-tight mt-2">
            Set Your Password
          </h3>
          <input
            required
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mt-2 mb-3"
            type="password"
            placeholder="Set Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <h3 className="text-base font-medium tracking-tight mt-2">
            Vehicle Information
          </h3>
          <select
            required
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mt-2 mb-3"
            value={vehicleType}
            onChange={(e) => setvehicleType(e.target.value)}
          >
            <option value="auto">Auto</option>
            <option value="motorcycle">Moto</option>
            <option value="car">Car</option>
          </select>
          <input
            required
            className="bg-[#eeeeee] rounded px-4 mt-2 py-2 border w-full mb-3 text-lg placeholder:text-base"
            type="text"
            placeholder="Vehicle Color"
            value={vehiclecolor}
            onChange={(e) => setvehiclecolor(e.target.value)}
          />
          <input
            required
            className="bg-[#eeeeee] rounded px-4 mt-2 py-2 border w-full mb-3 text-lg placeholder:text-base"
            type="text"
            placeholder="Vehicle Plate Number"
            value={vehiclePlate}
            onChange={(e) => setvehiclePlate(e.target.value)}
          />
          <input
            required
            className="bg-[#eeeeee] rounded px-4 mt-2 py-2 border w-full mb-3 text-lg placeholder:text-base"
            type="number"
            placeholder="Vehicle Capacity"
            value={vehicleCapacity}
            onChange={(e) => setvehicleCapacity(e.target.value)}
          />

          <button
            type="submit"
            className="inline-block flex justify-center font-semibold mt-4 bg-black w-full rounded-md py-3 text-2xl tracking-tighter text-white"
          >
            SignUp
          </button>
        </form>
      </div>

      <div>
        <p className="text-xl tracking-tighter ml-10 px-4 w-full py-2 rounded-md mb-96 text-black">
          Already a captain?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login Here
          </Link>
        </p>
      </div>
      <p className="text-[10px] leading-tight">
        This site is protected by reCAPTCHA and the{" "}
        <span className="underline">Google Privacy Policy</span> and{" "}
        <span className="underline">Terms of Service apply</span>.
      </p>
    </div>
  );
};

export default Captainsignup;
