import React from "react";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";

const OldProjectCart = ({ data }) => {
  return (
    <div className="bg-[#ffffffa1] w-full p-4 rounded-xl flex flex-col lg:flex-row items-center gap-6">
      <div className="w-full  lg:w-[50%] rounded-lg overflow-hidden h-full">
        <img className="w-full h-[320px] object-cover" src={data?.image} alt="project_image" />
      </div>
      <div className="w-full lg:w-[50%]">
        <h3 className="text-2xl font-semibold text-black"> {data?.name}</h3>
        <div className="mt-4">
          <p className="font-medium text-black text-xl">Technologists</p>
          <div className="mt-2 space-x-2 space-y-2">
            {data?.technology?.map((item, index) => (
              <div
                key={index}
                className="bg-white  inline-flex items-center gap-2 px-2 py-1 rounded-md"
              >
                <img
                  className="h-[20px] w-[20px] object-cover"
                  height={20}
                  width={20}
                  src={item?.image}
                  alt="skill image"
                />
                <p className="text-sm font-semibold text-black">{item?.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <p className="font-medium text-sm">Links</p>
            <div className="flex flex-col md:flex-row items-start lg:items-center gap-3 mt-2">
              {data?.liveSiteLink && (
                <Link
                  to={data?.liveSiteLink}
                  className="inline-flex px-4 py-2 rounded-lg items-center gap-2 bg-[#ffffffab]"
                >
                  <IoIosLink className="text-black"/>
                  <p className="text-[12px] font-semibold text-black">Live Site Link</p>
                </Link>
              )}
              {data?.clientCode && (
                <Link
                  to={data?.clientCode}
                  className="inline-flex px-4 py-2 rounded-lg items-center gap-2 bg-[#ffffffab]"
                >
                  <IoIosLink />
                  <p className="text-[12px] font-semibold">Client Code Link</p>
                </Link>
              )}
              {data?.serverCodeLink && (
                <Link
                  to={data?.serverCodeLink}
                  className="inline-flex px-4 py-2 rounded-lg items-center gap-2 bg-[#ffffffab]"
                >
                  <IoIosLink />
                  <p className="text-[12px] font-semibold">Server Code Link</p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldProjectCart;
