import { gsap } from "gsap";

export let fadeInTL = gsap.timeline();
fadeInTL.from("#Sky-Background",{alpha:0, duration:2, scale:20})
        .from("#Clouds",{alpha:0, stagger:0.25, duration:2})
        .from("#Stars-",{alpha:0, stagger:0.25, duration:3}, "-=1")
        .from("#Moon",{alpha:0, duration:5}, "-=2");