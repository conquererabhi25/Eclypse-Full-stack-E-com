import { FaArrowDown } from "react-icons/fa6";

const ProductInfo = () => {
  return (
    <div className="flex flex-col bg-[#000000] w-min-screen md:m-[3vw]">
        <div className="flex justify-between w-[95vw] p-5 mt-[5vh]">
            <p className="text-[#FFFFFF] font-Neue Montreal font-[400] text-[20px] ">Size & Fit</p>
            <FaArrowDown className="text-[#FFFFFF] text-[20px] mt-[5px]" />
        </div>  

        <hr className="border-gray-500 border w-[100%] ml-[10px] mr-[10px] mt-[5px] opacity-[30%]" />

        <div className="flex justify-between  w-[95vw] p-5 mt-[5vh]">
            <p className="text-[#FFFFFF] font-Neue Montreal font-[400] text-[20px] ">Delivery & Returns</p>
            <FaArrowDown className="text-[#FFFFFF] text-[20px] mt-[5px]" />
        </div> 

        <hr className="border-gray-500 border w-[100%] ml-[10px] mr-[10px] mt-[5px] opacity-[30%]" />

        <div className="flex justify-between  w-[95vw] p-5 mt-[5vh]">
            <p className="text-[#FFFFFF] font-Neue Montreal font-[400] text-[20px] ">How This Was Made</p>
            <FaArrowDown className="text-[#FFFFFF] text-[20px] mt-[5px]" />
        </div>  

        <hr className="border-gray-500 border w-[100%] ml-[10px] mr-[10px] mt-[5px] mb-[5vh] opacity-[30%]" />

    </div>
  )
}

export default ProductInfo
