import gsap from "gsap";

export const slideHorizontally = (element, side = "left", duration = 0.2) => {
  const tl = gsap.timeline();

  tl.addLabel("start")
    .to(
      element,
      {
        visibility: "visible",
      },
      "start"
    )
    .from(
      element,
      {
        duration: duration,
        ease: "back.out(1.7)",
        opacity: 0,
        x: side === "left" ? "-100%" : "+100%",
      },
      "start"
    )
    .addLabel("end");
};

export const slideVertically = (element, side = "top", duration = 0.2) => {
  const tl = gsap.timeline();

  tl.addLabel("start")
    .to(
      element,
      {
        visibility: "visible",
      },
      "start"
    )
    .from(
      element,
      {
        duration: duration,
        opacity: 0,
        ease: "elastic.out(1,0.5)",
        y: side === "top" ? "-100%" : "+100%",
      },
      "start"
    )
    .addLabel("end");
};

export const none = (element, side = "top", duration = 0.2) => {
  const tl = gsap.timeline();

  tl.addLabel("start")
    .to(
      element,
      {
        visibility: "visible",
      },
      "start"
    )
    .addLabel("end");
};
