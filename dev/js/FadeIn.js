import { gsap } from "gsap";

gsap.set("#Stars-",{transformOrigin:"center"});

export let fadeInTL = gsap.timeline();
fadeInTL.from("#Sky-Background",{alpha:0, duration:2, scale:20})
        .from("#Clouds",{alpha:0, stagger:0.25, duration:2})
        .from("#Stars-",{alpha:0, stagger:0.25, duration:3, onStart:controlStars}, "-=1")
        .from("#Moon",{alpha:0, duration:5}, "-=2");


export let starsTL = gsap.timeline({paused:true});

starsTL.to("#star1",{duration:.8, scaleX:0, scaleY:0, yoyo:true, stagger:1, repeat:1}, "stars2")
        .to("#star2",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars2")
        .to("#star3",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars3")
        .to("#star4",{duration:.8, scaleX:0, scaleY:0, yoyo:true, stagger:1, repeat:1}, "stars2")
        .to("#star5",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars1")
        .to("#star6",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars3")
        .to("#star7",{duration:.8, scaleX:3, scaleY:3, yoyo:true, stagger:1, repeat:1}, "stars5")
        .to("#star8",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars2")
        .to("#star9",{duration:.8, scaleX:0, scaleY:0, yoyo:true, stagger:1, repeat:1}, "stars1")
        .to("#star10",{duration:.8, scaleX:3, scaleY:3, yoyo:true, stagger:1, repeat:1}, "stars3")
        .to("#star11",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars4")
        .to("#star12",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars2")
        .to("#star13",{duration:.8, scaleX:0, scaleY:0, yoyo:true, stagger:1, repeat:1}, "stars3")
        .to("#star14",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars2")
        .to("#star15",{duration:.8, scaleX:0, scaleY:0, yoyo:true, stagger:1, repeat:1}, "stars1")
        .to("#star16",{duration:.8, scaleX:0, scaleY:0, yoyo:true, stagger:1, repeat:1}, "stars3")
        .to("#star17",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars1")
        .to("#star18",{duration:.8, scaleX:0, scaleY:0, yoyo:true, stagger:1, repeat:1}, "stars1")
        .to("#star19",{duration:.8, scaleX:1, scaleY:1, yoyo:true, stagger:1, repeat:1}, "stars2")
        .to("#star20",{duration:.8, scaleX:0, scaleY:0, yoyo:true, stagger:1, repeat:1}, "stars3")
        .to("#star21",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars4")
        .to("#star22",{duration:.8, scaleX:0, scaleY:0, yoyo:true, stagger:1, repeat:1}, "stars5")
        .to("#star23",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars1")
        .to("#star24",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars4")
        .to("#star25",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars3")
        .to("#star26",{duration:.8, scaleX:0, scaleY:0, yoyo:true, stagger:1, repeat:1}, "stars5")
        .to("#star27",{duration:.8, scaleX:0, scaleY:0, yoyo:true, stagger:1, repeat:1}, "stars2")
        .to("#star28",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars1")
        .to("#star29",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars4")
        .to("#star30",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars5")
        .to("#star31",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars3")
        .to("#star31",{duration:.8, scaleX:0, scaleY:0, yoyo:true, stagger:1, repeat:1}, "stars2")
        .to("#star33",{duration:.8, scaleX:0, scaleY:0, yoyo:true, stagger:1, repeat:1}, "stars1")
        .to("#star34",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars5")
        .to("#star35",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars4")
        .to("#star36",{duration:.8, scaleX:0, scaleY:0, yoyo:true, stagger:1, repeat:1}, "stars1")
        .to("#star37",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars3")
        .to("#star38",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars2")
        .to("#star39",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars1")
        .to("#star40",{duration:.8, scaleX:0, scaleY:0, yoyo:true, stagger:1, repeat:1}, "stars1")
        .to("#star41",{duration:.8, scaleX:1, scaleY:1, yoyo:true, stagger:1, repeat:1}, "stars5")
        .to("#star42",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars3")
        .to("#star43",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars2")
        .to("#star44",{duration:.8, scaleX:1, scaleY:1, yoyo:true, stagger:1, repeat:1}, "stars4")
        .to("#star45",{duration:.8, scaleX:1, scaleY:1, yoyo:true, stagger:1, repeat:1}, "stars1")
        .to("#star46",{duration:.8, scaleX:1, scaleY:1, yoyo:true, stagger:1, repeat:1}, "stars2")
        .to("#star47",{duration:.8, scaleX:2, scaleY:2, yoyo:true, stagger:1, repeat:1}, "stars1")
        .to("#star48",{duration:.8, scaleX:0, scaleY:0, yoyo:true, stagger:1, repeat:1}, "stars5")


            
function controlStars(){
    starsTL.play()
 }