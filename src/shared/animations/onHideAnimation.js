import gsap from 'gsap';

const defaultDuration = 0.2;

export const slideHorizontally = (
  element,
  side = 'left',
  duration = defaultDuration
) => {
  const tl = gsap.timeline();

  tl.addLabel('start')
    .to(element, {
      duration: duration,
      x: side === 'left' ? '-100vh' : '+100vh',
    })
    .to(element, {
      visibility: 'hidden',
    })
    .addLabel('end')
    .set(element, {
      x: 0,
    });
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
    .to(element, {
      duration: duration,
      y: side === 'top' ? '-100vh' : '+100vh',
    })
    .to(element, {
      visibility: 'hidden',
    })
    .addLabel('end')
    .set(element, {
      y: 0,
    });
};

export const rollUp = (element, duration = defaultDuration) => {
  if (!element) {
    return;
  }
  const tl = gsap.timeline();

  tl.to(element, {
    height: '0',
    duration,
  })
    .to(
      element,
      {
        width: '0',
        duration: duration + 0.1,
      },
      '=+.1'
    )
    .set(element, {
      visibility: 'hidden',
    });
};

export const none = (element, side = 'top') => {
  if (!element) {
    return;
  }
  const tl = gsap.timeline();

  tl.addLabel('start')
    .to(element, {
      visibility: 'hidden',
    })
    .addLabel('end');
};
