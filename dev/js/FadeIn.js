import { gsap } from "gsap";

export let fadeInTL = gsap.timeline();
fadeInTL.from("#Sky-Background",{alpha:0, duration:2, scale:20})
        .from("#Clouds",{alpha:0, stagger:0.25, duration:2})
        .from("#Stars-",{alpha:0, stagger:0.25, duration:3, onComplete:controlStars}, "-=1")
        .from("#Moon",{alpha:0, duration:5}, "-=2");


export let starsTL = gsap.timeline({paused:true});

starsTL.to("#Stars-",{duration:1, autoAlpha:0, yoyo:true, repeat:5},"stars")
            
function controlStars(){
    starsTL.play()
 }