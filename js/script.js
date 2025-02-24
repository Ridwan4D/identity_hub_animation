const serviceCards = document.querySelectorAll('.service_card');
const serviceCardBlurs = document.querySelectorAll('.service_card_blur');

serviceCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        if (serviceCardBlurs[index]) {
            serviceCardBlurs[index].classList.add("active");
            serviceCardBlurs[index].classList.add("rotate-gradient");
        }
    });

    card.addEventListener('mouseleave', () => {
        if (serviceCardBlurs[index]) {
            serviceCardBlurs[index].classList.remove("active");
            serviceCardBlurs[index].classList.remove("rotate-gradient")
        }
    });
});






















new Swiper('.swiper', {
    loop: true,
    // spaceBetween: 20,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.go_next',
        prevEl: '.go_prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});