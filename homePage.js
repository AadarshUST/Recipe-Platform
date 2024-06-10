
        document.addEventListener("DOMContentLoaded", function () {
            const carousel = document.querySelector('.carousel');
            const prevButton = document.querySelector('.carousel-control.prev');
            const nextButton = document.querySelector('.carousel-control.next');
            const itemWidth = carousel.querySelector('.item').offsetWidth;
            
            let currentPosition = 0;
            
            nextButton.addEventListener('click', function () {
                currentPosition += itemWidth;
                if (currentPosition > carousel.scrollWidth - carousel.offsetWidth) {
                    currentPosition = carousel.scrollWidth - carousel.offsetWidth;
                }
                carousel.scroll({
                    left: currentPosition,
                    behavior: 'smooth'
                });
            });
            
            prevButton.addEventListener('click', function () {
                currentPosition -= itemWidth;
                if (currentPosition < 0) {
                    currentPosition = 0;
                }
                carousel.scroll({
                    left: currentPosition,
                    behavior: 'smooth'
                });
            });
        });