document.querySelector('.carousel-control.prev').addEventListener('click', function () {
    const carousel = document.querySelector('.carousel');
    const scrollAmount = 200;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const currentScrollLeft = carousel.scrollLeft;

    if (currentScrollLeft === 0) {
        // If at the beginning, scroll to the end
        carousel.scrollTo({
            top: 0,
            left: maxScrollLeft,
            behavior: 'smooth'
        });
    } else {
        // Scroll left by the defined amount
        carousel.scrollBy({
            top: 0,
            left: -scrollAmount,
            behavior: 'smooth'
        });
    }
});

document.querySelector('.carousel-control.next').addEventListener('click', function () {
    const carousel = document.querySelector('.carousel');
    const scrollAmount = 200;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const currentScrollLeft = carousel.scrollLeft;

    if (currentScrollLeft >= maxScrollLeft) {
        // If at the end, scroll to the beginning
        carousel.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    } else {
        // Scroll right by the defined amount
        carousel.scrollBy({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
});
