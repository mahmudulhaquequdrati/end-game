import React from "react";
import { Link } from "react-router-dom";

const SingleAllService = ({ allservice }) => {
  const {
    serviceName,
    servicesShortDescription,
    servicePrice,
    serviceImg,
    _id,
  } = allservice;
  return (
    <div className=" flex gap-3 special-font">
      <div className="w-[100%] h-[90%] flex">
        <img width="100%" className="rounded-lg" src={serviceImg} alt="" />
      </div>
      <div className="">
        <p className="font-medium text-xl pb-2 capitalize ">{serviceName}</p>
        <p>price: BDT {servicePrice}</p>
        <p className="py-1  text-gray-500  text-sm">
          {servicesShortDescription}
        </p>
        <Link to={`/services/${_id}`}>
          {" "}
          <button className=" py-1 rounded-md bg-green-600 text-white px-6 mt-2 ">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleAllService;
