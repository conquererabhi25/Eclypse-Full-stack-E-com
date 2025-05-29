import appLogo from "../assets/app-logo.jpg"
import { Link } from "react-router-dom";

const navigation = () => {
  return (
   <div className="flex justify-between items-center w-min-screen lg:pl-[2vw] lg:pr-[2vw] h-[112px] bg-black p-2 text-white font-Helvetica Neue pt-[2vh] lg:pt-[1vh]">
    <Link to="/" className='w-[30vw]'>
        <img src={appLogo} alt="Eclypse Logo" className='w-[10vw] lg:size-[60px]' />              
    </Link>
    <div className="flex justify-around w-[70vw] items-center gap-1 lg:w-[30vw] ">
        <h1 className='text-[12px] font-[400] h-[14] top-[64px] lg:text-[22px]'>About Us</h1>
        <h1 className='text-[12px] font-[400] h-[14] top-[64px] lg:text-[22px]'>Waitlist</h1>
        <Link to="/cart" className='text-[12px] font-[400] h-[14] top-[64px] lg:text-[22px]'>Cart</Link>
        <button type='button' className='lg:text-[22px] lg:w-[80px] lg:h-[40px] lg:cursor-pointer bg-white font-[400] top-[46px] left-[359px]  text-[12px] w-[64.9px] h-[30.84px] rounded-[5.05px]  pr-[22.45px]  pl-[22.45px] gap-[14.03px] text-center text-black items-center'><Link to="/cart">Buy</Link></button>
    </div>
   </div>
  )
}

export default navigation
