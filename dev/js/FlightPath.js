import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let flightTL = gsap.timeline();

flightTL.to("#Rocket", {
    duration: 6,
    motionPath: {
        path: "#RocketPath",
        align:"#RocketPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: 90
    },
    ease: "none",
    scale:1
});

// MotionPathHelper.create("#Rocket");