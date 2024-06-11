
        document.querySelector('.carousel-control.prev').addEventListener('click', function () {
            document.querySelector('.carousel').scrollBy({
                top: 0,
                left: -200,
                behavior: 'smooth'
            });
        });

        document.querySelector('.carousel-control.next').addEventListener('click', function () {
            document.querySelector('.carousel').scrollBy({
                top: 0,
                left: 200,
                behavior: 'smooth'
            });
        });
    