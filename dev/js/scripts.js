import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

// gsap.registerPlugin(GSDevTools);

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { RocketTL } from "./Rocket"
import { liftOffTL } from "./liftOff"
import { flightTL } from "./FlightPath"
import { marsZoomTL } from "./marsZoom"
import { landingTL } from "./landing"

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
        .add(zoomTL, "-=7")
        .add(RocketTL, "-=2") 
        .add(liftOffTL, "-=1") 
        .add(flightTL, "zoomFlight") 
        .add(marsZoomTL, "zoomFlight") 
        .add(landingTL);



 GSDevTools.create();




