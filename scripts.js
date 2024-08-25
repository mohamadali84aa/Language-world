// GSAP Animations
gsap.from("header", { 
    y: -100, 
    opacity: 0, 
    duration: 1, 
    ease: "easeOut"
});

gsap.from(".home-section h1", { 
    opacity: 0, 
    y: 50, 
    duration: 1.2, 
    ease: "power3.out"
});

gsap.from(".cta-button", { 
    opacity: 0, 
    y: 30, 
    duration: 1.5, 
    delay: 0.5, 
    ease: "back.out(1.7)"
});

gsap.from(".master-english", { 
    opacity: 0, 
    y: 100, 
    duration: 1.5, 
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".master-english",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true
    }
});

gsap.from(".service-box", { 
    opacity: 0, 
    y: 30, 
    duration: 1, 
    stagger: 0.2, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true
    }
});

gsap.from(".contact form", { 
    opacity: 0, 
    y: 50, 
    duration: 1, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true
    }
});

gsap.from("footer", { 
    opacity: 0, 
    y: 50, 
    duration: 1, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
        end: "bottom 70%",
        scrub: true
    }
});
