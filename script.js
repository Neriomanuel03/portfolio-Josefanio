gsap.registerPlugin(ScrollTrigger);

gsap.from("#hero", {
  opacity: 0,
  y: 60,
  duration: 3,
  ease: "power3.out"
});

gsap.from("#sobre", {
  scrollTrigger: {
    trigger: ".sobre",
    start: "top 80%"
  },
  opacity: 0,
  y: 80,
  duration: 4,
  ease: "power3.out"
});

gsap.from("#projectos", {
  scrollTrigger: {
    trigger: ".projectos",
    start: "top 80%"
  },
  opacity: 0,
  y: 80,
  duration: 4,
  ease: "power3.out"
});

gsap.from("#Formacao", {
  scrollTrigger: {
    trigger: ".projectos",
    start: "top 80%"
  },
  opacity: 0,
  y: 80,
  duration: 4,
  ease: "power3.out"
});


