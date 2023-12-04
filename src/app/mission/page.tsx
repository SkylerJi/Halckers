// Import necessary components
import Image from "next/image";
import Link from "next/link";
import BackgroundVideo from '../../../components/bgVid1';

export default function Mission() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <BackgroundVideo />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content Block 1 */}
      <div className="z-10 w-screen h-screen p-24 text-center leading-10 text-white">
          <div className="top-1/2 left-0 w-full border-t-2 border-white"></div>
     
        <h1 className="text-5xl md:text-9xl font-mono my-16">Who we are</h1>
        <span className="font-mono text-3xl md:text-5xl">
          We are an <span className="font-black">elite</span> group of cyber warriors dedicated to <span className="font-black">protecting</span> the innocent and <span className="font-black">defending</span> the ether.
        </span>
      </div>
      

      {/* Content Block 2 */}
      <div className="z-10 w-screen h-screen p-12 text-center leading-10 bg-transparent text-white">
      <div className="top-1/2 left-0 w-full border-t-2 border-white"></div>
        
        <h1 className="text-5xl md:text-9xl font-mono my-16">
          What we did
        </h1>
        <span className="font-mono text-xl md:text-5xl">
          Founded in 2017, we became <span className="font-bold">Cyberpatriots. </span>
          In the contest to save Missouri, we took home gold. 
          <div className="my-12"></div>
          But that wasn't enough to <span className="line-through">end</span> cyber crime. 
          We took our talents internationally, <span className="font-bold">saving</span> the Internet of Things at the highest competitive level. 
        </span>
      </div>

      {/* Content Block 3 */}
      <div className="z-10 w-screen h-screen py-24 px-12 text-center leading-10 bg-white text-white bg-transparent">
      <div className="top-1/2 left-0 w-full border-t-2  border-white"></div>
        <h1 className="text-5xl md:text-9xl font-mono my-16">
          What we do
        </h1>
        <span className="font-mono text-xl md:text-5xl">
          After <span className="font-bold">defeating</span> cyber crime once and for all, we disbanded...is what those who prey on the weak wish we did.
        </span>
        <div className="my-12"></div>
        <span className="font-mono text-xl md:text-5xl">
          Through our <span className="font-bold">state-of-the-art</span> Integrated Mass Ecosystem Service Spanning Across Global Economies, or iMessage system, we are able to communicate effectively, efficiently, and <span className="font-bold">erratically</span>. Gotham, nay, the world <span className="font-bold">needs</span> us.
        </span>
      </div>
    </div>
  );
}
