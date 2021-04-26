import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

gsap.set("#City3",{transformOrigin:"center"});
gsap.set("#City2",{transformOrigin:"center"});
gsap.set("#City1",{transformOrigin:"center"});
// gsap.set("#CityBottom",{transformOrigin:"top"});
gsap.set("#Middle",{transformOrigin:"top"});
gsap.set("#Rocket",{transformOrigin:"top"});
gsap.set("#Bushes-Foreground",{transformOrigin:"center"});

zoomTL.from("#City3",{duration:6, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
    .from("#City2",{duration:6, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
    .from("#City1",{duration:6, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
    // .from("#CityBottom",{duration:5, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
    .from("#Middle",{duration:6, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
    .from("#Rocket",{duration:6, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
    .from("#Bushes-Forground",{duration:6, scale:10,ease: "power4.out",y:"+=1500"},"zoom")