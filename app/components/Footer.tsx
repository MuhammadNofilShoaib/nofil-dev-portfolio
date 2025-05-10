import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { TbBrandFiverr } from "react-icons/tb";
import { FaUpwork } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";


const Footer = () => {
  return (
    <div className='max-w-[1440px] mx-auto '>
      <div className="flex flex-col justify-center items-center gap-10 h-[400px] border-t border-[#EEEEEE]/10">

          <div className="flex justify-center items-center gap-7 md:gap-20">
            <Link href="#home" className='capitalize font-normal text-[18px] hover:text-[#00adb5] hover:bg-black/10 p-2 rounded-lg duration-300 ease-in-out'>home</Link>
            <Link href="#about" className='capitalize font-normal text-[18px] hover:text-[#00adb5] hover:bg-black/10 p-2 rounded-lg duration-300 ease-in-out'>about me</Link>
            <Link href="#projects" className='capitalize font-normal text-[18px] hover:text-[#00adb5] hover:bg-black/10 p-2 rounded-lg duration-300 ease-in-out'>Projects</Link>

          </div>

          <div className="flex justify-center items-center gap-4 sm:gap-5 md:gap-7">

            <div className="flex justify-center items-center rounded-full w-12 h-12 bg-[#393E46] hover:bg-[#00adb5]  hover:ring-1 ring-white duration-300 ease-in-out">
              <Link target='_blank' href="https://www.linkedin.com/in/nofil-shoaib-6b284328a"><FaLinkedinIn className='scale-150' /></Link>
            </div>
            <div className="flex justify-center items-center rounded-full w-12 h-12 bg-[#393E46] hover:bg-[#00adb5]  hover:ring-1 ring-white duration-300 ease-in-out">
              <Link target='_blank' href="https://github.com/MuhammadNofilShoaib"><FiGithub className='scale-150' /></Link>
            </div>
            <div className="flex justify-center items-center rounded-full w-12 h-12 bg-[#393E46] hover:bg-[#00adb5]  hover:ring-1 ring-white duration-300 ease-in-out">
              <Link target='_blank' href="https://www.fiverr.com/s/P2LapoL"><TbBrandFiverr className='scale-150' /></Link>
            </div>
            <div className="flex justify-center items-center rounded-full w-12 h-12 bg-[#393E46] hover:bg-[#00adb5]  hover:ring-1 ring-white duration-300 ease-in-out">
              <Link target='_blank' href="https://www.upwork.com/freelancers/~0175b27c18d5c0cbde?mp_source=share"><FaUpwork className='scale-150' /></Link>
            </div> 


          </div>

          <div className="flex justify-center items-center">
            <Link href="mailto:shoaib123sami@gmail.com" className='tracking-widest underline underline-offset-4 italic text-[#00adb5] flex justify-center items-end gap-4 hover:text-white duration-300 ease-in-out'><span><CiMail className='scale-150'/></span> shoaib123sami@gmail.com</Link>
          </div>

      </div>
    </div>
  )
}

export default Footer
