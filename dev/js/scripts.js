import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { RocketTL } from "./Rocket"
import { liftOffTL } from "./liftOff"

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
        .add(zoomTL, "-=7")
        .add(RocketTL, "-=2") 
        .add(liftOffTL, "-=1") 
  








 GSDevTools.create();




