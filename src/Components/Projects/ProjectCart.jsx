import React from "react";

const ProjectCart = ({ data }) => {
  return (
    <>
      <div class="bg-white rounded-lg shadow-lg overflow-hidden h-full w-full">
        <img src={data?.image} alt="Mountain" class="w-full  object-cover" />

        <hr className="border-t-4 border-purple-500 rounded-full mx-6 my-4" />

        <div class="px-6 pb-4 ">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">{data?.name}</h2>
          <p class="text-black  leading-tight mb-4">{data?.description}</p>

          <div className="">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 mb-6">
              {data?.technology?.map((item) => (
                <div className="flex border justify-center border-purple-200 px-3 py-0.5 gap-2 rounded-full overflow-hidden items-center">
                  <img className="w-5 h-5" src={item?.image} alt="" />{" "}
                  <p className="text-xs font-medium text-black whitespace-nowrap">{item?.name}</p>
                </div>
              ))}
            </div>

            <a
              className="bg-purple-700 hover:bg-purple-800 text-white font-medium  py-2 px-6 rounded-md "
              href={data?.liveSiteLink}
              target="_blank"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCart;
