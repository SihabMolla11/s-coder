import { animated, useSpring } from "react-spring";
import { skillImages, tools } from "../../../../public/skills_images";

const Skills = () => {
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
    <div data-aos="fade-up" className="my-container mt-10 ">
      <h2 className="text-4xl text-center font-bold text-white uppercase">Skills</h2>
      {/* <div className="flex flex-col gap-10 md:flex-row justify-between text-white mt-10 ">
                <div className="w-full " data-aos="fade-right">
                    <h2 className="font-semibold text-xl my-3">
                        <span className="bg-gradient-to-l rounded-md from-[#D56BFD] to-[#860C78] p-2">
                            Front End
                        </span>
                    </h2>
                    <div className="p-4">
                        <h3 className="flex gap-2 text-2xl font-semibold items-center">
                            <FaHtml5 /> <span>HTML-5</span>
                        </h3>
                        <div className="w-full mt-2 h-2 bg-[#080017] rounded-xl">
                            <div
                                className={`skillBar-color w-[85%] h-full relative   rounded-xl transition duration-700 ease-in-out`}
                            >
                                <p className=" absolute right-0 -top-7 bg-white text-black font-semibold rounded-sm  transition duration-700 ease-in-out ">
                                    85%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="flex gap-2 text-2xl font-semibold items-center">
                            <FaCss3 /> <span>CSS-3</span>
                        </h3>
                        <div className="w-full mt-2 h-2 bg-[#080017] rounded-xl">
                            <div
                                className={`skillBar-color w-[70%] h-full relative   rounded-xl transition duration-700 ease-in-out`}
                            >
                                <p className=" absolute right-0 -top-7 bg-white text-black font-semibold rounded-sm  transition duration-700 ease-in-out ">
                                    70%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="flex gap-2 text-2xl font-semibold items-center">
                            <FaBootstrap /> <span>BOOTSTRAP-5</span>
                        </h3>
                        <div className="w-full mt-2 h-2 bg-[#080017] rounded-xl">
                            <div
                                className={`skillBar-color w-[80%] h-full relative   rounded-xl transition duration-700 ease-in-out`}
                            >
                                <p className=" absolute right-0 -top-7 bg-white text-black font-semibold rounded-sm  transition duration-700 ease-in-out ">
                                    80%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="flex gap-2 text-2xl font-semibold items-center">
                            <SiTailwindcss /> <span>TAILWIND-CSS</span>
                        </h3>
                        <div className="w-full mt-2 h-2 bg-[#080017] rounded-xl">
                            <div
                                className={`skillBar-color w-[85%] h-full relative   rounded-xl transition duration-700 ease-in-out`}
                            >
                                <p className=" absolute right-0 -top-7 bg-white text-black font-semibold rounded-sm  transition duration-700 ease-in-out ">
                                    85%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="flex gap-2 text-2xl font-semibold items-center">
                            <FaJs /> <span>JAVASCRIPT -(JS) </span>
                        </h3>
                        <div className="w-full mt-2 h-2 bg-[#080017] rounded-xl">
                            <div
                                className={`skillBar-color w-[65%] h-full relative   rounded-xl transition duration-700 ease-in-out`}
                            >
                                <p className=" absolute right-0 -top-7 bg-white text-black font-semibold rounded-sm  transition duration-700 ease-in-out ">
                                    65%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="flex gap-2 text-2xl font-semibold items-center">
                            <FaReact /> <span>REACT JS </span>
                        </h3>
                        <div className="w-full mt-2 h-2 bg-[#080017] rounded-xl">
                            <div
                                className={`skillBar-color w-[80%] h-full relative   rounded-xl transition duration-700 ease-in-out`}
                            >
                                <p className=" absolute right-0 -top-7 bg-white text-black font-semibold rounded-sm  transition duration-700 ease-in-out ">
                                    85%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="flex gap-2 text-2xl font-semibold items-center">
                            <SiNextdotjs /> <span>NEXT JS </span>
                        </h3>
                        <div className="w-full mt-2 h-2 bg-[#080017] rounded-xl">
                            <div
                                className={`skillBar-color w-[50%] h-full relative   rounded-xl transition duration-700 ease-in-out`}
                            >
                                <p className=" absolute right-0 -top-7 bg-white text-black font-semibold rounded-sm  transition duration-700 ease-in-out ">
                                    50%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="flex gap-2 text-2xl font-semibold items-center">
                            <BiLogoFirebase /> <span>FIREBASE </span>
                        </h3>
                        <div className="w-full mt-2 h-2 bg-[#080017] rounded-xl">
                            <div
                                className={`skillBar-color w-[75%] h-full relative   rounded-xl transition duration-700 ease-in-out`}
                            >
                                <p className=" absolute right-0 -top-7 bg-white text-black font-semibold rounded-sm  transition duration-700 ease-in-out ">
                                    75%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full " data-aos="fade-left">
                    <h2 className="font-semibold text-xl my-3">
                        <span className="bg-gradient-to-l rounded-md from-[#D56BFD] to-[#860C78] p-2">
                            Back End
                        </span>
                    </h2>
                    <div className="p-4">
                        <h3 className="flex gap-2 text-2xl font-semibold items-center">
                            <FaJs /> <span>JAVASCRIPT -(JS) </span>
                        </h3>
                        <div className="w-full mt-2 h-2 bg-[#080017] rounded-xl">
                            <div
                                className={`skillBar-color w-[65%] h-full relative   rounded-xl transition duration-700 ease-in-out`}
                            >
                                <p className=" absolute right-0 -top-7 bg-white text-black font-semibold rounded-sm  transition duration-700 ease-in-out ">
                                    65%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="flex gap-2 text-2xl font-semibold items-center">
                            <FaNodeJs /> <span>NODE JS</span>
                        </h3>
                        <div className="w-full mt-2 h-2 bg-[#080017] rounded-xl">
                            <div
                                className={`skillBar-color w-[60%] h-full relative   rounded-xl transition duration-700 ease-in-out`}
                            >
                                <p className=" absolute right-0 -top-7 bg-white text-black font-semibold rounded-sm  transition duration-700 ease-in-out ">
                                    60%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="flex gap-2 text-2xl font-semibold items-center">
                            <SiExpress /> <span>EXPRESS JS</span>
                        </h3>
                        <div className="w-full mt-2 h-2 bg-[#080017] rounded-xl">
                            <div
                                className={`skillBar-color w-[75%] h-full relative   rounded-xl transition duration-700 ease-in-out`}
                            >
                                <p className=" absolute right-0 -top-7 bg-white text-black font-semibold rounded-sm  transition duration-700 ease-in-out ">
                                    75%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="flex gap-2 text-2xl font-semibold items-center">
                            <SiMongodb /> <span>MONGODB</span>
                        </h3>
                        <div className="w-full mt-2 h-2 bg-[#080017] rounded-xl">
                            <div
                                className={`skillBar-color w-[70%] h-full relative   rounded-xl transition duration-700 ease-in-out`}
                            >
                                <p className=" absolute right-0 -top-7 bg-white text-black font-semibold rounded-sm  transition duration-700 ease-in-out ">
                                    70%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="flex gap-2 text-2xl font-semibold items-center">
                            <SiNodemon /> <span>NODEMON</span>
                        </h3>
                        <div className="w-full mt-2 h-2 bg-[#080017] rounded-xl">
                            <div
                                className={`skillBar-color w-[65%] h-full relative   rounded-xl transition duration-700 ease-in-out`}
                            >
                                <p className=" absolute right-0 -top-7 bg-white text-black font-semibold rounded-sm  transition duration-700 ease-in-out ">
                                    65%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

      <h3 className="text-3xl text-center font-bold text-white uppercase mt-16">
        Technologies I Use
      </h3>

      <div className="flex flex-wrap gap-4 items-center justify-center w-full max-w-[1000px] mx-auto mt-6">
        {skillImages?.map((skill) => (
          <button
            key={skill?.id}
            className="bg-white flex items-center gap-2 px-7 py-4 rounded-full justify-center md:w-[calc(30%-16px)] lg:w-[calc(25%-16px)] h-14"
          >
            <img className="w-10" height={100} width={100} src={skill?.image} alt={skill?.image} />
            <span className="text-base whitespace-nowrap font-semibold text-black ">
              {skill?.name}
            </span>
          </button>
        ))}
      </div>

      <h3 className="text-3xl text-center font-bold text-white uppercase mt-16">
        DEVELOPMENT & PRODUCTIVITY <br /> TOOLS I USE
      </h3>

      <div className="flex flex-wrap gap-4 items-center justify-center w-full max-w-[1000px] mx-auto mt-6">
        {tools?.map((skill) => (
          <button
            key={skill?.id}
            className="bg-white flex items-center gap-2 px-7 py-4 rounded-full justify-center md:w-[calc(30%-16px)] lg:w-[calc(25%-16px)] h-14"
          >
            <img className=" w-8 max-h-10" height={100} width={100} src={skill?.image} alt={skill?.image} />
            <span className="text-base whitespace-nowrap font-semibold text-black">{skill?.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
