"use client"
import Image from 'next/image'
import Head from 'next/head';
import React from "react"
import styles from './styles.module.css';


export default function Home() {
  return (
    

    <div className = "bg-black overflow-x-hidden">
       
      <div>
      <div>
      
      <div className="relative w-full h-screen flex justify-center items-center">
      {/* Image */}
      <Image 
          src="/assets/images/First.jpg"
          layout='fill'
          objectFit='cover'
          alt="HomieSexual"
      />

      <div className="absolute rounded-xl text-center pt-1 pb-1 px-4" style={{ top: '50%', transform: 'translateY(-50%)', backgroundColor: 'white' }}>
        <p className={`text-7xl md:text-9xl font-mono font-black ${styles.animatedText}`}>
          HALCKERS
        </p>
      </div>

    </div>


   
      </div>
      <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(violet, indigo, blue, green, yellow, orange, red, black 50%)",
        backgroundSize: "100%",
        zIndex: -1,
        animation: "pulse 3s infinite"
      }}
      
      className="mx-0 mt-0 w-screen flex flex-row opacity justify-center items-center font-black text-9xl text-white m-10 font-mono"
    >
      WE ARE
    </div>

      <div className = "flex flex-col justify-center items-center text-white text-5xl">
        <div>
        <div className = "flex flex-row justify-center mb-8 text-5xl md:text-8xl font-bold font-mono">
            Doctors

          </div>
          <div className = "flex flex-row max-w-full overflow-x-auto no-scrollbar space-x-3">
          
  
          <Image src = "/assets/images/Doctor_Praveen.png"
                    width={200}
                    height={100}
          
                    alt="Praveen"/>
          <Image src = "/assets/images/Doctor_Justin.png"
                    width={200}
                    height={100}
          
                    alt="Justin"/>
          <Image src = "/assets/images/Doctor_Sid.png"
                    width={200}
                    height={100}
                    objectFit = "cover"
          
                    alt="Sid"/>
                    <Image src = "/assets/images/Doctor_Sid2.png"
                    width={200}
                    height={100}
                    objectFit = "cover"
          
                    alt="Sid"/>
                    <Image src = "/assets/images/Doctor_Sid3.png"
                    width={200}
                    height={100}
                    objectFit = "cover"
          
                    alt="Sid"/>
                    <Image src = "/assets/images/Doctor_Sid4.png"
                    width={200}
                    height={100}
                    objectFit = "cover"
          
                    alt="Sid"/>
                    <Image src = "/assets/images/Doctor_Sid5.png"
                    width={200}
                    height={100}
          
                    alt="Sid"/>
                    <Image src = "/assets/images/Doctor_Sid6.png"
                    width={200}
                    height={100}
          
                    alt="Sid"/>
                    <Image src = "/assets/images/Doctor_Adi2.png"
                    width={200}
                    height={100}
          
                    alt="Sid"/>
                    <Image src = "/assets/images/Doctor_Sid7.png"
                    width={200}
                    height={100}
          
                    alt="Sid"/>
                    <Image src = "/assets/images/Doctor_Adi3.png"
                    width={200}
                    height={100}
          
                    alt="Sid"/>
                    <Image src = "/assets/images/Doctor_Adi4.png"
                    width={200}
                    height={100}
          
                    alt="Sid"/>
                    <Image src = "/assets/images/Doctor_Justin2.png"
                    width={200}
                    height={100}
          
                    alt="Sid"/>
                    <Image src = "/assets/images/Doctor_Praveen2.png"
                    width={200}
                    height={100}
          
                    alt="Sid"/>
                    <Image src = "/assets/images/Doctor_Praveen3.png"
                    width={200}
                    height={100}
          
                    alt="Sid"/>
                    <Image src = "/assets/images/Doctor_Praveen4.png"
                    width={200}
                    height={100}
          
                    alt="Sid"/>
              

          </div>

    

        </div>
     
        <div>
        <div className = "flex flex-row justify-center mt-10 mb-8 text-5xl md:text-8xl font-bold font-mono">
            Engineers

          </div>
        <div className = "flex flex-row max-w-full overflow-x-auto space-x-3">
        <Image src = "/assets/images/Engineer_Shane.png"
                    width={200}
                    height={100}
          
                    alt="Shane"/>
                       <Image src = "/assets/images/Engineer_Shane2.png"
                    width={200}
                    height={100}
          
                    alt="Shane"/>
                       <Image src = "/assets/images/Engineer_Shane3.png"
                    width={200}
                    height={100}
          
                    alt="Shane"/>
                       <Image src = "/assets/images/Engineer_Shane4.png"
                    width={200}
                    height={100}
          
                    alt="Shane"/>
                       <Image src = "/assets/images/Engineer_Shane5.png"
                    width={200}
                    height={100}
          
                    alt="Shane"/>

          <Image src = "/assets/images/Engineer_Dhruv.png"
                    width={200}
                    height={100}
          
                    alt="Skyler"/>
                            <Image src = "/assets/images/Engineer_Dhruv2.png"
                    width={200}
                    height={100}
          
                    alt="Skyler"/>
          <Image src = "/assets/images/Engineer_Sri.png"
                    width={200}
                    height={100}
          
                    alt="Sri"/>
                     <Image src = "/assets/images/Engineer_Sri2.png"
                    width={200}
                    height={100}
          
                    alt="Sri"/>
                     <Image src = "/assets/images/Engineer_Sri3.png"
                    width={200}
                    height={100}
          
                    alt="Sri"/>
          <Image src = "/assets/images/Engineer_Ali.png"
                    width={200}
                    height={100}
          
                    alt="Ali"/>
                              <Image src = "/assets/images/Engineer_Ali2.png"
                    width={200}
                    height={100}
          
                    alt="Ali"/>
                              <Image src = "/assets/images/Engineer_Ali3.png"
                    width={200}
                    height={100}
          
                    alt="Ali"/>
                              <Image src = "/assets/images/Engineer_Ali4.png"
                    width={200}
                    height={100}
          
                    alt="Ali"/>
                              <Image src = "/assets/images/Engineer_Ali5.png"
                    width={200}
                    height={100}
          
                    alt="Ali"/>

          <Image src = "/assets/images/Engineer_Kesava.png"
                    width={200}
                    height={100}
          
                    alt="Kesava"/>
                      <Image src = "/assets/images/Engineer_Kesava2.png"
                    width={200}
                    height={100}
          
                    alt="Kesava"/>

