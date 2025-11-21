import React from "react";
import van from "../../../assets/delivery-van.png";

const Work = () => {
  return (
    <div className="text-center mt-14">
      <p className="text-2xl font-bold mb-4">How it Works</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 justify-center mx-auto">
        <div className="max-w-64 bg-white rounded-2xl shadow-md p-3 hover:shadow-xl transition-all duration-300 flex flex-col space-y-2 mx-auto">
          <img
            src={van}
            alt="van image"
            className="w-20 h-20 object-contain mx-auto"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            Booking Pick & Drop
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            From personal packages to  business shipments — we 
            deliver on time, every time.
          </p>
        </div>

        <div className="max-w-64 bg-white rounded-2xl shadow-md p-3 hover:shadow-xl transition-all duration-300 flex flex-col space-y-2 mx-auto">
          <img
            src={van}
            alt="van image"
            className="w-20 h-20 object-contain mx-auto"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            Cash On Delivery
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        <div className="max-w-64 bg-white rounded-2xl shadow-md p-3 hover:shadow-xl transition-all duration-300 flex flex-col space-y-2 mx-auto">
          <img
            src={van}
            alt="van image"
            className="w-20 h-20 object-contain mx-auto"
          />
          <h3 className="text-xl font-semibold text-gray-800">Delivery Hub</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        <div className="max-w-64 bg-white rounded-2xl shadow-md p-3 hover:shadow-xl transition-all duration-300 flex flex-col space-y-2 mx-auto">
          <img
            src={van}
            alt="van image"
            className="w-20 h-20 object-contain mx-auto"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            Booking SME & Corporate
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
