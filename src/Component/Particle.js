import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
       className="absolute top-0 left-0 w-full h-full z-0"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          move: { enable: true, speed: 1 },
          size: { value: 3 },
          opacity: {
            value: 0.05,
            anim: { enable: true, speed: 1, opacity_min: 0.1 },
          },
          line_linked: {
            enable: true,
            distance: 150,
            opacity: 0.2,
          },
        },
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
