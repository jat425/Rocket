import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

gsap.set("#City3",{transformOrigin:"center"});
gsap.set("#City2",{transformOrigin:"center"});
gsap.set("#City1",{transformOrigin:"center"});
gsap.set("#Middle",{transformOrigin:"center"});

zoomTL.from("#City3",{duration:6, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
    .from("#City2",{duration:6, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
    .from("#City1",{duration:6, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
