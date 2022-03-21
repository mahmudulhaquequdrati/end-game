import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../../common/footer/Footer";
import Navbar from "../../common/navbar/Navbar";
import img from "../../../assets/images/medial.png";
import ContactComp from "../../common/contactcomp/ContactComp";
import AboutInfo from "../../common/AboutInfo";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const ServiceDetails = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const [servicesDetails, setServicesDetails] = useState({});
  const [PriceforDiscount, setPriceforDiscount] = useState([]);
  const { serviceId } = useParams();
  const {
    serviceName,
    serviceImg,
    servicesShortDescription,
    servicesDescription,
    servicePrice,
  } = servicesDetails;

  const onSubmit = (data) => {
    const OrderPrice = price;
    data.price = OrderPrice;
    data.serviceName = serviceName;
    data.serviceImg = serviceImg;
    // sending appointments to the database

    axios.post("http://localhost:5000/appointment", data).then((res) => {
      if (res.data.insertedId) {
        alert("successfully appointment booked!");
      }
    });
    reset();
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/services/${serviceId}`).then((res) => {
      setServicesDetails(res.data);
    });
  }, [serviceId]);

  useEffect(() => {
    axios.get("http://localhost:5000/discount").then((res) => {
      setPriceforDiscount(res.data);
    });
  }, []);

  let price = servicePrice;
  const totalP = parseInt(PriceforDiscount[0]?.total);
  if (totalP <= servicePrice) {
    const discount = servicePrice * 0.1;
    const discountPrice = servicePrice - discount;
    price = discountPrice;
    // return price;
  }
  return (
    <div>
      <Navbar />
      <div
        className="items-center flex"
        style={{
          height: "60vh",
          background: "rgba(50, 50, 50, 0.30)",
          backgroundImage: `url(${img})`,
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="">
          <p className="text-4xl font-bold pl-6 text-white">
            Want to know more?
          </p>
          <p className="text-lg pl-6 font-bold text-white">
            this service has really some great features
          </p>
        </div>
      </div>
      \
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-20">
        <div className="pl-6 ">
          <img src={serviceImg} alt="" />
        </div>
        <div className="pr-12 pl-6">
          <p className="text-lg font-blod">Service Name : {serviceName}</p>
          <p className="font-semibold py-2">Price : BDT {servicePrice} </p>
          <p className="pt-4">Highlight : {servicesShortDescription}</p>
          <p className="py-4">{servicesDescription}</p>
        </div>
      </div>
      <div className="text-center text-2xl  font-semibold text-[#0FCFE9]">
        <p className="py-6">Wanna Book this service</p>
        <div className="flex justify-center w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[100%] md:w-[80%] lg:w-[60%] mx-4 lg:mx-12"
          >
            <input
              required
              {...register("name")}
              type="text"
              defaultValue={user.displayName}
              placeholder="name"
              className="border p-2 focus:outline-none focus:border-pink-400 w-full text-base"
            />
            <br />
            <input
              required
              {...register("email")}
              type="email"
              defaultValue={user.email}
              placeholder="Email"
              className="border mt-2 p-2 focus:outline-none focus:border-pink-400 w-full text-base"
            />
            <br />
            <input
              required
              {...register("phone")}
              type="text"
              placeholder="Phone"
              className="border mt-2 p-2 focus:outline-none focus:border-pink-400 w-full text-base"
            />
            <br />
            {totalP && (
              <p className=" mt-2 p-2  w-full text-sm text-left">
                Book appointment for more than 15000 BDT and get flat 10%
                discount
              </p>
            )}
            <p className=" mt-2 p-2 border w-full text-base text-left">
              Price with discount (if applicable) BDT {price}
            </p>
            <textarea
              required
              {...register("address")}
              type="text"
              placeholder="Address"
              className="border  mt-2 justify-start px-2 h-28 focus:outline-none focus:border-pink-400 w-full text-base"
            />
            <div className="">
              <input
                style={{
                  background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
                }}
                type="submit"
                value="Book Appointment Now"
                className="cursor-pointer w-full mt-3 lg:mt-0 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2  text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2   sm:w-auto sm:text-sm"
              />
            </div>
          </form>
        </div>
      </div>
      <p className="text-center text-2xl pt-24 font-semibold text-[#0FCFE9]">
        Why choose us
      </p>
      <AboutInfo />
      <ContactComp />
      <Footer />
    </div>
  );
};

export default ServiceDetails;
