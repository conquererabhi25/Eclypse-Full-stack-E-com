import { GoArrowUpRight } from "react-icons/go";
import { FaArrowUpLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex gap-2 justify-around w-min-screen p-4 mt-[5vh] md:m-[3vw] ">
      <div className="flex flex-col w-[40vw] md:w-[20vw]">
        <div className="flex items-center w-full">
          <h1 className="font-Neue Montreal font-[500] text-[23.83px] md:text-[32px] text-[#D4D5D9]">
            Eclypse
          </h1>
          <GoArrowUpRight className="text-[#D4D5D9] text-[10px] md:text-[15px] mb-[15px] ml-2" />
        </div>
        <div className="flex flex-wrap items-center w-full md:w-[10vw] gap-2 md:gap-4 mt-[3vh]">
          <p className="font-Neue Montreal font-[500] text-[10.43px] md:text-[14.9px] text-[#D4D5D9] ">
            Home
            <span className="font-Degular Demo font-[400] opacity-[40%]  md:text-[14.9px] md:ml-[10px] md:mr-[10px]">
              /
            </span>
            About
            <span className="font-Degular Demo font-[400] opacity-[40%]  md:text-[14.9px] md:ml-[10px] md:mr-[10px]">
              /
            </span>
            Buy
            <span className="font-Degular Demo font-[400] opacity-[40%]  md:text-[14.9px] md:ml-[10px] md:mr-[10px]">
              /
            </span>
            <span >Our Customers</span>
            <span className="font-Degular Demo font-[400] opacity-[40%]  md:text-[14.9px] md:ml-[10px] md:mr-[10px]">
              /
            </span>
            Contacts
          </p>
        </div>
      </div>
      {/* contact us */}
      <div className="flex flex-col w-[40vw] md:w-[20vw] mb-[5vh]">
        <div className="flex flex-col items-start w-full gap-2 mt-[3vh]">
          <p className="opcaity-[60%] font-Inter font-[500] text-[7.45px] md:text-[10.43px] uppercase text-[#D4D5D9]">
            Contact
          </p>
          <h1 className="font-Neue Montreal font-[500] text-[14.9px] md:text-[24px] text-[#D4D5D9]">
            +91 123-456-7890
          </h1>
        </div>
        <div className="flex flex-col  items-start w-full gap-2 mt-[3vh] ">
          <p className="opcaity-[60%] font-Inter font-[500] text-[7.45px] md:text-[10.43px] uppercase text-[#D4D5D9]">
            Email
          </p>
          <h1 className="font-Neue Montreal font-[500] text-[14.9px] md:text-[24px] text-[#D4D5D9]">
          eclypse@gmail.com
          </h1>
        </div>
        
      </div>
      <div className="flex flex-col items-center md:items-end justify-between w-[20vw] md:w-[40vw] h-[17vh]">
            <button type="button" className="bg-[#FFFFFF] h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded-full flex item-center justify-center p-1"><FaArrowUpLong className="text-[#000000] text-[20px] md:text-[30px] md:mt-[3px] md:cursor-pointer" /></button>
            <p className="opacity-[60%] font-Neue Machina font-[400] text-[7.45px] md:text-[10.43px] text-[#D4D5D9] mt-1 ">© Eclypse 2025</p>
        </div>
    </div>
  );
};

export default Footer;
