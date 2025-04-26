import { FaRegCalendarAlt } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { experiences } from "../../../data/experience";

const Experience = () => {
  return (
    <div data-aos="fade-up" className="my-container mt-10 mb-20 ">
      <h2 className="text-4xl text-center font-bold text-[#dbdada] uppercase">EXPERIENCE</h2>
      {experiences?.map((experience, index) => (
        <div key={index} className="bg-[#dbdada] rounded-xl p-8 mt-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <Link
              className="cursor-pointer max-w-fit bg-[#460c41] flex items-center justify-start gap-4 rounded-full p-1 pr-6 "
              to={experience?.website}
              target="_blank"
            >
              <div className="h-14 w-14 p-4 border bg-[#61616173] border-[#8B1381] rounded-full">
                <img
                  className="w-full h-full"
                  height={100}
                  width={100}
                  src={experience?.logo}
                  alt={experience?.name}
                />
              </div>
              <div>
                <h3 className="text-xl text-white font-bold">{experience?.name}</h3>
                <p className="flex items-center justify-start gap-1 text-white">
                  <ImLocation2 />
                  <span className="text-sm font-semibold">{experience?.location}</span>
                </p>
              </div>
            </Link>
            <button
              type="button"
              className="uppercase font-bold py-1 px-4 rounded-full flex items-center  gap-2 bg-[#d56cff63]"
            >
              <FaRegCalendarAlt className="text-black" />
              <span className="text-black">
                {experience?.started} - {experience?.end ? experience?.end : "Present"}
              </span>
            </button>
          </div>

          <div className="flex items-center justify-start gap-4">
            <div className="h-14 w-14 rounded-full border border-[#D66CFF] overflow-hidden ">
              <img
                height={70}
                website={70}
                src={experience?.image}
                alt="Sihab Uddin Molla"
                className="h-full w-full"
              />
            </div>
            <h3 className="text-2xl font-bold capitalize text-black">
              {experience?.position}
            </h3>
          </div>

          <div>
            <ul>
              {experience?.responsibilities?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-6 pb-2 font-medium text-[#000000af]"
                >
                  <span className="mt-[5px]">
                    <FiCheckCircle className="text-green-600" />
                  </span>

                  <span className="text-black font-medium">{item?.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
