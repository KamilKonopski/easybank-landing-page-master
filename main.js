const mobileNav = document.querySelector('.nav__navigation');
const mobileButton = document.querySelector('.nav__mobile img');

mobileButton.addEventListener('click', () => {
    mobileNav.classList.toggle('active');

    if(mobileNav.classList.contains('active')) {
        mobileButton.src = './images/icon-close.svg';
    } else if(!mobileNav.classList.contains('active')) {
        mobileButton.src = './images/icon-hamburger.svg';
    };
});