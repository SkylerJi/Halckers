import Image from "next/image"
import Link from "next/link"
export default function mission(){
    return (
        <div className="flex flex-col items-center justify-center">
       <div className = "w-screen h-screen p-24 items-center text-center leading-10">
        <h1 className = "text-5xl md:text-9xl font-mono my-16">Who we are</h1>
        <span className = "font-mono text-3xl md:text-5xl">
          We are an elite group of cyber warriors dedicated to protecting the innocent and defending the ether.
        </span>
      
       </div>
       <div className = "w-screen h-screen bg-slate-800 text-white items-center text-center leading-10 p-12">
        <h1 className = "text-5xl md:text-9xl font-mono my-16">
          What we did
        </h1>
        <span className = "font mono text-xl md:text-3xl">
          Founded in 2016, we took on the role of cyberpatriots. 
          In the contest to save Missouri, we took home gold. 
          But that wasn't enough to end cyber crime. 
          We took our talents internationally, saving the Internet of Things at the highest competitive level. 
        </span>

       </div>
      
       <div className = "w-screen h-screen bg-white text-black items-center text-center leading-10 p-12">
        <h1 className = "text-5xl md:text-9xl font-mono my-16">
          What we do
        </h1>
        <span className = "font mono text-xl md:text-3xl">
          After defeating cyber crime once and for all, we disbanded...is what those who prey on the weak wish we did.
         
        </span>
        <div className = "my-6">

        </div>
        <span className = "font mono text-xl md:text-3xl">
         Through our state of the art Integrated Mass Ecosystem Service Spanning Across Global Economies, or iMessage system, we are able to communicate effectively, efficiently, and erratically.
        </span>
      

       </div>

      
    
    </div>
    )
} 