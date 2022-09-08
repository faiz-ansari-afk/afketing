import React from "react";

function Address() {
  return (
    <div className="flex justify-center text-left">
      <div className="bg-primary rounded-3xl flex-col space-y-10 p-10 text-white sm:space-y-5">
        <h1 className="text-3xl font-semibold text-secondary">Get In Touch</h1>
        <p>
          SHEYGENCY is digital marketing agency , we provide markeking and
          development services
        </p>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa60021] p-2 rounded">
            <i className="ri-map-pin-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Visit US</h1>
            <p className="sm:text-xs">Bhiwandi , Maharashtra , India</p>
            
          </div>
        </div>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa60021] p-2 rounded">
            <i className="ri-mail-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Mail US</h1>
            <p >mohdfaiz.afk@gmail.com</p>
           
          </div>
        </div>

        
        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa60021] p-2 rounded">
            <i className="ri-mail-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Call US</h1>
            <p>90000-00000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;