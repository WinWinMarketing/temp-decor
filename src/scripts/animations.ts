import { gsap, ScrollTrigger } from './gsap-init';

export function animateTextReveal(selector: string | Element, options?: {
  stagger?: number;
  duration?: number;
  y?: number;
  delay?: number;
  trigger?: string | Element;
}) {
  const defaults = {
    stagger: 0.03,
    duration: 0.8,
    y: 60,
    delay: 0,
  };
  const opts = { ...defaults, ...options };
  const trigger = opts.trigger || selector;

  gsap.from(selector, {
    y: opts.y,
    opacity: 0,
    stagger: opts.stagger,
    duration: opts.duration,
    delay: opts.delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: trigger as gsap.DOMTarget,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

export function animateFadeIn(selector: string | Element, options?: {
  y?: number;
  duration?: number;
  delay?: number;
  trigger?: string | Element;
}) {
  const defaults = { y: 40, duration: 0.8, delay: 0 };
  const opts = { ...defaults, ...options };
  const trigger = opts.trigger || selector;

  gsap.from(selector, {
    y: opts.y,
    opacity: 0,
    duration: opts.duration,
    delay: opts.delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: trigger as gsap.DOMTarget,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

export function animateStagger(selector: string, options?: {
  y?: number;
  duration?: number;
  stagger?: number;
  trigger?: string | Element;
}) {
  const defaults = { y: 50, duration: 0.7, stagger: 0.12 };
  const opts = { ...defaults, ...options };
  const trigger = opts.trigger || selector;

  gsap.from(selector, {
    y: opts.y,
    opacity: 0,
    duration: opts.duration,
    stagger: opts.stagger,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: trigger as gsap.DOMTarget,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

export function animateCounter(element: Element, target: number, duration = 2) {
  const obj = { val: 0 };
  gsap.to(obj, {
    val: target,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    onUpdate() {
      element.textContent = Math.round(obj.val).toString();
    },
  });
}

export function animateParallax(selector: string, speed = 0.3) {
  gsap.to(selector, {
    yPercent: speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: selector,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
  });
}

export function animateClipReveal(selector: string | Element) {
  gsap.from(selector, {
    clipPath: 'inset(100% 0% 0% 0%)',
    duration: 1.2,
    ease: 'power4.inOut',
    scrollTrigger: {
      trigger: selector as gsap.DOMTarget,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}

export function initSectionAnimations() {
  document.querySelectorAll('[data-animate="fade-up"]').forEach((el) => {
    animateFadeIn(el);
  });

  document.querySelectorAll('[data-animate="stagger"]').forEach((container) => {
    const children = container.children;
    gsap.from(children, {
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  document.querySelectorAll('[data-animate="clip"]').forEach((el) => {
    animateClipReveal(el);
  });

  document.querySelectorAll('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.getAttribute('data-parallax') || '0.3');
    gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  });

  document.querySelectorAll('[data-counter]').forEach((el) => {
    const target = parseInt(el.getAttribute('data-counter') || '0', 10);
    animateCounter(el, target);
  });
}
