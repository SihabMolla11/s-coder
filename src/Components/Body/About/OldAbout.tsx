import { useState } from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import Animated from "../../../animated/Animated";
import image1 from "../../../assets/about.png";
import DownloadResume from "../../DownloadResume/DownloadResume";
import SocialIcons from "../../SocialIcons/SocialIcons";

const OldAbout = () => {
  const [info, setInfo] = useState("self");

  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 300,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  return (
    <div className="my-container" data-aos="fade-down">
      <div>
        <h2 className="text-center  text-4xl font-bold text-white uppercase" data-aos="fade-up">
          ABOUT ME
        </h2>
        <div className="hidden md:block">
          <div className=" mt-16  flex">
            <div className="w-[50%]"></div>
            <div className="w-[50%] text-white">
              <button
                onClick={() => setInfo("self")}
                className={`text-lg cursor-pointer font-bold text-center md:text-start  px-4 py-2 h-12 rounded-l-lg bg-transparent ${
                  info === "self"
                    ? "bg-white text-[#8B1381]"
                    : " bg-gradient-to-l from-[#D66CFF] to-[#850B76]"
                }`}
              >
                About My Self
              </button>
              <button
                onClick={() => setInfo("pinfo")}
                className={`text-lg cursor-pointer font-bold text-center md:text-start  px-4 py-2 h-12 rounded-r-lg bg-transparent ${
                  info === "pinfo"
                    ? "bg-white text-[#8B1381]"
                    : " bg-gradient-to-r from-[#D66CFF] to-[#850B76]"
                }`}
              >
                Personal Info
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="w-full">
          <img className=" w-full  " src={image1} alt="" />
        </div>
        <div className="w-full  text-white">
          <div className="md:hidden flex my-4">
            <button
              onClick={() => setInfo("self")}
              className={` cursor-pointer font-bold text-center md:text-start  px-4 py-2 h-12 rounded-l-lg bg-transparent ${
                info === "self"
                  ? "bg-white text-[#8B1381]"
                  : " bg-gradient-to-l from-[#D66CFF] to-[#850B76]"
              }`}
            >
              About My Self
            </button>
            <button
              onClick={() => setInfo("pinfo")}
              className={` cursor-pointer font-bold text-center md:text-start  px-4 py-2 h-12 rounded-r-lg bg-transparent ${
                info === "pinfo"
                  ? "bg-white text-[#8B1381]"
                  : " bg-gradient-to-r from-[#D66CFF] to-[#850B76]"
              }`}
            >
              Personal Info
            </button>
          </div>

          {info === "pinfo" && (
            <div>
              <div className="flex gap-4 md:gap-6 lg:gap-16 md:text-lg font-medium">
                <div className=" space-y-3">
                  <p className=" drop-shadow-2xl shadow-white">Name:</p>
                  <p className=" drop-shadow-2xl shadow-white">Age:</p>
                  <p className=" drop-shadow-2xl shadow-white">Nationality:</p>
                  <p className=" drop-shadow-2xl shadow-white">Address:</p>
                  <p className=" drop-shadow-2xl shadow-white">Phone:</p>
                  <p className=" drop-shadow-2xl shadow-white">E-Mail:</p>
                </div>
                <div className="space-y-3">
                  <p className=" drop-shadow-2xl shadow-white">Sihab Uddin Molla</p>
                  <p className="drop-shadow-2xl shadow-white">20</p>
                  <p>Bangladeshi</p>
                  <p>Dhaka, Bangladesh</p>

                  <p className="drop-shadow-2xl shadow-white">+8801608168147</p>
                  <p className="drop-shadow-2xl shadow-white">
                    <Link to="mailto:sihabmolla10@gmail.com">sihabmolla10@gmail.com</Link>
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <SocialIcons />
                <div className="mt-5">
                  <DownloadResume />
                </div>
              </div>
            </div>
          )}

          {info === "self" && (
            <div className=" space-y-4">
              <h3 className="text-3xl font-bold">Hello!</h3>
              <p className=" font-semibold">
                As a dedicated and innovative full stack web developer with over one year of
                professional experience, I am passionate about leveraging my skills in both
                front-end and back-end technologies to create seamless and dynamic web applications.
                My experience in a fast-paced company environment has honed my ability to deliver
                high-quality solutions that meet diverse client needs. I thrive in collaborative
                settings, constantly seeking to learn and integrate the latest industry trends and
                technologies. My goal is to contribute to a forward-thinking team where I can apply
                my expertise to drive impactful projects and advance my professional growth.
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
                <div className="bg-gradient-to-l from-[#D66CFF] to-[#850B76] text-center p-4 rounded-md">
                  <h4 className="text-lg md:text-2xl w-56 font-bold capitalize mb-4">
                    Years Experience
                  </h4>
                  <span
                    className="md:text-5xl text-3xl flex justify-center font-bold animated-number"
                    data-number={5}
                  >
                    <Animated number={2} /> +
                  </span>
                </div>
                <div className="  text-center bg-gradient-to-l from-[#D66CFF] to-[#850B76] p-4 rounded-md">
                  <h4 className="text-lg md:text-2xl w-56 font-bold mb-4  capitalize">
                    Project Completed
                  </h4>
                  <span
                    className="text-2xl md:text-5xl flex justify-center font-bold animated-number"
                    data-number={10}
                  >
                    <Animated number={13} /> +
                  </span>
                </div>
              </div>
              <DownloadResume />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OldAbout;
