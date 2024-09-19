document.addEventListener("DOMContentLoaded", function () {
    /* Animation section services about.html */
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

    const contents = gsap.utils.toArray('#services .services_cont')

    gsap.to(contents, {
        xPercent: -100 * (contents.length - 1),
        scrollTrigger: {
            trigger: '#services',
/*             start: 'top 10%',
 */            pin: true,
            scrub: true,
        }
    })

    let titleSelection = Splitting({ target: '.header_content h3' })
    let parSelection = Splitting({ target: '.header_content p' })

    headTimeline = gsap.timeline()

    headTimeline.from(titleSelection[0].chars, {
        opacity: 0.1,
        ease: 'power4.out',
        duration: 3,
        stagger: 0.02,
        scale: 1.09,
    }).from(parSelection[0].words, {
        opacity: 0,
        y: 60,
        duration: 2,
        ease: 'power4.out',
        stagger: {
            amount: 0.7,
            each: 0.01,
        },
    }, "-=4")

    gsap.to('.photo_cont', {
        duration: 3,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        scrollTrigger: {
            trigger: '.photo',
            start: 'top 50%',
        },
    })

    teamAnim = document.querySelectorAll('.team_an')
    teamTimeline = gsap.timeline()

    /* if (window.matchMedia("(max-width: 700px)").matches) {
        // Animation pour mobile
        projTimeline.from(".item", { duration: 1, y: 50, stagger: 0.5, opacity: 0, });
    } else {
        // Animation pour desktop
        projTimeline.from(".item", { duration: 1, x: -200, stagger: 0.5, delay: -2, opacity: 0 });
    } */

    teamTimeline.to('.items_top', {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: 2,
        stagger: 0.5,
        scrollTrigger: {
            trigger: '.team_cont h4',
            start: 'top 50%'
        },
    })/* .from(teamAnim, {
        opacity: 0,
        y: 60,
        duration: 2,
    }, "-=3") */

    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 700)
    })

    gsap.ticker.lagSmoothing(0)

})
