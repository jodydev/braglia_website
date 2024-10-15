import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";

const SplitTextAnimations = () => {
  useEffect(() => {
    if (window.innerWidth >= 992) {
      gsap.registerPlugin(ScrollTrigger);
      new SplitType(".title-animation");
      const titleAnims = document.querySelectorAll(".title-animation");
      titleAnims.forEach((titleAnim) => {
        const charElements = titleAnim.querySelectorAll(".char");

        charElements.forEach((char, index) => {
          const tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: char,
              start: "top 95%", // Inizia l'animazione più tardi
              end: "bottom 50%", // Termina l'animazione più presto
              scrub: false,
              markers: false,
              toggleActions: "play none none none",
            },
          });

          const charDelay = index * 0.05; // Aumenta il ritardo tra i caratteri

          tl2.from(char, {
            duration: 1.5, // Aumenta la durata dell'animazione
            x: 70,
            delay: charDelay,
            autoAlpha: 0,
          });
        });
      });

      const titleElements = document.querySelectorAll(".title-animation");

      titleElements.forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            markers: false,
            onEnter: () => {
              if (el instanceof Element) {
                el.classList.add("title-anim-active");
              }
            },
          },
        });
      });
    }
  }, []);
  return null;
};

export default SplitTextAnimations;