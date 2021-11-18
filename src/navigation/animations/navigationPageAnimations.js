import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const setNavbarSticky = (item) => {
  ScrollTrigger.refresh();

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top top",
      scrub: true,
    },
  });

  tl.addLabel("start")
    .to(item, {
      backgroundColor: "#36d7b7",
      height: "5vh",
      boxShadow: "0px 5px 10px black",
    })
    .addLabel("end");
};

export const hideNavigation = (item) => {
  let tl = gsap.timeline();

  tl.addLabel("start")
    .to(item, {
      duration: 0.15,
      x: "-100%",
      opacity: 0,
      boxShadow: "none",
    })
    .addLabel("end");
};

export const showNavigation = (item) => {
  let tl = gsap.timeline();

  tl.addLabel("start")
    .to(item, {
      duration: 0.15,
      x: 0,
      opacity: 1,
    })
    .addLabel("start")
    .from(
      item.children,
      {
        x: -150,
        duration: 0.35,
        opacity: 0,
        stagger: {
          each: 0.065,
        },
      },
      "=-.1.5"
    )
    .addLabel("end");
};
