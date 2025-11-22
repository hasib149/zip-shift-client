import React from "react";
import loca from "../../../assets/location-merchant.png"

const Marcent = () => {
  return (
    <div className="mt-20 max-w-5xl mx-auto">
      <div className="bg-secondary py-12 flex gap-3.5 rounded-3xl">
        <div className="p-10 text-start flex-1">
          <h2 className="text-2xl text-white">Merchant and Customer Satisfaction is Our First Priority</h2>
          <p className="text-lg text-white">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex gap-2.5 pt-10">
            <button className="btn rounded-full btn-outline text-primary hover:bg-primary hover:text-black">Become a Merchant</button>
            <button className="btn rounded-full btn-outline text-primary hover:bg-primary hover:text-black">Earn with ZapShift Courier</button>
          </div>
        </div>
        <div className="flex-1 ">
            <img src={loca} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Marcent;
