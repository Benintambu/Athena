var loader = document.querySelector(".pre_loader")
const body = document.getElementById(".body")

window.addEventListener("load", function () {
    loader.style.display = "none"
});
/* 
const cursorRounded = document.querySelector('.rounded');
const cursorPointed = document.querySelector('.pointed');


const moveCursor = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

window.addEventListener('mousemove', moveCursor)

const customCursor = document.querySelector('.custom-cursor');
const targetDiv = document.querySelector('.normal-div');

targetDiv.addEventListener('mouseenter', () => {
    customCursor.style.display = 'block';
});

targetDiv.addEventListener('mouseleave', () => {
    customCursor.style.display = 'none';
});

targetDiv.addEventListener('mousemove', (e) => {
    customCursor.style.top = `${e.clientY}px`;
    customCursor.style.left = `${e.clientX}px`;
}); */

document.addEventListener("DOMContentLoaded", function () {
    let activeItemIndicator = CSSRulePlugin.getRule(".menu_item p#active::after");
    const toggleButton = document.querySelector(".burger");
    let isOpen = false;

    gsap.set(".menu_item p", { y: 225 });

    const timeline = gsap.timeline({ paused: true });

    timeline.to(".overlay", {
        duration: 1.5,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut"
    });

    timeline.to(".menu_item p", {
        duration: 1.5,
        y: 0,
        stagger: 0.2,
        ease: "power4.out"
    }, "-=1");

    timeline.to(activeItemIndicator, {
        width: "100%",
        duration: 1,
        ease: "power4.out",
        delay: 0.5
    }, "<");



    toggleButton.addEventListener("click", function () {
        if (isOpen) {
            timeline.reverse();
        } else {
            timeline.play();
        }
        isOpen = !isOpen;
    })

    /*  Animation */
    let selection = Splitting()
    gsap.registerPlugin(ScrollTrigger, TextPlugin)

    gsap.from(selection[0].chars, {
        opacity: 0.1,
        stagger: 0.5,
        scrollTrigger: {
            trigger: '.about_par',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
        }
    })

    // Animation pour le second élément
    let alterSelection = Splitting({ target: '.alter_content p' }); // Cible le paragraphe
    gsap.from(alterSelection[0].chars, {
        opacity: 0.1,
        stagger: 0.1,
        duration: 2,
        scale: 1.2,
        scrollTrigger: {
            trigger: '.alter',
            start: 'top 50%',
            end: 'bottom bottom',
            scrub: true,
        }
    });


    let servSection = Splitting({ target: '.services_left h3' })
    const servTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.services_left h3',
            start: 'top 80%',
        }
    })

    servTimeline.from(servSection[0].chars, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: {
            each: 1,
            amount: 0.5,
        },

    }).from('.services_left p', {
        y: 50,
        opacity: 0,
        duration: 1,
    }, '-=1')

    /*  */

    let projSelection = Splitting({ target: '.project_content h4' })
    const projTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.project_content h3',
            start: 'top 50%',
        }
    })

    projTimeline.from(projSelection[0].chars, {
        opacity: 0.1,
        stagger: 0.02,
        duration: 2,
        scale: 1.2,
    })

    /* clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' */

    if (window.matchMedia("(max-width: 700px)").matches) {
        // Animation pour mobile
        projTimeline.from(".item", { duration: 1, y: 50, stagger: 0.5, opacity: 0, });
    } else {
        // Animation pour desktop
        projTimeline.from(".item", { duration: 1, x: -200, stagger: 0.5, delay: -2, opacity: 0 });
    }


    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 700)
    })

    gsap.ticker.lagSmoothing(0)




})


