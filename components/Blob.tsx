// "use client";
// /** @jsxImportSource @emotion/react */
// import '@emotion/react';
// import { css, keyframes } from '@emotion/react';
// import React, { useEffect, useRef } from 'react';
// declare module 'react' {
//     interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//       // extends React's HTMLAttributes for css prop
//       css?: any;
//     }
//   }

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   50% {
//     transform: scale(1, 1.5);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const blobStyle = css`
//   filter: blur(100px);
//   z-index: -1;
//   background-color: white;
//   height: 50vmax;
//   width: 90vmax;
//   aspect-ratio: 1;
//   position: fixed;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   border-radius: 50%;
//   background: linear-gradient(to right, #0a00ff ,#fbff00, #fb04b4, #0a00ff, #00ffca);
//   animation: ${rotate} 5s infinite;
//   opacity: 1;
// `;

// const Blob: React.FC = () => {
//   const blobRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const blob = blobRef.current;

//     const moveBlob = (event: PointerEvent) => {
//       const { clientX, clientY } = event;
//       const offsetX = blob?.offsetWidth ? blob.offsetWidth / 2 : 0;
//       const offsetY = blob?.offsetHeight ? blob.offsetHeight / 2 : 0;
      

//       blob?.animate(
//         {
//           left: `${clientX - offsetX}px`,
//           top: `${clientY - offsetY}px`,
//         },
//         { duration: 3000, fill: 'forwards' }
//       );
//     };

//     window.addEventListener('pointermove', moveBlob);

//     return () => {
//       window.removeEventListener('pointermove', moveBlob);
//     };
//   }, []);

//   return <div id="blob" css={blobStyle} ref={blobRef}></div>;
// };

// export default Blob;



"use client";
/** @jsxImportSource @emotion/react */
import '@emotion/react';
import { css, keyframes } from '@emotion/react';
import React from 'react';

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes for css prop
      css?: any;
    }
  }

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  50% {
    transform: translate(-50%, -50%) scale(1, 1.5);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const blobStyle = css`
  filter: blur(100px);
  z-index: -1;
  background-color: white;
  height: 50vmax;
  width: 85vmax;
  aspect-ratio: 1;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: linear-gradient(to right, #0a00ff, #fbff00, #fb04b4, #0a00ff, #00ffca);
  animation: ${rotate} 5s infinite;
  opacity: 1;
`;

const Blob: React.FC = () => {
  return <div id="blob" css={blobStyle}></div>;
};

export default Blob;