import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const simpleShowAnimaiton = item => {
    ScrollTrigger.refresh();

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: "top bottom",
        }
    });

    tl.addLabel("start")
        .from(item, {
            scale: .5,
            x: 50,
            opacity: 0
        })
        .addLabel("end");
};

export const showWhyUS = item => {
    ScrollTrigger.refresh();

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: item.children,
            start: "top 90%",
          
        }
    });

    tl.addLabel("start")
        .from(item.children[0], {
            duration: 1,
            scale: .5,
            x: '-100%',
            opacity: 0
        })
        .from(item.children[1], {
            duration: 1,
            scale: .5,
            x: '+100%',
            opacity: 0
        }, '=-.5')
        .addLabel("end");
};

export const showFAQ = item => {
    ScrollTrigger.refresh();

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: item.children,
            start: "top 90%",
          
        }
    });

    tl.addLabel("start")
        .from(item.children[0], {
            duration: 1,
            scale: .5,
            x: '-100%',
            opacity: 0
        })
        .from(item.children[1], {
            duration: 1,
            scale: .5,
            y: '+100%',
            opacity: 0
        })
        .addLabel("end");
};