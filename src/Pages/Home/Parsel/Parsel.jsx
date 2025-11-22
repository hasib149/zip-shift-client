import React from "react";
import { FiMapPin, FiTruck } from "react-icons/fi";
import safe from "../../../assets/safe-delivery.png";
import life from "../../../assets/live-tracking.png";
import agent from "../../../assets/agent-pending.png";

const Parsel = () => {
  return (
    <div>
      <div className=" border border-y-2 py-24 border-gray-500 mt-24 border-dotted p-5">
        <div className="max-w-5xl mx-auto p-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="flex items-center gap-6 p-6">
              {/* left illustration */}
              <div className="shrink-0">
                <img
                  src={safe}
                  alt="live parcel illustration"
                  className="w-48 h-36 object-contain"
                />
              </div>

              {/* vertical separator */}
              <div className="hidden md:block h-24 border-l-2 border-dashed border-gray-200 dark:border-gray-700" />

              {/* right content */}
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <FiTruck className="w-6 h-6 " />
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Live Parcel Tracking
                  </h3>
                </div>

                <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Stay updated in real-time with our live parcel tracking
                  feature. From pick-up to delivery, monitor your shipment's
                  journey and get instant status updates for complete peace of
                  mind.
                </p>

                <div className="mt-4 flex items-center gap-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full   text-sm">
                    <FiMapPin className="w-4 h-4" />
                    <span>Real-time tracking</span>
                  </div>

                  <button className="btn btn-sm btn-outline btn-primary text-secondary normal-case">
                    Track Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto p-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="flex items-center gap-6 p-6">
              {/* left illustration */}
              <div className="shrink-0">
                <img
                  src={life}
                  alt="live parcel illustration"
                  className="w-48 h-36 object-contain"
                />
              </div>

              {/* vertical separator */}
              <div className="hidden md:block h-24 border-l-2 border-dashed border-gray-200 dark:border-gray-700" />

              {/* right content */}
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <FiTruck className="w-6 h-6 " />
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Live Parcel Tracking
                  </h3>
                </div>

                <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Stay updated in real-time with our live parcel tracking
                  feature. From pick-up to delivery, monitor your shipment's
                  journey and get instant status updates for complete peace of
                  mind.
                </p>

                <div className="mt-4 flex items-center gap-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full   text-sm">
                    <FiMapPin className="w-4 h-4" />
                    <span>Real-time tracking</span>
                  </div>

                  <button className="btn btn-sm btn-outline btn-primary text-secondary normal-case">
                    Track Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto p-6 ">
          <div className="bg-white  dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="flex items-center gap-6 p-6">
              {/* left illustration */}
              <div className="shrink-0">
                <img
                  src={agent}
                  alt="live parcel illustration"
                  className="w-48 h-36 object-contain"
                />
              </div>

              {/* vertical separator */}
              <div className="hidden md:block h-24 border-l-2 border-dashed border-gray-200 dark:border-gray-700" />

              {/* right content */}
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <FiTruck className="w-6 h-6 " />
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Live Parcel Tracking
                  </h3>
                </div>

                <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Stay updated in real-time with our live parcel tracking
                  feature. From pick-up to delivery, monitor your shipment's
                  journey and get instant status updates for complete peace of
                  mind.
                </p>

                <div className="mt-4 flex items-center gap-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full   text-sm">
                    <FiMapPin className="w-4 h-4" />
                    <span>Real-time tracking</span>
                  </div>

                  <button className="btn btn-sm btn-outline btn-primary text-secondary normal-case">
                    Track Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parsel;
