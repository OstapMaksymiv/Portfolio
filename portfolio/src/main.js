import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/componants/header.css';
import '../styles/componants/hero.css';
import '../styles/componants/about.css';
import '../styles/componants/featured.css';
import '../styles/componants/work.css';
import '../styles/componants/contact.css';
import '../styles/componants/footer.css';
import '../styles/componants/mobile-nav.css';
import '../styles/utils.css';
import mobilenav  from './utils/mobile-nav';
import darkMode  from './utils/dark-theme';
mobilenav();
darkMode();
// const cursor = document.querySelector(".cursor");
// const cursor_follow = document.querySelector(".cursor-follow");
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    window.scrollY >= 450 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// window.addEventListener("mousemove", (e) => {
//     gsap.to(".cursor",{x: e.clientX , y: e.clientY})
//     gsap.to(".cursor-follow",{x: e.clientX , y: e.clientY, duration: 1.5, ease: "power3.out" })
// })

// document.addEventListener('mouseleave', function() {
//     cursor.style.display = 'none';
// });

// document.addEventListener('mouseenter', function() {
//     cursor.style.display = 'block';
// });

// document.addEventListener('mouseleave', function() {
//     cursor_follow.style.display = 'none';
// });

// document.addEventListener('mouseenter', function() {
//     cursor_follow.style.display = 'block';
// });

const scrollers = document.querySelectorAll(".scroller");
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}
function addAnimation() {
    scrollers.forEach(element => {
        element.setAttribute('data-animated', true)
        const scrollerInner = element.querySelector('.scroller__inner');
        const scrolletContent = Array.from(scrollerInner.children);
        scrolletContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        })
    });
}

// const target = document.getElementById('header');
// let prevScrollPos = window.scrollY;
// function handleScroll() {
//     const currentScrollPos = window.scrollY;
//     if (prevScrollPos > currentScrollPos) {
//         target.classList.remove('header__scroll-down');
//         target.classList.add('header__scroll-up');
//         target.style.position = "sticky"
//     } else {
//         target.classList.remove('header__scroll-up');
//         target.classList.add('header__scroll-down');
//         // target.style.position = "relative"
//     }
//     prevScrollPos = currentScrollPos;
// }
// window.addEventListener('scroll', handleScroll);
// const blurHeader = () => {
//     const header = document.querySelector('.header');
//     window.scrollY >= 50 ? header.classList.add('blur-header') 
//                         : header.classList.remove('blur-header');
//   }
  
// window.addEventListener('scroll', blurHeader);


const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    opacity: 1,
    scale: 1.1,
    duration: 2500,
    delay: 300,
    // reset: true,
})
sr.reveal(`.hero__subtitle`)
// sr.reveal(`.hero`,{rotate: {y: 3}} )

sr.reveal(`.hero__img`,{scale:1,rotate: {y: 5}} )
sr.reveal(`.header__img`,{scale:1, distance: '80px'} )
sr.reveal(`.header__bars`,{scale:1, distance: '70px', delay:450} )
sr.reveal(`.hero__title`,{scale:0.9} )
sr.reveal(`.hero__description`,{scale:1.1, rotate: {y:3}} )
sr.reveal(`.email`,{scale:1, origin: 'bottom',distance: '320px'} )
sr.reveal(`.social`,{scale:1, origin: 'bottom',distance: '220px'} )
sr.reveal('.about', {
    scale: 1,
    origin: 'bottom',
    distance: '220px',
    delay:100,
    opacity: 0
});
sr.reveal(`.header__menu li:nth-child(1)`,{scale:1, distance: '70px' } )
sr.reveal(`.header__menu li:nth-child(2)`,{scale:1, distance: '80px', delay: 400 } )
sr.reveal(`.header__menu li:nth-child(3)`,{scale:1, distance: '90px', delay: 500 } )
sr.reveal(`.header__line, .header__sun, .header__resume`,{scale:1, distance: '100px', delay: 550, } )
sr.reveal(`.contact__title`,{scale:0.9, } )
sr.reveal(`.contact__description`,{scale:1, delay:350} )
sr.reveal(`.footer__title`,{scale:1, origin: 'bottom',distance: '40px',opacity: 0} )
sr.reveal(`.contact__btn`,{scale:0.8, distance:0} )
// sr.reveal(`.header__sun`,{scale:1, distance: '100px', delay: 550, } )
// sr.reveal(`.header__resume`,{scale:1, distance: '100px', delay: 550, } )
// sr.reveal(`.header__link:nth-child(2)`,{rotate: {z: 15}, distance: 0 , delay: 600} )
// sr.reveal(`.header__link:nth-child(3)`,{rotate: {z: -30}, distance: 0 , delay: 900} )

// sr.reveal(`.favorite__card img`,{interval:100 ,rotate: {z: 15}, distance: 0 } )
// sr.reveal(`.footer__container`,{scale: 1 } )
// sr.reveal(`.footer__img-1`,{rotate: {z: 15}})
// sr.reveal(`.footer__img-2`,{rotate: {z: 15}})

