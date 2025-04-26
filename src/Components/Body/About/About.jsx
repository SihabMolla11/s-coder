import { useState } from "react";
// import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
// import Animated from "../../../animated/Animated";
// import image1 from "../../../assets/about.png";
// import DownloadResume from "../../DownloadResume/DownloadResume";
// import SocialIcons from "../../SocialIcons/SocialIcons";

const About = () => {
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
      <h2 className="text-center  text-4xl font-bold text-white uppercase" data-aos="fade-up">
        ABOUT ME
      </h2>

      <div className="">
        <img
          className="w-52 rounded-full border-4 border-purple-500 my-8 mx-auto"
          src="/image/me/sihab_uddin_molla.png"
          alt="sihab uddin molla"
        />

        <p className="text-lg text-white">
          From the moment I wrote my first line of code, I knew this was more than just a career—it
          was a passion. I'm a full-stack developer who thrives in the world of web development,
          turning ideas into reality with clean, efficient, and scalable code. My love for
          programming isn't just about writing functions or fixing bugs; it's about the challenges
          it throws at me every single day. I don't just solve problems—I embrace them, learn from
          them, and grow stronger with each challenge. <br />
          <br />I specialize in Next.js, React.js, TypeScript, JavaScript, NestJS, Express.js, PHP,
          Laravel, and MongoDB. But my expertise doesn’t stop there. I bring aesthetic precision to
          frontend development with frameworks like Tailwind CSS, Bootstrap, Daisy UI, Ant Design,
          ShadCN, and Material UI, ensuring that every UI is seamless, responsive, and visually
          stunning. On the backend, I architect robust, scalable, and high-performance applications
          with modern technologies, delivering real-world impact.
          <br />
          <br />
          Why I Love What I Do Programming is more than just a skill—it’s a way of thinking. It’s a
          game where every bug is a puzzle, and every solution is a victory. I love taking on new
          challenges, pushing myself beyond limits, and diving into the unknown. The ever-evolving
          nature of this field excites me, and I find joy in learning, experimenting, and building
          every day. <br />
          <br />
          Be it databases like MongoDB, PostgreSQL, MySQL, and Prisma, or API testing with Postman,
          I am always ready to explore deeper. My hunger for learning keeps me going, and my
          dedication ensures that I deliver the best possible solutions to every problem I
          encounter. <br />
          <br />
          Let’s Connect I believe in collaboration and love to connect with like-minded developers,
          businesses, and enthusiasts who share my passion for coding. If you’re looking for someone
          who not only writes code but lives it, feel free to reach out. <br />
          <br />I look forward to the next challenge—bring it on! 🚀
        </p>
      </div>
    </div>
  );
};

export default About;
