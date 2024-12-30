import React from "react";

const ConfirmRide = (props) => {
  return (
    <div > 
      <h5
        onClick={() => {
          props.setConfirmRide(false);
        }}
        className="justify-center flex mt-5  bg-gray-200 rounded-md "
      >
        <i className="text-2xl  text-gray-400 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="font-bold text-2xl tracking-tighter text-center mt-2 mb-5">
        {" "}
        Confirm your ride
      </h3>

      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="w-full">
          <div className="flex justify-start gap-4 p-4 border-b-2">
            <i className="text-xl ri-map-pin-fill"></i>
            <div >
                <h3 className="text-xl font-medium">#11 Pitambar</h3>
                <p className="text-slate-600">Burichang,cumilla</p>
            </div>

          </div>
          <div className="flex justify-start gap-4 p-4 border-b-2">
          <i className= " text-xl ri-rectangle-fill"></i>
            <div >
                <h3 className="text-xl font-medium">#11 Pitambar</h3>
                <p className="text-slate-600">Burichang,cumilla</p>
            </div>

          </div>
         

          <div className="flex justify-start gap-4 p-4 border-b-2">
          <i className=" text-xl ri-money-dollar-circle-line"></i>
            <div >
                <h3 className="text-xl font-medium">199 BDT</h3>
                <p className="text-slate-600">Cash Cash</p>
            </div>

          </div>
        </div>
        <button onClick={()=>{
            props.setLookingDriver(true)
            
           
        }} className="w-full bg-green-600 text-white  font-semibold text-xl p-2 rounded-md mt-5">
          Confirm
        </button>
      </div>
    </div>
  ); 
};

export default ConfirmRide;
