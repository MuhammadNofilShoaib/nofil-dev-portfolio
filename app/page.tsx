import Image from "next/image";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { RiSendPlane2Line } from "react-icons/ri";

export default function Home() {
  return (
    <div className="md:space-y-60 mb-20 pt-[140px] max-w-[1440px] mx-5 md:mx-auto">

      <div id="home" className="flex flex-col lg:flex-row justify-between items-center mt-14 md:mt-[80px] relative px-6 md:px-16 mb-[200px] md:mb-0">

        <div className="flex flex-col justify-center items-start">

          <div className="flex justify-center items-center gap-2">
            <Image src="/arrow.png" alt="arrow" width={89} height={221} className="scale-75 mt-20 hidden md:flex"></Image>

            <div className="flex flex-col justify-center items-start gap-2">

              <div className="-space-y-7 md:-space-y-9">
                <h1 className="text-[42px] sm:text-[66px] md:text-[96px] font-bold uppercase md:leading-[80px]">front-end</h1>
                <h1 className="text-[44px] sm:text-[66px] md:text-[96px] font-bold uppercase text-[#00ADB5]">developer</h1>
              </div>
              <div className="flex flex-col md:flex-row items-start justify-center md:justify-start md:items-center gap-3 md:gap-5">
                <Link href="/https://www.upwork.com/freelancers/~0175b27c18d5c0cbde?mp_source=share">
                  <button className="px-8 py-[10px] bg-[#00ADB5] rounded-full uppercase font-bold shadow-[#00ADB5] shadow-2xl hover:scale-105 hover:ring-1 ring-white hover:opacity-90 duration-300 ease-in-out">hire me</button>

                </Link>
                <Link href="/Muhammad Nofil Shoaib.pdf" download="Muhammad Nofil Shoaib.pdf">
                  <button className="px-8 py-[10px] bg-[#393E46] rounded-full uppercase font-bold shadow-[#eeeeee]/50 shadow-2xl hover:scale-105 hover:ring-1 ring-white hover:opacity-90 duration-300 ease-in-out flex justify-center items-center gap-4">
                    Download CV
                    <span>
                      <MdDownload className="scale-150" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>

        <div className="flex justify-center items-center relative">
          <Image src="/main.png" alt="mainPic" width={400} height={472.65} className="absolute -bottom-24 md:-left-10"></Image>
          <Image src="/shadow.png" alt="mainPic" width={348} height={24} className="absolute -bottom-10 md:-bottom-2 -z-10 md:-left-10 opacity-50"></Image>
          <Image src="/mainline.png" alt="mainPic" width={514} height={514}></Image>
        </div>

      </div>

      <div id="about" className="flex flex-col md:flex-row justify-between items-center mt-20 relative px-6 md:px-16 mb-[120px] md:mb-0">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-start relative w-full md:w-1/2">
          {/* Floating Images */}
          <Image src="/arrow.png" alt="arrow" width={89} height={221} className="scale-75 hidden md:block absolute -bottom-64 rotate-90"></Image>
          <Image src="/music.png" alt="music" width={61} height={46} className="absolute -top-10 left-4 md:left-0"></Image>
          <Image src="/lightbulb.png" alt="lightbulb" width={57} height={88} className="absolute top-1 right-4 md:left-96 scale-150"></Image>

          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="text-4xl md:text-6xl font-bold capitalize text-[#00ADB5]">
              <span className="text-white">about</span> me
            </h1>
            <p className="text-white/75 text-sm md:text-base max-w-[90%] md:max-w-[389px] leading-relaxed">
              Hey there! I&apos;m Nofil Shoaib, a passionate Front-End Developer specializing in building modern, responsive, and high-performance websites. With expertise in Next.js, TypeScript, and Tailwind CSS, I craft dynamic user interfaces that are both visually stunning and functionally seamless.
              <br /><br />
              I love solving complex problems with clean, efficient code and creating engaging web experiences that leave a lasting impact. My journey in web development has led me to build e-commerce platforms, multi-page websites, and headless CMS integrations using Sanity.io.
              <br /><br />
              Whether it&apos;s a sleek portfolio, a feature-rich marketplace, or a custom web solution, I bring innovation and attention to detail to every project. Let&apos;s collaborate and bring your ideas to life! 🚀

            </p>
          </div>
        </div>

        {/* Right Content (Images) */}
        <div className="flex justify-center items-center relative w-full md:w-1/2 mt-10 md:mt-0">
          <Image src="/main2sub.png" alt="mainPic" width={412} height={353} className="absolute -bottom-16 md:-bottom-24"></Image>
          <Image src="/shadow.png" alt="shadow" width={348} height={24} className="absolute -bottom-20 -z-10 opacity-50"></Image>
          <Image src="/main2.png" alt="mainPic" width={300} height={225} className="w-[70%] md:w-[80%]"></Image>
        </div>
      </div>

      <hr className="h-[1px] opacity-10 mb-[50px] md:mb-0" />

      <div id="projects" className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-16 py-20 mb-[100px] md:mb-0">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('/main2.png')] bg-center opacity-30"></div>

        {/* Content Container */}
        <div className="relative flex flex-col justify-center items-center md:items-start w-full max-w-7xl gap-10">
          {/* Title */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold capitalize text-[#00ADB5]">
              <span className="text-white">my recent</span> works
            </h1>
            <h2 className="text-lg md:text-xl capitalize italic text-white/75 mt-2">
              I have worked on many projects, but here are some of the highlights:
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 w-full">
            {/* Project 1 */}
            <Link
              href="https://hackathon-q2-three.vercel.app/"
              target="_blank"
              className="flex justify-center items-center bg-[#393E46]/50 backdrop-blur-sm rounded-xl w-full max-w-[368px] h-[280px] hover:ring-1 ring-white duration-300 ease-in-out"
            >
              <Image src="/1.png" alt="Furniaura - Marketplace" width={265} height={158} className="rounded-lg" />
            </Link>

            {/* Project 2 */}
            <Link
              href="https://rizfan-portfolio.vercel.app/"
              target="_blank"
              className="flex justify-center items-center bg-[#393E46]/50 backdrop-blur-sm rounded-xl w-full max-w-[368px] h-[280px] hover:ring-1 ring-white duration-300 ease-in-out"
            >
              <Image src="/2.png" alt="Portfolio Website" width={265} height={158} className="rounded-lg" />
            </Link>

            {/* Project 3 */}
            <Link
              href="https://resume-builder-final-nofil.vercel.app/"
              target="_blank"
              className="flex justify-center items-center bg-[#393E46]/50 backdrop-blur-sm rounded-xl w-full max-w-[368px] h-[280px] hover:ring-1 ring-white duration-300 ease-in-out"
            >
              <Image src="/3.png" alt="Resume Builder" width={265} height={158} className="rounded-lg" />
            </Link>
            {/* Project 4 */}
            <Link
              href="https://nofilshoaib-store.vercel.app"
              target="_blank"
              className="flex justify-center items-center bg-[#393E46]/50 backdrop-blur-sm rounded-xl w-full max-w-[368px] h-[280px] hover:ring-1 ring-white duration-300 ease-in-out"
            >
              <Image src="/4.png" alt="Ecommerce website" width={265} height={158} className="rounded-lg" />
            </Link>
            {/* Project 5 */}
            <Link
              href="https://whitespace-assignment.vercel.app/"
              target="_blank"
              className="flex justify-center items-center bg-[#393E46]/50 backdrop-blur-sm rounded-xl w-full max-w-[368px] h-[280px] hover:ring-1 ring-white duration-300 ease-in-out"
            >
              <Image src="/5.png" alt="landing page" width={265} height={158} className="rounded-lg" />
            </Link>
            {/* Project 6 */}
            <Link
              href="https://portfolio-tailwind-snowy-six.vercel.app/"
              target="_blank"
              className="flex justify-center items-center bg-[#393E46]/50 backdrop-blur-sm rounded-xl w-full max-w-[368px] h-[280px] hover:ring-1 ring-white duration-300 ease-in-out"
            >
              <Image src="/6.png" alt="old portfolio" width={265} height={158} className="rounded-lg" />
            </Link>

          </div>
        </div>
      </div>



      <div id="contact" className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 lg:gap-0 mx-5 md:mx-[100px]">

        <div className="flex flex-col justify-center items-start gap-5 text-center md:text-left">
          <h1 className="text-[36px] md:text-[44px] lg:text-[64px] font-bold capitalize text-[#00ADB5] leading-tight">
            <span className="text-white">got a project <br /> in </span>mind
          </h1>
          <div className="flex justify-center md:justify-start items-center gap-[100px]">
            <Image src="/contact.png" alt="image" width={255} height={348} className="flex justify-center items-center"></Image>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:items-start gap-10">

          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-5">
            <div className="flex flex-col justify-center items-start gap-2">
              <h1 className="font-bold text-white text-[18px]">Your name</h1>
              <input type="text" placeholder="name" className="capitalize px-6 py-4 rounded-[16px] bg-[#393E46]/50 w-full xl:w-[280px]" />
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <h1 className="font-bold text-white text-[18px]">Your email</h1>
              <input type="email" placeholder="email" className="capitalize px-6 py-4 rounded-[16px] bg-[#393E46]/50 w-full xl:w-[280px]" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-2">
            <h1 className="font-bold text-white text-[18px]">Your message</h1>
            <textarea placeholder="Message" className="capitalize px-6 py-4 rounded-[16px] bg-[#393E46]/50 w-[26vh] md:w-[300px] lg:w-[460px] xl:w-[600px] h-[150px] md:h-[280px] text-white placeholder-gray-400 focus:outline-none resize-none" />
          </div>

          <button className="px-8 py-[10px] bg-[#00ADB5] rounded-full uppercase font-bold shadow-[#00ADB5] shadow-2xl hover:scale-105 hover:ring-1 ring-white hover:opacity-90 duration-300 ease-in-out flex justify-center items-center gap-4">Send Message <span><RiSendPlane2Line className="scale-150" /></span></button>

        </div>

      </div>

    </div>
  );
}
