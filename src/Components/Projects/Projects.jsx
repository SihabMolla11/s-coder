import { useState } from "react";
import { projectData } from "../../data/projectData";
import ProjectCart from "./ProjectCart";
import Modal from "./ProjectDetail/Modal";

const Projects = () => {
  const [uniqueId, setUniqueId] = useState(null);

  return (
    <div data-aos="fade-down" className="my-container mt-20">
      <h2 className="text-4xl text-center font-bold text-white  uppercase">PROJECTS</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-8">
        {projectData?.map((data) => (
          <ProjectCart key={data?.id} data={data} />
        ))}

      </div>
      <Modal uniqueId={uniqueId} />
    </div>
  );
};

export default Projects;
