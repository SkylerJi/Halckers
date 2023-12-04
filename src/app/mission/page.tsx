import Image from "next/image"
import Link from "next/link"
export default function mission(){
    return (
        <div className="flex flex-col items-center justify-center">
       <div className = "w-screen h-screen p-24 items-center text-center leading-10">
        <h1 className = "text-5xl md:text-9xl font-mono my-16">Who we are</h1>
        <span className = "font-mono text-3xl md:text-5xl">
          We are an <span className="font-black">elite</span> group of cyber warriors dedicated to <span className="font-black">protecting</span> the innocent and <span className="font-black">defending</span> the ether.
        </span>
      
       </div>
       <div className = "w-screen h-screen bg-slate-800 text-white items-center text-center leading-10 p-12">
        <h1 className = "text-5xl md:text-9xl font-mono my-16">
          What we did
        </h1>
        <span className = "font mono text-xl md:text-5xl ">
          Founded in 2017, we became <span className="font-bold">Cyberpatriots. </span>
          In the contest to save Missouri, we took home gold. 
          <div className = "my-12">

          </div>
          But that wasn&apos;t enough to <span className="line-through">end</span> cyber crime. 
          We took our talents internationally, <span className="font-bold">saving</span> the Internet of Things at the highest competitive level. 
        </span>

       </div>
      
       <div className = "w-screen h-screen bg-white text-black items-center text-center leading-10 py-24 px-12">
        <h1 className = "text-5xl md:text-9xl font-mono my-16">
          What we do
        </h1>
        <span className = "font mono text-xl md:text-5xl">
          After <span className="font-bold">defeating</span> cyber crime once and for all, we disbanded...is what those who prey on the weak wish we did.
         
        </span>
        <div className = "my-12">

        </div>
        <span className="font mono text-xl md:text-5xl">
            Through our <span className="font-bold">state-of-the-art</span> Integrated Mass Ecosystem Service Spanning Across Global Economies, or iMessage system, we are able to communicate effectively, efficiently, and <span className="font-bold">erratically</span>.
        </span>

      

       </div>

      
    
    </div>
    )
} 