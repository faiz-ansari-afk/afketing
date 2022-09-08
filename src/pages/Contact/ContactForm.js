import React from "react";

function ContactForm() {
  return (
    <div>
      <form className="flex flex-col space-y-10">
        <h1 className="text-4xl font-semibold text-primary mb-5">
          Send a Message
        </h1>

        <div className="flex space-x-10 sm:space-x-4 lg:space-x-3 ">
          <input
            type="text"
            placeholder="First name"
            className=" py-3 px-5  bg-blue-50 focus:outline-primary rounded-lg text-gray-500 w-full"
          />

          <input
            type="text"
            placeholder="Last name"
            className=" py-3 px-5  bg-blue-50 focus:outline-primary rounded-lg text-gray-500 w-full"
          />
        </div>

        <div className="flex space-x-10 sm:space-x-4 lg:space-x-3 ">
          <input
            type="text"
            placeholder="Email"
            className=" py-3 px-5  bg-blue-50 focus:outline-primary rounded-lg text-gray-500 w-full"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className=" py-3 px-5  bg-blue-50 focus:outline-primary rounded-lg text-gray- w-full"
          />
        </div>

        <div className="flex space-x-10 sm:space-x-4 lg:space-x-3">
          <textarea
            type="text"
            rows={5}
            placeholder="Message"
            className=" py-3 px-5  bg-blue-50 focus:outline-primary rounded-lg text-gray-500 w-full"
          />
        </div>

        <div className="flex justify-end sm:justify-center lg:justify-center">
        <button 
        className='text-primary bg-secondary px-5 py-3 rounded max-w-max hover:bg-primary hover:text-secondary duration-300'>
          Send A Message
          </button>

        </div>

      </form>
    </div>
  );
}

export default ContactForm;