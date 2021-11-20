let item = document.querySelectorAll('.works-gallery__item');
let galleryItem = document.querySelector('.works-gallery__item');
let popUp = document.getElementById('pop-up');
let popUpFistChild = popUp.firstElementChild;
let screenPercent = 0.75;

for (let i = 0; i < item.length; i++) {
    const img = document.createElement('img');

    item[i].addEventListener('click', function (event) {
        let screenHeight = document.documentElement.clientHeight;
        let screenWidth = document.documentElement.offsetWidth;
        const src = event.target.getAttribute('src');

        img.setAttribute('src', src);
        popUp.classList.remove('fade');
        popUpFistChild.insertAdjacentElement('beforeEnd', img);

        if (screenWidth <= 540) {
            img.style.maxWidth = (screenPercent * screenWidth) + 'px';
        } else if (screenWidth >= 540 && screenWidth < 768) {
            img.style.maxHeight = (screenPercent * screenHeight) + 'px';
        } else {
            img.style.maxWidth = (screenPercent * screenHeight) + 'px';
        }

    });
}

popUp.addEventListener('click', () => {
    popUp.classList.add('fade')
    popUpFistChild.innerHTML = "";
});