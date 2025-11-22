import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const positions = useLoaderData();
  const mapref = useRef(null);
  console.log(positions);
  const position = [23.685, 90.3563];
  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const distric = positions.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (distric) {
      const coord = [distric.latitude, distric.longitude];
      mapref.current.flyTo(coord, 11, { duration: 2 });
    }
  };
  return (
    <div className="bg-white p-10 rounded-2xl mt-10">
      <div>
        <h2 className="text-4xl font-semibold text-secondary">
          We are available in 64 districts
        </h2>
      </div>
      <div className="py-4">
        <form onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              name="location"
              type="search"
              className="grow"
              placeholder="Search"
            />
          </label>
        </form>
      </div>
      {/*  */}
      <div>
        <h2 className="text-2xl font-semibold text-secondary">
          We deliver almost all over Bangladesh
        </h2>
        <div className="border w-full h-[800px] mt-12">
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            className="h-[800px]"
            ref={mapref}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {positions.map((position, index) => (
              <Marker
                key={index}
                position={[position.latitude, position.longitude]}
              >
                <Tooltip>
                  {" "}
                  <strong>{position.district}</strong> <br /> Service area:
                  {position.covered_area.join(", ")}
                </Tooltip>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
