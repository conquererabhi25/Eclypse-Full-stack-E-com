import productVideo from "../assets/productShopVideo.mp4";
import productimage1 from "../assets/productimg1.jpg";
import productimage2 from "../assets/productimg2.jpg";
import productimage3 from "../assets/productimg3.jpg";

const ProductShop = () => {
  return (
    <>
      // For small screens
      <div className="flex flex-col w-min-sreen bg-[#ffffff] block md:hidden ">
        <div className="flex flex-col">
          <video
            src={productVideo}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "302px",
              objectFit: "cover",
            }}
          />
          <div className="flex justify-around items-center w-screen p-3">
            <img
              src={productimage1}
              alt="product1"
              className="w-[131.65px] h-[125.9px]"
            />
            <img
              src={productimage2}
              alt="product2"
              className="w-[131.65px] h-[125.9px]"
            />
            <img
              src={productimage3}
              alt="product3"
              className="w-[131.65px] h-[125.9px]"
            />
          </div>
          <div className="flex items-center p-2 gap-2 ">
            <h1 className="font-Helvetica Neue font-[500] mt-[5px] text-[29.57px] text-[#111111]">
              ₹ 7,999
            </h1>
            <p className="font-Helvetica Neue mt-[2vh]  font-[400] text-[12.32px]">
              MRP incl of all taxes
            </p>
          </div>

          <div className="flex item-center p-2 w-screen justify-between">
            <p className="font-Helvetica Neue font-[500] text-[13.56px] text-[#767676]">
              Please select a size
            </p>
            <p className="font-Helvetica Neue font-[500] text-[12px] underline">
              Size chart
            </p>
          </div>
          {/* Size buttons */}
          <div className="flex w-screen justify-between p-2 mt-[1vh]">
            <button className="bg-[#D9D9D9] w-[15vw] h-[5vh]  p-1rounded-md cursor-pointer text-[#767676]">
              XS
            </button>
            <button className="bg-[#D9D9D9] w-[15vw] h-53vh] p-1 rounded-md cursor-pointer text-[#767676]">
              S
            </button>
            <button className="bg-[#D9D9D9]  w-[15vw] h-53vh] p-1 rounded-md cursor-pointer text-[#767676]">
              M
            </button>
            <button className="bg-[#D9D9D9] w-[15vw] h-53vh] p-1 rounded-md cursor-pointer text-[#767676]">
              L
            </button>
            <button className="bg-[#D9D9D9] w-[15vw] h-53vh] p-1 rounded-md cursor-pointer text-[#767676]">
              XL
            </button>
          </div>
          {/* Shop utility buttons */}
          <div className="flex flex-col w-screen gap-[3vh] p-3 mt-[2vh] mb-[5vh]">
            <button className="w-full h-[5vh] bg-[#000000] cursor-pointer rounded-md text-[#ffffff] p-3 items-center justify-center flex">
              Buy
            </button>
            <button className="w-full h-[5vh] bg-[#F7F7F7] border border-2 border-[#D9D9D9] cursor-pointer rounded-md text-[##0D0D0D] p-3 items-center justify-center flex">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      // For large screens
      <div className="flex w-min-screen bg-[#FFFFFF] hidden md:block">
       <div className="flex">
       <video
          className="md:w-[50vw] md:h-[790px] md:object-cover"
          src={productVideo}
          autoPlay
          muted
          loop
          playsInline
          style={
            {
              // width: "100%",
              // height: "302px",
              // objectFit: "cover",
            }
          }
        />
        <div className="flex flex-col  w-[45vw] gap-2">
          <div className="flex flex-col items-center justify-center gap-2 ml-3 mt-[5vh]">
            <p className="text-[15px] ml-3 font-Helvetica Neue font-[500] text-[#000000]">
              A tailored composition in motion. Cut from structured wool with a
              sculpted shoulder and softened hem, this piece captures presence
              without force. Worn here in the stillness of a city in motion.
            </p>
           
            <div className="flex justify-around items-center w-full p-3">
              <img
                src={productimage1}
                alt="product1"
                className="w-[207.95px] h-[198.87px]"
              />
              <img
                src={productimage2}
                alt="product2"
                className="w-[207.94px] h-[198.86px]"
              />
              <img
                src={productimage3}
                alt="product3"
                className="w-[207.95px] h-[198.86px]"
              />
            </div>
            
          </div>
          <hr className="border-gray-500 border opacity-[30%] w-[95%] ml-[10px] mr-[10px] mt-[5px]" />
          <div className="flex items-center pl-4 gap-2 mt-[3vh]">
            <h1 className="font-Helvetica Neue text-[36px] font-[500] mt-[5px] text-[29.57px] text-[#111111]">
              ₹ 7,999
            </h1>
            <p className="font-Helvetica Neue mt-[2vh] text-[15px] font-[400] text-[12.32px] text-[#767676]">
              MRP incl of all taxes
            </p>
          </div>
          <div className="flex item-center p-5 justify-between w-[25vw] ">
            <p className="font-Helvetica Neue font-[500] text-[20px] text-[#767676]">
              Please select a size
            </p>
            <p className="font-Helvetica Neue font-[500] mt-1 text-[15px] underline text-[#767676]">
              Size chart
            </p>
          </div>
          {/* Size buttons */}
          <div className="flex w-[45vw] justify-between p-5 mt-[1vh]">
            <button className="bg-[#D9D9D9] w-[82px] h-[49px] p-1 rounded-md cursor-pointer text-[#767676]">
              XS
            </button>
            <button className="bg-[#D9D9D9] w-[82px] h-[49px] p-1 rounded-md cursor-pointer text-[#767676]">
              S
            </button>
            <button className="bg-[#D9D9D9]  w-[82px] h-[49px] p-1 rounded-md cursor-pointer text-[#767676]">
              M
            </button>
            <button className="bg-[#D9D9D9] w-[82px] h-[49px] p-1 rounded-md cursor-pointer text-[#767676]">
              L
            </button>
            <button className="bg-[#D9D9D9] w-[82px] h-[49px] p-1 rounded-md cursor-pointer text-[#767676]">
              XL
            </button>
          </div>
          <hr className="border-gray-500 border opacity-[30%] w-[95%] ml-[10px] mr-[10px] mt-[5px]" />
           {/* Shop utility buttons */}
           <div className="flex w-[40vw] gap-[3vh] p-3 mt-[2vh] mb-[5vh]">
           <button className="w-[10vw] bg-[#F7F7F7] border border-2 border-[#D9D9D9] cursor-pointer rounded-md text-[##0D0D0D] p-3 items-center justify-center flex">
              Add to Cart
            </button>
            <button className="w-[30vw]  bg-[#000000] cursor-pointer rounded-md text-[#ffffff] p-3 items-center justify-center flex">
              Buy
            </button>
           
          </div>
        </div>
       </div>
       
      </div>
    </>
  );
};

export default ProductShop;
