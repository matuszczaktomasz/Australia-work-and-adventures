document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.nav');
    const navBtn = document.querySelector('.burger-btn');
    const allNavItems = document.querySelectorAll('.nav__item');
    const navBtnBars = document.querySelector('.burger-btn__bars');
    const allSections = document.querySelectorAll('.section');
    const footerYear = document.querySelector('.footer__year');

    const showNav = () => {
        nav.classList.toggle('nav--active');

        allNavItems.forEach(item => {
            item.addEventListener('click', () => {
                nav.classList.remove('nav--active');
                allNavItems.forEach(item => {
                    item.classList.remove('nav-items-animation')
                });
            })
        })

        navItemsAnimation();
    }

    const navItemsAnimation = () => {
        let delayTime = 0;

        allNavItems.forEach(item => {
            item.classList.toggle('nav-items-animation');
            item.style.animationDelay = '.' + delayTime + 's';
            delayTime++;
        })
    }

    const observerSection = () => {
        const currentSection = window.scrollY;

        allSections.forEach(section => {
            if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 40) {
                navBtnBars.classList.add('black-bars-color');
                navBtn.classList.add('black-outline-color')
            } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 40) {
                navBtnBars.classList.remove('black-bars-color');
                navBtn.classList.remove('black-outline-color')
            }
        });
    }

    const currentYear = () => {
        const year = (new Date).getFullYear();
        footerYear.innerText = year;
    }
    currentYear();

    navBtn.addEventListener('click', showNav);
    window.addEventListener('scroll', observerSection);
});