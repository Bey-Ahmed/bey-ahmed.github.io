let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let slideIcon = document.querySelectorAll('.slide-icon');
var slidesNumb = slides.length, currentSlide = 1;

slides = [
    slides[slidesNumb - 1].cloneNode(true),
    ...slides,
    slides[0].cloneNode(true)
];
slidesNumb = slides.length;

slides.forEach(slide => slider.appendChild(slide));

let on = document.getElementsByClassName('on');

let turnOnSlideIcon = () => {
    if (on) {
        [...on].forEach(slideOn => {
            slideOn.classList.remove('on');
        });
    }

    if (slideIcon) {
        if (currentSlide == 0) {
            slideIcon[slideIcon.length - 1].classList.add('on');
        }
        else if (currentSlide == slidesNumb - 1) {
            slideIcon[0].classList.add('on');
        }
        else {
            slideIcon[currentSlide - 1].classList.add('on');
        }
    }
}

let nextBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', function() {
    if (currentSlide == slidesNumb - 1) {
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(-20%)';
        currentSlide = 1;
        turnOnSlideIcon();
    }
    else {
        slider.style.transform = 'translateX(-' + (++currentSlide * 20) + '%)';
        slider.style.transition = 'transform 1s';
        turnOnSlideIcon();

        if (currentSlide == slidesNumb - 1) {
            setTimeout(function() {
                nextBtn.click();
            }, 1000);
        }
    }
});

let prevBtn = document.querySelector('.prev-btn');
prevBtn.addEventListener('click', function() {
    if (currentSlide == 0) {
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(-' + ((slidesNumb - 2) * 20) + '%)';
        currentSlide = slidesNumb - 2;
        turnOnSlideIcon();
    }
    else {
        slider.style.transform = 'translateX(-' + (--currentSlide * 20) + '%)';
        slider.style.transition = 'transform 1s';
        turnOnSlideIcon();

        if (currentSlide == 0) {
            setTimeout(function() {
                prevBtn.click();
            }, 1000);
        }
    }
});


var moveSlide = () => {
    setInterval(() => {
        if (currentSlide == slidesNumb - 1) {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(-20%)';
            currentSlide = 1;
        }
        else {
            slider.style.transform = 'translateX(-' + (++currentSlide * 20) + '%)';
            slider.style.transition = 'transform 1s';
        }
        turnOnSlideIcon();
    }, 8000)
};

moveSlide();

/*let clients = document.querySelector('.clients-grid');
let clientsNumb = document.querySelectorAll('.featured-client').length;
let currentClient = 0;

let nextClient = document.querySelector('.next-client');
nextClient.addEventListener('click', function() {
    if (currentClient < clientsNumb - 1) {
        clients.style.transform = 'translateX(-' + (++currentClient * 100 / clientsNumb) + '%)';
        clients.style.transition = 'transform 1s';
    }
});

let prevClient = document.querySelector('.prev-client');
prevClient.addEventListener('click', function() {
    if (currentClient > 0) {
        clients.style.transform = 'translateX(-' + (--currentClient * 100 / clientsNumb) + '%)';
        clients.style.transition = 'transform 1s';
    }
});*/