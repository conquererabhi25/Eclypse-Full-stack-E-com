import { FaQuoteLeft } from "react-icons/fa";
import { BsFillCaretLeftFill } from "react-icons/bs";
import womenProfile from "../assets/profileimg1.jpg";
import manProfile from "../assets/profileimg2.jpg";
import ladyProfile from "../assets/profileimg3.jpg";

const Reviews = () => {
  return (
    <div className="flex flex-col bg-[#000000] w-min-screen md:m-[3vw]">
      <div className="w-screen text-start p-2">
        <h1 className="text-[#FFFFFF] font-Roboto font-[500] text-[10px]">
          OUR CUSTOMERS
        </h1>
      </div>
      {/* Review */}
      <div className="flex mt-[5vh]">
        <div className="flex w-[70vw] md:w-[90vw] gap-2 p-2">
          <p className="font-Coolvetica font-[400] text-[#FFFFFF] text-[20.8px] md:text-[48px]">
            <FaQuoteLeft />
          </p>
          <div>
            <p className="font-[Neue Montreal] font-[400] text-[20px] md:text-[48px] text-[#FFFFFF]">
              Understated, but unforgettable. It feels like it was made for me
            </p>
            <div className="flex flex-col gap-2 mt-[3vh]">
              <h1 className="text-[#C4C4C4] font-Neue Montreal font-[400] text-[11.07px] md:text-[24px]">
                Random Women
              </h1>
              <p className="text-[#535353] font-Neue Montreal font-[500] text-[7.38px] md:text-[16px]">
                NY, USA
              </p>
            </div>
          </div>
        </div>
        {/* Profile pictures */}
        <div className="flex flex-col w-[30vw] md:items-center pl-2 pr-2 pb-2">
          <div className="flex  items-center md:justify-center w-full">
            <BsFillCaretLeftFill className="text-[#FFFFFF]  text-[20px] md:text-[40px] mt-[5px]" />
            <img
              src={womenProfile}
              alt="women"
              className="w-[70px] md:w-[126px] h-[70px] md:h-[126px] rounded-full"
            />
          </div>
         <div className="flex flex-col items-center  w-full gap-3 mt-[2vh] md:ml-[10px]">
            <img
              src={manProfile}
              alt="man"
              className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] rounded-full opacity-50"
            />
            <img
              src={ladyProfile}
              alt="lady"
              className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] rounded-full opacity-50"
            />
         </div>
        </div>
      </div>
      <hr className="border-gray-500 border w-[95%] ml-[10px] mr-[10px] mt-[5vh] opacity-[30%]" />
    </div>
  );
};

export default Reviews;
