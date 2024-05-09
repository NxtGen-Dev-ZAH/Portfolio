import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div
      className="flex items-center w-full h-full bg-cover bg-center"
      style={{ backgroundImage: "url(/main.jpg)" }}
    >
      <div className="h-screen pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[800px]">
        <h1 className="text-[50px] text-white font-semibold pt-40">
          HI, I AM&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 to-red-500">
            ZAHEER AHMED
          </span>
        </h1>
        <p className="text-gray-200 text-[20px] font-medium hidden md:block">
          Explore my portfolio to see examples of my work and understand the
          depths of my capabilities.
          <br /> Contact me to discuss your project and see how my skills can
          bring your vision to life.
        </p>
        <div className="absolute top-28 bottom-32 left-3/4 right-0 border-y-2 w-56 rounded-full overflow-hidden">
  <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url('/mypicx.jpg')` }}>
    </div>
    </div>
    
        <div className="flex-col md:flex-row hidden md:flex gap-5 justify-between">
          <Link
            href="#skills" // Update the href to scroll to the skills section
            className="rounded-[20px] group relative bg-purple-300 hover:bg-purple-200 border-2 border-red-500 px-5 py-3 text-lg text-purple-800  font-bold max-w-[200px]"
          >
            Learn more
          </Link>

          <Link
            href="#projects" // Update the href to scroll to the projects section
            className="rounded-[20px] group relative bg-purple-300 hover:bg-purple-200 border-2 border-red-500 px-5 py-3 text-lg text-purple-800  font-bold  max-w-[200px]"
          >
            My projects
          </Link>

          <Link
            href="#contact" // Update the href to scroll to the contact section
            className="rounded-[20px] group relative bg-purple-300 hover:bg-purple-200 border-2 border-red-500 px-5 py-3 text-lg text-purple-800 font-bold  max-w-[200px]"
          >
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
}
