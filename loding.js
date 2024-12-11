// gsap.fromTo(
//     ".loading-page",
//     { opacity: 1 },
//     {
//       opacity: 0,
//       display: "none",
//       duration: 1.5,
//       delay: 3.5,
//     }
//   );
  
//   gsap.fromTo(
//     ".logo-name",
//     {
//       y: 50,
//       opacity: 0,
//     },
//     {
//       y: 0,
//       opacity: 1,
//       duration: 2,
//       delay: 0.5,
//     }
//   );





// Animate loading page opacity and hide it after delay
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

// Animate logo-name (or specific SVG paths) with bounce effect
gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);

// Add stroke animation for SVG paths
gsap.fromTo(
  ".logo-path",
  { strokeDasharray: 1000, strokeDashoffset: 1000 },
  {
    strokeDashoffset: 0,
    duration: 2.5,
    delay: 0.5,
    ease: "power2.out",
  }
);
