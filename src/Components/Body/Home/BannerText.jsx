import { Typewriter } from "react-simple-typewriter";
import DownloadResume from "../../DownloadResume/DownloadResume";

const BannerText = () => {
    return (
        <div>
            <div className="text-white font-bold ">
                <h2 className="text-lg md:text-2xl">Hello, I am</h2>
                <h2 className="text-xl mt-5 md:text-5xl">SIHAB UDDIN MOLLA</h2>

                <h2 className="text-xl md:text-3xl mt-5 ">
                    <Typewriter
                        words={[
                            "Full Stack Web Developer",
                            // "Expert on Front End Development",
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={90}
                        deleteSpeed={70}
                        delaySpeed={1000}
                    />
                </h2>
            </div>

            {/* <p className="text-white font-medium mt-5">
        Welcome to my portfolio. I am a junior full stack web developer
        specializing in HTML, CSS (including CSS frameworks like Tailwind CSS
        and Bootstrap), JavaScript, React.js, Node.js, Firebase, and MongoDB.
        Passionate about crafting dynamic and user-friendly web experiences{" "}
      </p> */}

            <DownloadResume />
        </div>
    );
};

export default BannerText;
