import React, { useEffect, useState } from "react";
import ContactComp from "../../components/common/contactcomp/ContactComp";
import Footer from "../../components/common/footer/Footer";
import Navbar from "../../components/common/navbar/Navbar";
import img from "../../assets/images/13.jpg";
import axios from "axios";
import SingleAllService from "./SingleAllService";
import SomeInfo from "../../components/common/someInfo";

const AllServices = () => {
  const [allservices, setAllservices] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const pageSize = 6;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/allservices?page=${page}&&size=${pageSize}`)
      .then((res) => {
        setAllservices(res.data.allservices);
        const count = res.data.count;
        const pageNumber = Math.ceil(count / pageSize);
        setCount(pageNumber);
      });
  }, [page]);
  return (
    <div>
      <Navbar />
      <div className="">
        <img src={img} width="100%" alt="" />
      </div>
      <div className="grid grid-cols-12 px-2 my-8">
        <div className="col-span-12 md:col-span-10 lg:col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-12 px-2">
            {allservices.map((allservice, i) => (
              <SingleAllService
                key={i}
                allservice={allservice}
              ></SingleAllService>
            ))}
            <div className="pagination">
              <strong>Pages:</strong>
              {[...Array(count).keys()].map((number) => (
                <button
                  className={number === page ? "selected" : ""}
                  key={number}
                  onClick={() => setPage(number)}
                >
                  {number + 1}
                </button>
              ))}
            </div>
          </div>
          {/* testing facility */}
          <SomeInfo></SomeInfo>
        </div>
        <div className="col-span-0 md:col-span-2 lg:col-span-2 hidden md:hidden lg:block ">
          <img
            className="mb-8"
            width="100%"
            src="https://static.vecteezy.com/system/resources/previews/001/972/396/large_2x/male-doctor-wearing-medical-mask-free-vector.jpg"
            alt=""
          />
          <img
            className="my-8"
            width="100%"
            src="https://static.vecteezy.com/system/resources/previews/001/972/396/large_2x/male-doctor-wearing-medical-mask-free-vector.jpg"
            alt=""
          />
          <img
            className="my-8"
            width="100%"
            src="https://static.vecteezy.com/system/resources/previews/001/972/396/large_2x/male-doctor-wearing-medical-mask-free-vector.jpg"
            alt=""
          />
        </div>
      </div>
      <ContactComp />
      <Footer />
    </div>
  );
};

export default AllServices;
