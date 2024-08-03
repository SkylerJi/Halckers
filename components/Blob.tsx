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
      css?: any;
    }
  }

const smoothBounce = keyframes`
  0%, 100% {
    transform: translate(-75%, -30%) rotate(0deg);
  }
  25% {
    transform: translate(-60%, -60%) rotate(90deg) scale(1.05, 1.15);
  }
  50% {
    transform: translate(-30%, -75%) rotate(180deg) scale(1.1, 1.1);
  }
  75% {
    transform: translate(-60%, -60%) rotate(270deg) scale(1.15, 1.05);
  }
`;

const blobStyle = css`
  filter: blur(100px);
  z-index: -1;
  background-color: white;
  height: 100vmax;
  width: 100vmax;
  aspect-ratio: 1;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: linear-gradient(to right, #0a00ff, #fbff00, #fb04b4, #0a00ff, #00ffca);
  animation: ${smoothBounce} 10s ease-in-out infinite;
  opacity: 1;
`;

const Blob: React.FC = () => {
  return <div id="blob" css={blobStyle}></div>;
};

export default Blob;