let container = document.querySelector('.container');
let worksImgList = document.querySelectorAll('.works-gallery__img');
let popUp = document.getElementById('pop-up');
let popUpImg = document.getElementById('pop-up__img');
var leftControl = document.querySelector('.pop-up__control--left');
var closeControl = document.querySelector('.control__icon--close');
var rightControl = document.querySelector('.pop-up__control--right');
let screenPercent = 0.75;
let windowOuterWidth = window.screen.width;
var containerLeftPadding = parseInt(window.getComputedStyle(container, null).getPropertyValue('padding-left'));
var containerRightPadding = parseInt(window.getComputedStyle(container, null).getPropertyValue('padding-right'));
let containerWidth = container.clientWidth;
let slideIndex = 0;
var containerPadding = containerLeftPadding + containerRightPadding;

for (let i = 0; i < worksImgList.length; i++) {
    worksImgList[i].addEventListener('click', function (event) {
        slideIndex = parseInt(event.target.getAttribute('slide-index'));
        containerWidth = container.clientWidth - containerPadding;
        currentSlide(slideIndex);
        popUp.classList.remove('fade');
        setImgWidth(containerWidth, screenPercent);
        popUpImg.classList.remove('fade');
        popUpImg.classList.add('show');
    });
}

closeControl.addEventListener('click', (event) => {
    popUp.classList.add('fade');
    popUpImg.removeAttribute('style');
    popUpImg.classList.remove('show');
    popUpImg.classList.add('fade');
    popUpImg.setAttribute('src', '#');
});

leftControl.addEventListener('click', () => {
    previousSlide();
});

rightControl.addEventListener('click', () => {
    nextSlide();
});

function setImgWidth(containerWidth, screenPercent) {
    let windowHeight = window.innerHeight;
    let maxWidth = screenPercent * containerWidth;
    if (containerWidth < windowHeight) {
        popUpImg.style.maxWidth = (maxWidth) + 'px';
    } else {
        if (containerWidth >= (windowOuterWidth / 2)) {
            popUpImg.style.maxWidth = (screenPercent * windowHeight) + 'px';
        } else {
            popUpImg.style.maxWidth = (maxWidth) + 'px';
        }
    }
}

function showSlides(n) {
    let i;
    let slide = popUpImg;

    if (n > worksImgList.length - 1) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = worksImgList.length - 1;
    }
    slide.setAttribute('src', worksImgList[slideIndex].getAttribute('src'));
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    console.log("current slide n = ", n);
    showSlides(slideIndex = n);
}