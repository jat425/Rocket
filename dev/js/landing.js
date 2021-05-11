import { gsap } from "gsap";
import {flamesTL} from "./liftOff"

gsap.set("#RocketDot1",{transformOrigin:"center"});
gsap.set("#RocketDot2",{transformOrigin:"center"});
gsap.set("#RocketDot3",{transformOrigin:"center"});
gsap.set("#RocketDot4",{transformOrigin:"center"});
gsap.set("#RocketDot5",{transformOrigin:"center"});
gsap.set("#RocketDot6",{transformOrigin:"center"});
gsap.set("#RocketDot7",{transformOrigin:"center"});
gsap.set("#RocketStar",{transformOrigin:"center"});


export let landingTL = gsap.timeline();

landingTL.to("#Rocket",{duration:1.5, x:"-=100", y:"+=300"},"flames")
            .to("#Flame1",{duration:1, scaleY:0, onStart:stopFlames},"flames")
            .to("#Flame2",{duration:1, scaleY:0},"flames")
            .to("#Flame3",{duration:1, scaleY:0},"flames")
            .to("#RocketDot1",{duration:.3, scaleX:1.5, scaleY:1.5, yoyo:true, repeat:1})
            .to("#RocketDot2",{duration:.3, scaleX:1.5, scaleY:1.5, yoyo:true, repeat:1}, "-=.4")
            .to("#RocketDot3",{duration:.3, scaleX:1.5, scaleY:1.5, yoyo:true, repeat:1}, "-=.4")
            .to("#RocketDot4",{duration:.3, scaleX:1.5, scaleY:1.5, yoyo:true, repeat:1}, "-=.4")
            .to("#RocketDot5",{duration:.3, scaleX:1.5, scaleY:1.5, yoyo:true, repeat:1}, "-=.4")
            .to("#RocketDot6",{duration:.3, scaleX:1.5, scaleY:1.5, yoyo:true, repeat:1}, "-=.4")
            .to("#RocketDot7",{duration:.3, scaleX:1.5, scaleY:1.5, yoyo:true, repeat:1}, "-=.4")
            .to("#RocketStar",{duration:1, scaleX:4, scaleY:4, rotate: 360, yoyo:true, repeat:1}, "-=.4")


function stopFlames(){
    flamesTL.kill();
}