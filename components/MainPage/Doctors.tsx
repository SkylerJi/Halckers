import { CustomImage } from "./imageStyling";

export default function Doctors(){
    const imageHeight = 500
    const imageWidth = 300
    return (
        <div className = "flex flex-row overflow-x-auto space-x-3">
            <div className="flex-none flex space-x-3">
       

            <CustomImage src = "/assets/images/Doctor_Sid.png"
            width={imageWidth}
            height={imageHeight}
            alt="Sid"/>

            <CustomImage src = "/assets/images/Doctor_Sid2.png"
            width={imageWidth}
            height={imageHeight}

            alt="Sid"/>
            <CustomImage src = "/assets/images/Doctor_Sid3.png"
            width={imageWidth}
            height={imageHeight}
            alt="Sid"/>

            <CustomImage src = "/assets/images/Doctor_Sid5.png"
            width={imageWidth}
            height={imageHeight}
            alt="There are no weights on either side"/>

            <CustomImage src = "/assets/images/Doctor_Sid6.png"
            width={imageWidth}
            height={imageHeight}
            alt="Sid"/>

            <CustomImage src = "/assets/images/Doctor_Sid7.png"
            width={imageWidth}
            height={imageHeight}
            alt="Sid"/>


            <CustomImage src = "/assets/images/Doctor_Adi2.png"
            width={imageWidth}
            height={imageHeight}
            alt="Adi"/>

            <CustomImage src = "/assets/images/Doctor_Adi3.png"
            width={imageWidth}
            height={imageHeight}
            alt="Adi"/>

            <CustomImage src = "/assets/images/Doctor_Adi4.png"
            width={imageWidth}
            height={imageHeight}
            alt="He did NOT put it on"/>

            <CustomImage src = "/assets/images/Doctor_Praveen2.png"
            width={imageWidth}
            height={imageHeight}
            alt="Praveen"/>

            <CustomImage src = "/assets/images/Doctor_Praveen3.png"
            width={imageWidth}
            height={imageHeight}
            alt="🤓"/>
            <CustomImage
            src="/assets/images/Doctor_Praveen.png"
            width={imageWidth}
            height={imageHeight}  
            alt="Praveen"/>
            </div>
        </div>
    )
    
}