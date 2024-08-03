"use client"
// src/components/ParticlesComponent.tsx
import React, { useEffect, useState } from 'react';
import Script from 'next/script';


declare global {
  interface Window {
    particlesJS: any;
    pJSDom: any;
  }
}

const particlesConfig = {
    "particles": {
      "number": {
        "value": 70,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };
  

  const ParticlesComponent = () => {
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      if (loaded && window.particlesJS) {
        window.particlesJS("particles-js", particlesConfig);
      }
    }, [loaded]);
  
    return (
      <>
        <Script
          src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
          onLoad={() => setLoaded(true)}
        />
        <div id="particles-container" style={{ zIndex: 0, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
          <div id="particles-js" style={{ width: '100%', height: '100%' }}></div>
        </div>
      </>
    );
  };
  
  export default ParticlesComponent;