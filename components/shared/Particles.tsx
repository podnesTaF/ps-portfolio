"use client";
import Particles, { ParticlesProps } from "react-tsparticles";
import { loadFull } from "tsparticles";

const options = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    line_linked: {
      enable: false,
      opacity: 0.03,
    },
    move: {
      direction: "right",
      speed: 0.05,
    },
    size: {
      value: 1,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};

function Particle() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const particlesLoaded = async (container: any) => {
    // Handle loaded particles
  };

  return (
    <Particles
      className="-z-10"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options as ParticlesProps["options"]}
    />
  );
}

export default Particle;
