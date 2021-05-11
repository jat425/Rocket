import { gsap } from "gsap";

gsap.set("#moon",{transformOrigin:"center"});


export let marsZoomTL = gsap.timeline();

marsZoomTL.fromTo("#Mars1",{alpha:0, scale:0.25},{alpha:1, duration:4, scale:12, y:"700", x:"+=30",ease:"none"})

       
