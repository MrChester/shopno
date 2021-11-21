let galleryItemList = document.querySelectorAll('.works-gallery__item');
let popUp = document.getElementById('pop-up');
let popUpImg = document.getElementById('pop-up__img');
let screenPercent = 0.75;

for (let i = 0; i < galleryItemList.length; i++)
{
    galleryItemList[i].addEventListener('click', function (event) {
        let screenHeight = document.documentElement.clientHeight;
        let screenWidth = document.documentElement.offsetWidth;
        const src = event.target.getAttribute('src');

        popUpImg.setAttribute('src', src);
        popUp.classList.remove('fade');

        if (screenWidth <= 540)
        {
            popUpImg.style.maxWidth = (screenPercent * screenWidth) + 'px';
        }
        else if (screenWidth >= 540 && screenWidth < 768)
        {
            popUpImg.style.maxHeight = (screenPercent * screenHeight) + 'px';
        }
        else
        {
            popUpImg.style.maxWidth = (screenPercent * screenHeight) + 'px';
        }
        popUpImg.classList.remove('fade');
        popUpImg.classList.add('show');
    });
}

popUp.addEventListener('click', () =>
{
    popUp.classList.add('fade');
    popUpImg.removeAttribute('style');
    popUpImg.classList.remove('show');
    popUpImg.classList.add('fade');
    popUpImg.setAttribute('src', '#');
});