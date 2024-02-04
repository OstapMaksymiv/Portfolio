const mobilenav = () => {
    const barss = document.querySelector('.header__bars');
    const mbnav = document .querySelector('.mobile-nav')
    const linkss = document.querySelectorAll('.mobile-nav__link')
    const cross = document.querySelector('.header__cross')
    let ismobileopen = false;
    barss.addEventListener('click', ()=> {
            ismobileopen = true;
            mbnav.style.right = '0%' ;
            document.body.style.overflowY= 'hidden' ;
    })
    cross.addEventListener('click', () => {
        mbnav.style.right = '-100%' ;
        document.body.style.overflowY= '' ;
    })
    linkss.forEach(element => {
        element.addEventListener('click', ()=> {
            mbnav.style.right = '-100%' ;
            document.body.style.overflowY= '' ;
        })
    });
    function checkMobileOpen() {
        if (ismobileopen && window.innerWidth > 768) {
            mbnav.style.right = '-100%';
            document.body.style.overflowY = '';
        }
    }

    setInterval(checkMobileOpen, 100);
}

// /*=============== SHOW MENU ===============*/
// const navMenu = document.getElementById('nav-menu'),
//         navToggle = document.getElementById('nav-toggle'),
//         navClose = document.getElementById('nav-close');
// if(navToggle) {
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.add('show-menu');
//     });
// };
// if(navClose) {
//     navClose.addEventListener('click' , () => {
//         navMenu.classList.remove('show-menu');
//     });
// };
// /*=============== REMOVE MENU MOBILE ===============*/
// const navLink = document.querySelectorAll('.nav__link');
// const linkAction = () => {
//     const navMenu = document.getElementById('nav-menu')
//     navMenu.classList.remove('show-menu')
// } 
// navLink.forEach(e => e.addEventListener('click', linkAction));

export default mobilenav;