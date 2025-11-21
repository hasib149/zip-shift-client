import React from "react";
import live from "../../../assets/live-tracking.png"

const OurService = () => {
  return (
    <div className="bg-secondary min-h-screen rounded-2xl mt-14 ">
      <div className="text-center pt-16">
        <h3 className="text-2xl font-bold mb-1 text-white">Our Services</h3>
        <p className="text-xl font-semibold text-white ">
          Enjoy fast, reliable parcel delivery with real-time <br />
          tracking and zero hassle. From personal packages to business shipments
          — we deliver on time, every time.
        </p>
        <div className=" pt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center mx-auto p-16">
          <div className="max-w-md bg-white rounded-2xl shadow-md p-3 hover:shadow-xl transition-all duration-300 flex flex-col space-y-2 mx-auto text-center">
            <img
              src={live}
              alt="van image"
              className="w-20 h-20 object-contain mx-auto bg-blue-200 rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Booking Pick & Drop
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="max-w-md bg-white rounded-2xl shadow-md p-3 hover:shadow-xl transition-all duration-300 flex flex-col space-y-2 mx-auto text-center">
            <img
              src={live}
              alt="van image"
              className="w-20 h-20 object-contain mx-auto bg-blue-200 rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Booking Pick & Drop
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="max-w-md bg-white rounded-2xl shadow-md p-3 hover:shadow-xl transition-all duration-300 flex flex-col space-y-2 mx-auto text-center">
            <img
              src={live}
              alt="van image"
              className="w-20 h-20 object-contain mx-auto bg-blue-200 rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Booking Pick & Drop
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="max-w-md bg-white rounded-2xl shadow-md p-3 hover:shadow-xl transition-all duration-300 flex flex-col space-y-2 mx-auto text-center">
            <img
              src={live}
              alt="van image"
              className="w-20 h-20 object-contain mx-auto bg-blue-200 rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Booking Pick & Drop
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="max-w-md bg-white rounded-2xl shadow-md p-3 hover:shadow-xl transition-all duration-300 flex flex-col space-y-2 mx-auto text-center">
            <img
              src={live}
              alt="van image"
              className="w-20 h-20 object-contain mx-auto bg-blue-200 rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Booking Pick & Drop
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="max-w-md bg-white rounded-2xl shadow-md p-3 hover:shadow-xl transition-all duration-300 flex flex-col space-y-2 mx-auto text-center">
            <img
              src={live}
              alt="van image"
              className="w-20 h-20 object-contain mx-auto bg-blue-200 rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Booking Pick & Drop
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
