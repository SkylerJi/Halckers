// Import necessary components
import Image from "next/image";
import Link from "next/link";
import BackgroundVideo from '../../../components/bgVid1';
import HackedText from "../../../components/HackedText";

export default function Mission() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full z-0" style = {{height: ""}}>
      <video autoPlay muted loop playsInline id="backgroundVideo" className="w-full h-full object-cover">
      
      <source src="/assets/images/nerd_radar.mp4" type="video/mp4" />


    </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content Block 1 */}
      <div>
        
      </div>
      <div className="z-10 w-screen h-screen p-24 text-center md:leading-10 text-white">
          <div className="top-1/2 left-0 w-full border-t-2 border-white"></div>
     
        <h1 className="text-5xl lg:text-9xl font-mono my-16">Who we are</h1>
        <span className="font-mono text-3xl xl:text-5xl">
          We are an <span className="font-black">elite</span> group of cyber warriors dedicated to <span className="font-black">protecting</span> the innocent and <span className="font-black">defending</span> the ether.
        </span>
      </div>
      

      {/* Content Block 2 */}
      <div className="z-10 w-screen h-screen p-12 text-center md:leading-10 bg-transparent text-white">
      <div className="top-1/2 left-0 w-full border-t-2 border-white"></div>
        
        <h1 className="text-5xl lg:text-9xl font-mono my-16">
          What we did
        </h1>
        <span className="font-mono text-xl md:text-2xl xl:text-5xl">
          Founded in 2017, we became <span className="font-bold">Cyberpatriots. </span>
          In the contest to save Missouri, we took home gold. 
          <div className="my-6"></div>
          But that wasn&apos;t enough to <span className="line-through">end</span> cyber crime. 
          We took our talents internationally, <span className="font-bold">saving</span> the Internet of Things at the highest competitive level. 
        </span>
      </div>

      {/* Content Block 3 */}
      <div className="z-10 w-screen h-screen mb-12 py-24 px-12 text-center md:leading-10 text-white bg-transparent">
      <div className="top-1/2 left-0 w-full border-t-2  border-white"></div>
        <h1 className="text-5xl lg:text-9xl font-mono my-16">
          What we do
        </h1>
        <span className="font-mono text-xl md:text-2xl xl:text-5xl">
          After <span className="font-bold">defeating</span> cyber crime once and for all, we disbanded...is what the evildoers of the world wish.
        </span>
        <div className="my-6"></div>
        <span className="font-mono text-xl md:text-2xl xl:text-5xl">
          Through our <span className="font-bold">state-of-the-art</span> Integrated Mass Ecosystem Service Spanning Across Global Economies, or iMessage system, we are able to cover the globe. Gotham, nay, the world <span className="font-bold">needs</span> us.
        </span>
      </div>
      <footer className="w-full bg-transparent text-white z-10 p-8" >
        <div className="flex flex-col md:flex-row w-full justify-between h-full">
                <div className="logo mb-4 md:mb-0">
                    {/* Replace with your actual logo */}
                   <HackedText />
                </div>
                
                <div className="contact-info text-start md:text-left mb-4 md:mb-0">
                    <h3 className="font-bold mb-2">Contact Us</h3>
                    <p>Email: skylerji@gmail.com</p>
                    <p>Phone: (636) 368-7576</p>
                    <p>Address: Nunya</p>
                </div>
                <div className="contact-info flex flex-col text-start md:text-left mb-4 md:mb-0 hover:text-neutral-500">
                    <h3 className="font-bold mb-2">Services</h3>
                    <Link href= "https://www.shaneliu.net/">
                        Engineering
                    </Link>
                    <Link href= "https://buy.stripe.com/7sI7wd29Y6PT5Es4gj" >
                        Finance
                    </Link>
                    
                </div>
                
                <div className="copyright text-sm text-gray-500 items-end">
                    © {new Date().getFullYear()} Halckers LLC. All rights reserved.
                </div>
            </div>
        </footer>

    </div>
  );
}
