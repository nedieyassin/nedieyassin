window.addEventListener("load", (event) => {
    gsap.to(".scroll-down", {y: -50, duration: 1.5, repeat: -1, yoyo: true});
    gsap.to(".pop-icon", {y: -50, scale:1.1, duration: 1.5, repeat: -1, yoyo: true,stagger: 1});


    const animateMainMenu = () => {
        const toggleMenu = document.querySelectorAll('.toggle-menu');


        const menuTl = gsap.timeline({paused: true,});

        menuTl.from(".menu-backdrop", {
            y: '-100%',
            opacity: 1,
            duration: 0.1,
            ease: 'power2.inOut',
        }).from(".menu-item", {
            y: '50px',
            opacity: 0,
            stagger: 0.04,
            ease: 'power2.inOut',
            duration: 0.1,
        }).reverse();


        toggleMenu.forEach((el) => {
            el.addEventListener('click', () => {
                menuTl.reversed(!menuTl.reversed())
                // console.log(menuTl.paused)
            })
        })


    }

    animateMainMenu();


//


    // gsap.set(".services-title", {x: '-100%'})
    //
    // const servicestl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".services-section",
    //         start: "top 20%",
    //         end: "50% 50%+=100px",
    //         scrub: 1,
    //         pin: false,
    //     }
    // });
    // servicestl
    //     .to(".services-title", {x: '0%', stagger: 0.2, duration: 1})
    //     .to(".to-bold", {fontWeight: '900', duration: 1})
    //     .to(".to-light", {fontWeight: '100', duration: 1})

})