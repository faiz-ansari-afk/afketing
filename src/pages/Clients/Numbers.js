import React from "react";

function Numbers() {
  return (
    <div className="px-52  mt-20 sm:px-2 ">
      <h1 className="text-2xl text-gray-600 my-5 ">Until today we have provided our services to ....</h1>
      <div className="bg-secondary flex space-x-10  p-5 justify-between rounded  sm:flex-col sm:p-0 sm:space-x-0 lg:p-0 lg:space-x-0 lg:flex-col">
        <div className="flex flex-col space-y-2 sm:mt-5 lg:my-8">
          <h1 className=" text-9xl text-black sm:text-8xl lg:text-7xl">152</h1>
          <h1 className="text-black  text-2xl">Clients</h1>
        </div>

        <div className="flex flex-col space-y-2 sm:mt-10 lg:my-8">
          <h1 className=" text-9xl text-black sm:text-8xl lg:text-7xl">485</h1>
          <h1 className="text-black  text-2xl">Projects</h1>
        </div>

        <div className="flex flex-col space-y-2 sm:mt-10 lg:my-8">
          <h1 className=" text-9xl text-black sm:text-8xl lg:text-7xl">24</h1>
          <h1 className="text-black  text-2xl">Locations</h1>
        </div>
      </div>
    </div>
  );
}

export default Numbers;