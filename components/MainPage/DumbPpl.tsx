import { CustomImage } from "./imageStyling";
export default function DumbPpl(){
    const imageHeight = 400
    const imageWidth = 250
    return (
        <div className = "flex flex-row overflow-x-auto space-x-3">
            
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
            alt="Dean"/>
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
            alt="Skyler"/>
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
            alt="Skyler"/>
            <CustomImage src = "/assets/images/Lawyer_Yusuf.png"
            width={imageWidth}
            height={imageHeight}  
            alt="Picture of the author"/>
            <CustomImage src = "/assets/images/Lawyer_Yusuf2.png"
            width={imageWidth}
            height={imageHeight}  
            alt="Picture of the author"/>
            <CustomImage src = "/assets/images/Lawyer_Yusuf3.png"
            width={imageWidth}
            height={imageHeight}  
            alt="Picture of the author"/>
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
            alt="Joe"/>
        </div>
    )
}