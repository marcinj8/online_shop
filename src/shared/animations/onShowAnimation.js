import gsap from 'gsap';

const defaultDuration = 0.2;

export const slideHorizontally = (
  element,
  side = 'left',
  duration = defaultDuration
) => {
  if (!element) {
    return;
  }
  const tl = gsap.timeline();

  tl.addLabel('start')
    .to(
      element,
      {
        visibility: 'visible',
      },
      'start'
    )
    .from(
      element,
      {
        duration: duration,
        ease: 'back.out(1.7)',
        opacity: 0,
        x: side === 'left' ? '-100%' : '+100%',
      },
      'start'
    )
    .addLabel('end');
};

export const slideVertically = (
  element,
  side = 'top',
  duration = defaultDuration
) => {
  if (!element) {
    return;
  }
  const tl = gsap.timeline();

  tl.addLabel('start')
    .to(
      element,
      {
        visibility: 'visible',
      },
      'start'
    )
    .from(
      element,
      {
        duration: duration,
        opacity: 0,
        ease: 'elastic.out(1,0.5)',
        y: side === 'top' ? '-100%' : '+100%',
      },
      'start'
    )
    .addLabel('end');
};

export const rollDown = (element, duration = defaultDuration) => {
  if (!element) {
    return;
  }
  const tl = gsap.timeline();

  tl.set(element, {
    visibility: 'visible',
  })
    .to(element, {
      width: 'auto',
      duration: duration + 0.2,
    })
    .to(element, {
      height: 'auto',
      duration,
    });
};

export const none = (element, side = 'top') => {
  const tl = gsap.timeline();

  tl.addLabel('start')
    .to(
      element,
      {
        visibility: 'visible',
      },
      'start'
    )
    .addLabel('end');
};
