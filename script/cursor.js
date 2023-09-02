window.addEventListener("load", (event) => {
    const cursor = document.querySelector(".cursor");
    const activeEls = document.querySelectorAll("a,button");
    const menuItems = document.querySelectorAll(".menu-item-morph");

    window.addEventListener('mousemove', (event) => {
        // console.log(event);
        if (!cursor.classList.contains('in-menu')) {
            cursor.style.transitionProperty = 'transform';
            cursor.style.left = `calc(${event.clientX}px - 60px)`;
            cursor.style.top = `calc(${event.clientY}px - 60px)`;
            cursor.style.height = `120px`;
            cursor.style.width = `120px`;
        }

    })

    activeEls.forEach((el) => {
        el.addEventListener('mouseenter', (event) => {
            cursor.style.transform = 'scale(.5)';
        })
        el.addEventListener('mouseleave', (event) => {
            cursor.style.transform = 'scale(1)';

        })
    })

    menuItems.forEach((el) => {
        el.addEventListener('mouseenter', (event) => {
            const box = el.getBoundingClientRect();

            cursor.classList.add('in-menu');
            cursor.style.transitionProperty = 'all';
            cursor.style.left = `${box.left}px`;
            cursor.style.top = `${box.top}px`;
            cursor.style.height = `${box.height}px`;
            cursor.style.width = `${box.width}px`;
            cursor.style.borderRadius = `0px`;
            cursor.style.transform = 'scaleY(1)';
        })
        el.addEventListener('mouseleave', (event) => {
            cursor.classList.remove('in-menu');
            cursor.style.transitionProperty = 'transform';
            cursor.style.transform = 'scale(1)';
            cursor.style.left = `calc(${event.clientX}px - 60px)`;
            cursor.style.top = `calc(${event.clientY}px - 60px)`;
            cursor.style.height = `120px`;
            cursor.style.width = `120px`;
            cursor.style.borderRadius = `9999px`;

        })
    })
});