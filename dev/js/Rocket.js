import { gsap } from "gsap";


gsap.set("Flames",{display:"none"});

export let RocketTL = gsap.timeline();

RocketTL.from("#Rocket",{y:"+=1000", duration:1});