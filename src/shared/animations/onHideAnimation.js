import gsap from "gsap";

export const slideHorizontally = (element, side = "left", duration = 0.2) => {
  const tl = gsap.timeline();

  tl.addLabel("start")
    .to(element, {
      duration: duration,
      x: side === "left" ? "-100vh" : "+100vh",
    })
    .to(element, {
      visibility: "hidden",
    })
    .addLabel("end")
    .set(element, {
      x: 0,
    });
};

export const slideVertically = (element, side = "top", duration = 0.2) => {
  const tl = gsap.timeline();

  tl.addLabel("start")
    .to(element, {
      duration: duration,
      y: side === "top" ? "-100vh" : "+100vh",
    })
    .to(element, {
      visibility: "hidden",
    })
    .addLabel("end")
    .set(element, {
      y: 0,
    });
};

export const none = (element, side = "top", duration = 0.2) => {
  const tl = gsap.timeline();

  tl.addLabel("start")
    .to(element, {
      visibility: "hidden",
    })
    .addLabel("end");
};
