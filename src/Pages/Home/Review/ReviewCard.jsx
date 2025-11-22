import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ reviewdata }) => {
  const { review, user_photoURL, userName } = reviewdata;
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg p-6 rounded-2xl border border-gray-200">
      <FaQuoteLeft className="text-3xl text-primary mb-3" />

      <p className="text-gray-600 ">{review}</p>

      <div className="border-t border-dashed border-gray-300 my-4"></div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary"><img src={user_photoURL} alt="" /></div>

        <div>
          <h4 className="font-semibold text-gray-800">{userName}</h4>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
