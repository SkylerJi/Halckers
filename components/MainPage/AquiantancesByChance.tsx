import { useEffect, useRef } from "react";
import { CustomImage } from "./imageStyling";

export default function AcquiantancesByChance(){

    const imageHeight = 500
    const imageWidth = 700
    return (
        <div className="flex flex-row overflow-x-auto space-x-3">
          <div className="flex-none flex space-x-3">
            
          <CustomImage 
                 src = "/assets/images/Cpat.png"
                 width={imageWidth}
                 height={imageHeight}
        
                  alt="Skyler in the center cuz he's the group leader"/>
           <CustomImage  src = "/assets/images/Cpat2.png"
                   width={imageWidth}
                   height={imageHeight}
        
                  alt="Skyler not in the center cuz he's kind and wants other people to have the spotlight even though he's the group leader"/>

            <CustomImage  src = "/assets/images/Cpat3.png"
                  width={imageWidth}
                  height={imageHeight}
        
                  alt="Irrelevant ppl"/>
            </div>
        </div>
    )
}