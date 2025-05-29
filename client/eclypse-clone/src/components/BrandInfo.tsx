import { MdArrowOutward } from "react-icons/md";
import brandVideo from "../assets/brandpagevideo.mp4";
import brandingOne from "../assets/brandimg1.jpg";
import brandingTwo from "../assets/brandimg2.jpg";
import brandingThree from "../assets/brandimg3.jpg";
import appLogo from "../assets/app-logo.jpg"

const brandInfo = () => {
  return (
    <div className="flex flex-col bg-black w-min-screen lg:pl-[3vw] lg:pr-[3vw]">
      <div className="flex flex-col justify-center items-center w-min-screen mt-[8vh] p-2 ">
        <div className="flex flex-col items-start w-screen p-2">
        <p className="text-white w-[70vw] font-Neue Montreal Montreal font-[400] justify-start text-[16px]  lg:text-[48px] top-[647px] left-[13px] md:pl-[2vw] md:pr-[2vw]">
          Rooted in a philosophy of quiet luxury, our garments are designed to
          speak softly in cut, in movement, in presence.
        </p>

        <div className="flex item-center  mt-[5vh] left-[13px] gap-1">
          <p className=" font-Helvetica underline text-white Neue font-[400] text-[14px] lg:text-[24px] md:pl-[2vw]  ">
            Learn More about Eclypse
          </p>
          <p className="underline">
            <MdArrowOutward className="text-white text-[15px] mt-[5px] " />
          </p>
        </div>
        </div>

        {/* Video and image rendering for small screens  */}
        <div className="flex flex-col w-screen p-1 mt-[10vh] items-center text-start block md:hidden" >
          
          <video
            src={brandVideo}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "95%",
              height: "233px",
              objectFit: "cover",
            }}
          />

          <div className="flex justify-around items-center w-screen mt-[2vh] p-2 gap-1">
            <img src={brandingOne} alt="Branding 2" className="h-[139px] w-[110px]" />
            <img src={brandingTwo} alt="Branding 3" className="h-[139px] w-[110px]" />
            <img src={brandingThree} alt="Branding 3" className="h-[139px] w-[110px]" />

          </div>

          <div className="w-screen items-start p-2">
          <h1 className="items-start font-Neue Montreal font-[400] text-[#ffffff] mt-[8vh] mb-[8vh] ">Silhouette No. 1 – Vermilion</h1>
          </div>
        </div>

        {/* Video and image rendering for large screens */}
        <div className="flex flex-col md:w-[100vw]  mt-[10vh] items-center text-start hidden md:block">
          <div className="flex md:w-[94vw] md:gap-3 md:justify-around md:p-[2vw]">
          <video
            className="md:w-[800px] md:h-[489px] md:object-cover"
            src={brandVideo}
            autoPlay
            muted
            loop
            playsInline
            style={{
              // width: "95%",
              // height: "233px",
              // objectFit: "cover",
            }}
          />
           <img src={brandingOne} alt="Branding 1" className="md:h-[489px] md:w-[424px]" />
          </div>
          <div className="flex md:w-[94vw] md:gap-3 md:justify-around md:p-[2vw]">
          <img src={brandingOne} alt="Branding 1" className="h-[397px] w-[424px]" />
            <img src={brandingTwo} alt="Branding 2" className="h-[397px] w-[424px]" />
            <img src={appLogo} alt="Branding 3" className="h-[397px] w-[424px]" />
          </div>
          <h1 className="text-[#FFFFFF] font-Neue Montreal font-[400] w-[60vw]  md:text-[48px] md:mt-[3vh] md:ml-[2vw] md:pl-[2vw] md:pr-[2vw] ">Silhouette No. 1 – Vermilion</h1>
        </div>

      </div>
    </div>
  );
};

export default brandInfo;
