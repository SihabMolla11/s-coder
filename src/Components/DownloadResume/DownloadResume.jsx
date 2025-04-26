import { BiArrowToBottom } from "react-icons/bi";

const DownloadResume = () => {
  return (
    <>
      <button className="border-2 mt-5 rounded-lg hover:bg-gradient-to-r to-[#D66CFF] from-[#860C78] p-3 text-md border-[#860C78] text-[#860C78] font-bold hover:text-white  bg-[#efcafd]">
        <a
          className="flex gap-2"
          href="Resume Of Full Stack Developer Sihab Uddin Molla.docx.pdf"
          download
        >
          Download resume <BiArrowToBottom className="text-2xl" />
        </a>
      </button>
    </>
  );
};

export default DownloadResume;