<Image src = "/assets/images/Engineer_Kesava3.png"
                    width={200}
                    height={100}
          
                    alt="Kesava"/>

<Image src = "/assets/images/Engineer_Kesava4.png"
                    width={200}
                    height={100}
          
                    alt="Kesava"/>

<Image src = "/assets/images/Engineer_Kesava5.png"
                    width={200}
                    height={100}
          
                    alt="Kesava"/>

<Image src = "/assets/images/Engineer_Kesava6.png"
                    width={200}
                    height={100}
          
                    alt="Kesava"/>

<Image src = "/assets/images/Engineer_Kesava7.png"
                    width={200}
                    height={100}
          
                    alt="Kesava"/>



        </div>
        </div>
      
        <div>
          <div className = "flex flex-row mt-10 mb-8 text-4xl md:text-8xl font-bold font-mono justify-center items-center space-x-3">
            Financial Analysts, Lawyers, Global Ambassadors

          </div>
       
        <div className = "flex flex-row max-w-full overflow-x-auto space-x-3">
        <Image src = "/assets/images/Finance_Dean.png"
                    width={200}
                    height={100}
          
                    alt="Dean"/>
                     <Image src = "/assets/images/Finance_Dean2.png"
                    width={200}
                    height={100}
          
                    alt="Dean"/>
                     <Image src = "/assets/images/Finance_Dean3.png"
                    width={200}
                    height={100}
          
                    alt="Dean"/>
                     <Image src = "/assets/images/Finance_Dean4.png"
                    width={200}
                    height={100}
          
                    alt="Dean"/>
                     <Image src = "/assets/images/Finance_Dean5.png"
                    width={200}
                    height={100}
          
                    alt="Dean"/>

          <Image src = "/assets/images/Engineer_Skyler.png"
                    width={200}
                    height={100}
          
                    alt="Skyler"/>
                    <Image src = "/assets/images/Finance_Skyler.png"
                    width={200}
                    height={100}
          
                    alt="Skyler"/>
                      <Image src = "/assets/images/Finance_Skyler5.png"
                    width={200}
                    height={100}
          
                    alt="Skyler"/>
                      <Image src = "/assets/images/Finance_Skyler2.png"
                    width={200}
                    height={100}
          
                    alt="Skyler"/>
                      <Image src = "/assets/images/Finance_Skyler3.png"
                    width={200}
                    height={100}
          
                    alt="Skyler"/>
                      <Image src = "/assets/images/Finance_Skyler4.png"
                    width={200}
                    height={100}
          
                    alt="Skyler"/>

          <Image src = "/assets/images/Lawyer_Yusuf.png"
                    width={200}
                    height={100}
          
                    alt="Picture of the author"/>
                            <Image src = "/assets/images/Lawyer_Yusuf2.png"
                    width={200}
                    height={100}
          
                    alt="Picture of the author"/>
                            <Image src = "/assets/images/Lawyer_Yusuf3.png"
                    width={200}
                    height={100}
          
                    alt="Picture of the author"/>
          <Image src = "/assets/images/Global_Ambassador_Joe.png"
                    width={200}
                    height={100}
          
                    alt="Joe"/>
                              <Image src = "/assets/images/Global_Joe2.png"
                    width={200}
                    height={100}
          
                    alt="Joe"/>
                                    <Image src = "/assets/images/Global_Joe3.png"
                    width={200}
                    height={100}
          
                    alt="Joe"/>

        </div>
        </div>

        <div>
        <div className = "flex flex-row  text-5xl md:text-8xl font-mono font-bold mt-32 mb-12 justify-center">
            Aquaintances by chance
          </div>
          <div className = "flex flex-row overflow-x-auto space-x-3">
          
          <Image src = "/assets/images/Cpat.png"
                    width={500}
                    height={100}
          
                    alt="Halckers"/>
          <Image src = "/assets/images/Cpat2.png"
                    width={500}
                    height={100}
          
                    alt="Halckers"/>

          <Image src = "/assets/images/Cpat3.png"
                    width={500}
                    height={100}
          
                    alt="Halckers"/>
          </div>
         

        </div>

        <div>
        <div className="flex flex-row text-7xl md:text-9xl font-black font-dancing-script mt-24 mb-12 justify-center rainbow-text">
          Lovers by choice
        </div>

          <div className = "flex flex-row max-w-full overflow-x-auto space-x-3">
          <Image src = "/assets/images/Gay7.png"
                    width={500}
                    height={100}
          
                    alt="Gay"/>
                    <Image src = "/assets/images/Gay8.png"
                    width={500}
                    height={100}
          
                    alt="Gay"/>
                    <Image src = "/assets/images/Gay9.png"
                    width={500}
                    height={100}
          
                    alt="Gay"/>
                    <Image src = "/assets/images/Gay10.png"
                    width={500}
                    height={100}
          
                    alt="Gay"/>
                    <Image src = "/assets/images/Gay11.png"
                    width={500}
                    height={100}
          
                    alt="Gay"/>
                    <Image src = "/assets/images/Gay12.png"
                    width={500}
                    height={100}
          
                    alt="Gay"/>
                    <Image src = "/assets/images/Gay13.png"
                    width={500}
                    height={100}
          
                    alt="Gay"/>
                    <Image src = "/assets/images/Gay14.png"
                    width={500}
                    height={100}
          
                    alt="Gay"/>
                  

          <Image src = "/assets/images/Gay.png"
                    width={500}
                    height={100}
          
                    alt="Gay"/>
          <Image src = "/assets/images/Gay2.png"
                    width={500}
                    height={100}
          
                    alt="Gay"/>

          <Image src = "/assets/images/Gay3.png"
                    width={500}
                    height={100}
          
                    alt="Gay"/>
               <Image src = "/assets/images/Gay4.png"
                    width={500}
                    height={100}
          
                    alt="Gay"/>
             <Image src = "/assets/images/Gay5.png"
                    width={500}
                    height={100}
          
                    alt="Gay"/>
             <Image src = "/assets/images/Gay6.png"
                    width={500}
                    height={100}
          
                    alt="Gay"/>
          
          

          </div>
         

        </div>


      </div>

     
    </div>

      
    </div>

  )
}
 