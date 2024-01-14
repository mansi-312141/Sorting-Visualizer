import React from "react";
import Particles from "react-particles";
import './particle.css'
function Particle (){
    return  (
    <Particles id="particles" 
          params={{ 
            particles: { 
              number: { 
                value: 500, 
                density: { 
                  enable: true, 
                  value_area: 7500, 
                } 
              }, 
            }, 
          }} 
        />
);
}

export default Particle;
/**
 *  In particle.css the z index is set -ve to send particles in background
 */