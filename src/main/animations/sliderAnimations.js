import gsap from 'gsap';

export const slideLeft = (slideRef) => {
  const tl = gsap.timeline();
  tl.addLabel('start')
    .to(slideRef, {
      duration: 0.2,
      x: '100%',
    })
    .to(slideRef, {
      duration: 0.2,
      x: '-100%',
    });
};
