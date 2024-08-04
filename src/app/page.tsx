"use client"
import Image from 'next/image'
import Head from 'next/head';
import React, { useState } from "react"
import styles from './styles.module.css';
import Blob from '../../components/Blob';
import HalckersByChoice from '../../components/MainPage/HalckersByChoice';
import AcquiantancesByChance from '../../components/MainPage/AquiantancesByChance';
import { CustomImage } from '../../components/MainPage/imageStyling';
import DumbPpl from '../../components/MainPage/DumbPpl';
import Engineers from '../../components/MainPage/Engineers';
import Doctors from '../../components/MainPage/Doctors';
import { useRouter } from 'next/navigation';


export default function Home() {
  const imageHeight = 500
  const imageWidth = 300
  const [showArse, setShowArse] = useState<boolean>(false);
  const router = useRouter()
  return (
    

    <div className = "overflow-x-hidden font-mono">
 
           <Blob />
      <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="relative w-full h-screen flex justify-center items-center border-b-4 border-black">

          <Image 
              src="/assets/images/First.jpg"
              layout='fill'
              objectFit='cover'
              alt="HomieSexual"
          />

          <div className="absolute rounded-xl text-center pt-1 pb-1 px-4 z-20" style={{ top: '50%', transform: 'translateY(-50%)', backgroundColor: 'transparent' }}>
            <p className={`text-7xl md:text-9xl font-mono font-black ${styles.animatedText}`}>
              HALCKERS
            </p>
          </div> 
          <div className="absolute rounded-xl text-center pt-2 pr-2" style={{ top: '50%', transform: 'translateY(-50%)', backgroundColor: 'transparent' }}>
            <p className={`text-7xl md:text-9xl font-mono font-black text-white`}>
              HALCKERS
            </p>
          </div>

        </div>
 
      <div

        className="py-72 w-screen flex justify-center items-center font-black text-6xl md:text-9xl text-black font-mono relative"
      >
        <div className="absolute rounded-xl text-center pt-1 pb-1 px-4 z-20" style={{ top: '50%', transform: 'translateY(-50%)', backgroundColor: 'transparent' }}>
            <p className={`text-7xl md:text-9xl font-mono font-black text-white cursor-pointer ${showArse && styles.animatedText}`} 
            onMouseEnter = {() => setShowArse(true)} onMouseLeave={() => setShowArse(false)}
            onClick = {() => router.push('/whyyouclick')}>
              We Ar{showArse && <span>s</span>}e
            </p>
          </div> 
          <div className="absolute rounded-xl text-center pb-2 pl-2" style={{ top: '50%', transform: 'translateY(-50%)', backgroundColor: 'transparent' }}>
            <p className={`text-7xl md:text-9xl font-mono font-black cursor-pointer ${showArse ? "text-white" : "text-black"}`} 
            onMouseEnter = {() => setShowArse(true)} onMouseLeave={() => setShowArse(false)}
            onClick = {() => router.push('/whyyouclick')}>
              We Ar{showArse && <span>s</span>}e
            </p>
          </div>
      </div>

      <div className = "flex flex-col justify-center items-center text-white text-5xl">
      <div className = "relative w-full pb-56">
        <div className = "flex flex-row justify-center mb-8 text-5xl md:text-8xl font-bold font-mono text-center relative">
            Doctors

          </div>
          <Doctors />
  

    

        </div>
     
        <div className = "relative w-full pb-56">
        <div className = "flex flex-row justify-center text-center mt-10 mb-8 text-5xl md:text-8xl font-bold font-mono">
            Engineers

          </div>
          <Engineers />
        </div>
      
        <div className = "relative w-full pb-56">
          <div className = "flex flex-row mt-10 mb-8 text-4xl md:text-8xl font-bold font-mono justify-center text-center items-center space-x-3">
            Financial Analysts, Lawyers, Global Ambassadors

          </div>
       
     <div className = "flex flex-row overflow-x-auto space-x-4 px-4">
     <div className="flex-none flex space-x-3">
            <CustomImage src = "/assets/images/Finance_Dean.png"
            width={imageWidth}
            height={imageHeight}  
            alt="Dean"/>
            <CustomImage  src = "/assets/images/Finance_Dean2.png"
            width={imageWidth}
            height={imageHeight}  
            alt="Dean"/>
            <CustomImage  src = "/assets/images/Finance_Dean3.png"
            width={imageWidth}
            height={imageHeight}  
            alt="Don't let his gf see this"/>
            <CustomImage  src = "/assets/images/Finance_Dean4.png"
            width={imageWidth}
            height={imageHeight}  
            alt="Dean"/>
            <CustomImage  src = "/assets/images/Finance_Dean5.png"
            width={imageWidth}
            height={imageHeight}  
            alt="Dean"/>

            <CustomImage  src = "/assets/images/Finance_Skyler.png"
            width={imageWidth}
            height={imageHeight}  
            alt="inaccurate height btw(taller irl)"/>
            <CustomImage  src = "/assets/images/Finance_Skyler5.png"
            width={imageWidth}
            height={imageHeight}  
            alt="Skyler"/>
            <CustomImage  src = "/assets/images/Finance_Skyler2.png"
            width={imageWidth}
            height={imageHeight}  
            alt="Skyler"/>
            <CustomImage  src = "/assets/images/Finance_Skyler3.png"
            width={imageWidth}
            height={imageHeight}  
            alt="Average networking sesh for a guy like me"/>
            <CustomImage src = "/assets/images/Lawyer_Yusuf.png"
            width={imageWidth}
            height={imageHeight}  
            alt="How did you manage to order burgers at an Indian place"/>
            <CustomImage src = "/assets/images/Lawyer_Yusuf2.png"
            width={imageWidth}
            height={imageHeight}  
            alt="Yusuf"/>
            <CustomImage src = "/assets/images/Lawyer_Yusuf3.png"
            width={imageWidth}
            height={imageHeight}  
            alt="Yusuf"/>
            <CustomImage src = "/assets/images/Global_Ambassador_Joe.png"
            width={imageWidth}
            height={imageHeight}  
            alt="Joe"/>
            <CustomImage src = "/assets/images/Global_Joe2.png"
            width={imageWidth}
            height={imageHeight}  
            alt="Joe"/>
                <CustomImage src = "/assets/images/Global_Joe3.png"
            width={imageWidth}
            height={imageHeight}  
            alt="These pics suck ngl"/>
            </div>
        </div>
        </div>

        <div className = "relative w-full pb-56">
        <div className = "flex flex-row  text-5xl md:text-8xl text-center font-mono font-bold mt-32 mb-12 justify-center">
            Acquaintances by chance
          </div>
          <AcquiantancesByChance />
         
         

        </div>

        <div className = "relative w-full pb-56">
        <div className="flex flex-row text-7xl md:text-9xl text-center font-black font-dancing-script mt-24 mb-12 justify-center">
          Halckers by choice
        </div>
          <HalckersByChoice />
         
          </div>
        </div>
      </div>
    </div>

  )
}
 