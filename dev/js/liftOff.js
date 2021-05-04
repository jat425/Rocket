import { gsap } from "gsap";

gsap.set("#Rocket",{transformOrigin:"center"});


export let liftOffTL = gsap.timeline();

liftOffTL.to("#Rocket",{duration:0.15, rotation:-5, ease:"none"})
            .to("#Rocket",{duration:0.15, rotation:5, yoyo:true, repeat:5, ease:"none"})
            .to("#Rocket",{duration:0.15, rotation:0,ease:"none", onComplete:controlFlames})
            .to("#Rocket",{duration:3, y:"-=400", scale:.50, ease: "power3.in"},"upAndAway")
            .to("#Clouds",{duration:5, y:"+=1000", ease: "power3.in"},'upAndAway')
            .to("#Moon",{duration:5, y:"+=1000", ease: "power3.in"},'upAndAway')
            .to("#Stars-",{duration:5, y:"+=1100", ease: "power3.in"},'upAndAway')
            .to("#Bushes-Forground",{duration:5, y:"+=800", ease: "power3.in"},'upAndAway')
            .to("#Middle",{duration:5, y:"+=900", ease: "power3.in"},'upAndAway')
            .to("#City-",{duration:5, y:"+=1000", ease: "power3.in"},'upAndAway')
            .from("#Space",{duration:5,alpha:0, ease: "power3.in"},'upAndAway');



export let flamesTL = gsap.timeline({paused:true});

flamesTL.to("#Flame1",{duration:0.35, scaleY:.25,yoyo:true, repeat:-1},"flames")
        .to("#Flame2",{duration:0.15, scaleY:.15,yoyo:true, repeat:-1},"flames")
        .to("#Flame3",{duration:0.10, scaleY:.25,yoyo:true, repeat:-1},"flames")
            
function controlFlames(){
    gsap.set("Flame1",{display:"block"});
    gsap.set("Flame2",{display:"block"});
    gsap.set("Flame3",{display:"block"});
    flamesTL.play()
 }