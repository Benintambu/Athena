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

    const headtimeline = gsap.timeline()

    headtimeline.from(selection[0].chars, {
        y: 60,
        duration: 1,
        opacity: 0,
        stagger: 0.099,
    }).to('.header_end', {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: 2,
        ease: 'power4.out',
    }, '-=1')

    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 700)
    })

    gsap.ticker.lagSmoothing(0)

})


