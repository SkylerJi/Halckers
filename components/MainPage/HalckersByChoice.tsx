import { CustomImage } from "./imageStyling";

export default function HalckersByChoice(){
    const imageHeight = 500
    const imageWidth = 500
    return (
        <div className = "flex flex-row max-w-full overflow-x-auto space-x-3">
        <CustomImage 
        src = "/assets/images/Halckers7.png"
        width={imageWidth}
        height={imageHeight}
        alt="halckers"/>
      <CustomImage 
        src = "/assets/images/Halckers11.png"
        width={imageWidth}
        height={imageHeight}
        alt="halckers"/>
        <CustomImage 
        src = "/assets/images/Halckers8.png"
        width={imageWidth}
        height={imageHeight}
        alt="halckers"/>
        <CustomImage 
        src = "/assets/images/Halckers9.png"
        width={imageWidth}
        height={imageHeight}
        alt="halckers"/>
        {/* <CustomImage 
        src = "/assets/images/halckers10.png"
        width={imageWidth}
        height={imageHeight}
        alt="halckers"/> */}
        <CustomImage 
        src = "/assets/images/Halckers12.png"
        width={imageWidth}
        height={imageHeight}
        alt="halckers"/>
        <CustomImage 
        src = "/assets/images/Halckers13.png"
        width={imageWidth}
        height={imageHeight}
        alt="halckers"/>
        <CustomImage 
        src = "/assets/images/Halckers14.png"
        width={imageWidth}
        height={imageHeight}
        alt="halckers"/>
        <CustomImage 
        src = "/assets/images/Halckers.png"
        width={imageWidth}
        height={imageHeight}
        alt="halckers"/>
        <CustomImage 
        src = "/assets/images/Halckers2.png"
        width={imageWidth}
        height={imageHeight}
        alt="halckers"/>
        <CustomImage 
        src = "/assets/images/Halckers3.png"
        width={imageWidth}
        height={imageHeight}
        alt="halckers"/>
      <CustomImage 
      src = "/assets/images/Halckers4.png"
      width={imageWidth}
      height={imageHeight}
      alt="halckers"/>
    <CustomImage 
      src = "/assets/images/Halckers5.png"
      width={imageWidth}
      height={imageHeight}
      alt="halckers"/>
    <CustomImage 
      src = "/assets/images/Halckers6.png"
      width={imageWidth}
      height={imageHeight}
      alt="halckers"/>
    </div>
    )
}