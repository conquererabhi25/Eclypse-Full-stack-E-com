import { FaRegRegistered } from "react-icons/fa";
import heroVideo from "../assets/herosectionvideo.mp4";


const heroSection = () => {
  return (
    <div className="flex flex-col w-min-screen bg-black p-3 lg:pl-[2vw] lg:pr-[2vw] md:w-min-screen">
      <div className="flex justify-between items-end mt-[5vh]">
        <div className="flex items-start">
          <h1 className="text-white text-[29.08px] lg:text-[107.09px] font-[400] font-Neue Montreal top-[173px] left-[13px]">
            Eclypse
          </h1>
          <p>
            <FaRegRegistered className="text-white text-[10px] lg:text-[15px] mt-[10px] lg:mt-[40px]" />
          </p>
        </div>
        <div>
          <p className="text-white text-[10px] lg:text-[14.57px]">© 2025</p>
        </div>
      </div>
      {/* Video Rendering */}
     <div className="relative overflow-hidden ">
     <video
        className="w-[100%] h-auto lg:h-[530px] object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        style={{
          // width: "100%",
          // height: "auto",
          // objectFit: "cover",
        }}
      />
      <div className="absolute inset-0 top-[25vh] left-[45vw] lg:top-[100vh] lg:left-[60vw]">
        <h1 className="text-white font-Helvetica Neue font-[400] text-[14px] lg:text-[34.62px]">A silhouette worth remembering</h1>
      </div>
     </div>

     {/* Video Image rendering for medium and large screens */}
    </div>
  );
};

export default heroSection;
