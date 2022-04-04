import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const simpleShowAnimaiton = (item, title, desc, toLeft) => {
  ScrollTrigger.refresh();

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: 'top 90%',
    },
  });

  tl.addLabel('start')
    .from(title, {
      duration: 1.2,
      scale: 0.5,
      x: toLeft ? '10%' : '-10%',
      opacity: 0,
      ease: 'back.out(1.1)',
    })
    .from(
      desc,
      {
        duration: 1.4,
        scale: 0.2,
        x: toLeft ? '30%' : '-30%',
        opacity: 0,
        ease: 'elastic.out(1, 0.8)',
      },
      '=-.5'
    )
    .addLabel('end');
};

export const showWhyUS = (container, desc, img, toLeft) => {
  ScrollTrigger.refresh();

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 90%',
    },
  });

  tl.addLabel('start')
    .from(desc, {
      duration: 1.2,
      scale: 0.5,
      x: toLeft ? '-30%' : '30%',
      opacity: 0,
      ease: 'back.out(1.1)',
    })
    .from(
      img,
      {
        duration: 1.4,
        scale: 0.2,
        x: toLeft ? '100%' : '-100%',
        opacity: 0,
        ease: 'elastic.out(1, 0.8)',
      },
      '=-.5'
    )
    .addLabel('end');
};

export const showFAQ = (item) => {
  ScrollTrigger.refresh();

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: item.children,
      start: 'top 90%',
    },
  });

  tl.addLabel('start')
    .from(item.children[0], {
      duration: 1,
      scale: 0.5,
      x: '-100%',
      opacity: 0,
    })
    .from(item.children[1], {
      duration: 1,
      scale: 0.5,
      y: '+100%',
      opacity: 0,
    })
    .addLabel('end');
};
