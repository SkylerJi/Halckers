"use client"
import Image from "next/image";
import ParticlesComponent from "../../../components/Particles";

export default function team() {
  return (
    <div className="pt-48 pb-16 bg-black">
      <ParticlesComponent/>
      
      <div className="text-white text-5xl md:text-9xl text-center font-mono my-24">
        Team
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-24 h-full w-full p-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative h-96 border-2 border-white bg-white overflow-hidden hover-gradient-border"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-300 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
              <div className="px-4 py-2 font-mono">{member.description}</div>
            </div>
            <Image
              alt={`Team member ${member.name}`}
              src={member.imageSrc}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
              <p className="text-3xl md:text-3xl xl:text-5xl font-mono font-semibold">
                {member.name}
              </p>
              <p className="text-xl font-mono">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes borderGradient {
          0% {
            border-image-source: linear-gradient(to bottom right, #ff7e5f, #feb47b);
          }
          100% {
            border-image-source: linear-gradient(to bottom right, #6a11cb, #2575fc);
          }
        }

        .hover-gradient-border {
          border-image-slice: 1;
          border-width: 2px;
          border-style: solid;
          transition: border-image-source 0.5s;
        }

        .hover-gradient-border:hover {
          animation: borderGradient 1s forwards;
        }
      `}</style>
    </div>
  );
}

const teamMembers = [
  {
    name: "Adi",
    title: "COO",
    imageSrc: "/assets/images/Headshot_Adi1.png",
    description:
      "As the Chief One-Piece Officer, A D. Patro knocks out all with his conqueror's haki, although some experts(haters imo) contend that it's his stench.",
  },
  {
    name: "Ali",
    title: "CFO",
    imageSrc: "/assets/images/Headshot_Ali1.png",
    description:
      "As the Chief Footbol Officer, similar to many 7 year olds across the world, Ali's loyalty and heart lie with Ronaldo.",
  },
  {
    name: "Dean",
    title: "CRO",
    imageSrc: "/assets/images/Headshot_Dean1.png",
    description:
      "As the Chief Rizz Officer, this was written ironically about Dean.",
  },
  {
    name: "Dhruv",
    title: "CCO",
    imageSrc: "/assets/images/Headshot_Dhruv1.png",
    description:
      "As the Chief Creepy Officer, Dhruv is a shady, shadowy man; his stare makes me uncomfortable.",
  },
  {
    name: "Joe",
    title: "CIO",
    imageSrc: "/assets/images/Headshot_Joe1.png",
    description:
      "As the Chief International Officer, Joe doesn't speak English. Don't talk to him he gets nervous.",
  },
  {
    name: "Kesava",
    title: "CLO",
    imageSrc: "/assets/images/Headshot_Kesava1.png",
    description:
      "As the Chief Looksmaxxing Officer, Kesava boasts a slight-positive canthal tilt and straight full anteface. His high-set zygomatic bones contrast his hunter eyes (darktriadmaxxed).",
  },
  {
    name: "Praveen",
    title: "CAO",
    imageSrc: "/assets/images/Headshot_Praveen1.png",
    description:
      "As the Chief Alpha Officer, Praveen runs the pack. Praveen always eats first.",
  },
  {
    name: "Sid",
    title: "CNO",
    imageSrc: "/assets/images/Headshot_Sid1.png",
    description:
      "As the Chief Non-Incel Officer, Sid is too good looking and charismatic to be an incel. He will never be a true incel, no matter how hard he tries.",
  },
  {
    name: "Shane",
    title: "CBO",
    imageSrc: "/assets/images/Headshot_Shane1.png",
    description:
      "As the Chief Bot Officer, the Shane Brain runs on the world's most advanced Neural Net. His computer vision is what Tesla strives to acheive. CAVEAT: his runtime is Rayo(N).",
  },
  {
    name: "Skyler",
    title: "CPO",
    imageSrc: "/assets/images/Headshot_Skyler1.png",
    description:
      "As the Chief Perfect Officer, Skyler is perfection. His mere existance inspires all to strive towards greater heights. And yes ladies, he is single(shockingly).",
  },
  {
    name: "Sri",
    title: "CEO",
    imageSrc: "/assets/images/Headshot_Sri1.png",
    description:
      "As the Chief Executive Officer, Sri is the founder of the Halckers. Unfortunately, we don't respect him because no woman has ever been within 100 meters of him.",
  },
  {
    name: "Yusuf",
    title: "CSO",
    imageSrc: "/assets/images/Headshot_Yusuf1.png",
    description:
      "As the Chief South-Indian Officer, the Indian Halckers recognize him as South Indian(NOT NORTH) despite his Egyptian heritage.",
  },
];
