export const CustomImage = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) => (
  <div className="custom-image-container" style={{ width: `${width}px`, flexShrink: 0 }}>
    <style jsx>{`
      @keyframes borderGradient {
        0% {
          border-image-source: linear-gradient(to bottom right, #ffffff, #000000);
        }
        100% {
          border-image-source: linear-gradient(to bottom right, #000000, #ffffff);
        }
      }

      .custom-image-container {
        position: relative;
        display: inline-block;
      }

      .hover-gradient-border {
        border-image-slice: 1;
        border-width: 3px;
        border-style: solid;
        transition: border-image-source 0.5s;
      }

      .hover-gradient-border:hover {
        animation: borderGradient 1s forwards;
      }

      .alt-text {
        display: none;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.6);
        border-width: 3px;
        border-style: solid;
       
        color: white;
        text-align: center;
        padding: 5px 0;
      }

      .custom-image-container:hover .alt-text {
        display: block;
      }
    `}</style>
    <img
      src={src}
      alt={alt}
      className="hover-gradient-border"
      style={{
        width: '100%',
        height: `${height}px`,
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
    <div className="alt-text">{alt}</div>
  </div>
);