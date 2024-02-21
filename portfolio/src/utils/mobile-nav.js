const mobilenav = () => {
    const barss = document.querySelector('.header__bars');
    const mbnav = document .querySelector('.mobile-nav')
    const linkss = document.querySelectorAll('.mobile-nav__link')
    const active = document.querySelector('.mobile-nav-active')
    const target = document.getElementById('header');
    const header__links = document.querySelectorAll('.header__link')
    const highter = document.querySelector(".highter_body");
    // if(barss){
    //     barss.addEventListener('click', () => {
    //         mbnav.classList.toggle("mobile-nav-active");
    //     })
    // }
    // if(navClose){
    //     navClose.addEventListener('click', () => {
    //         navMenu.classList.remove('show-menu');
    //     })
    // }
    
    let ismobileopen = false;
    let initialWindowWidth = window.innerWidth;
    barss.addEventListener("click", () => {
        ismobileopen = !ismobileopen;
        window.scrollTo(0, 0);
        if(ismobileopen){

            mbnav.classList.add("mobile-nav-active")
            document.body.style.overflowY = "hidden";
            document.documentElement.style.overflowY = "hidden";
        }
        else{
            mbnav.classList.remove("mobile-nav-active")
            document.body.style.overflowY = "auto";
            document.documentElement.style.overflowY = "auto";
        }
    })
    header__links.forEach(element => {
        element.addEventListener('click', ()=> {
            target.classList.remove('header__scroll-up');
            console.log("1111");
            target.classList.add('header__scroll-down');
        })
    });
    linkss.forEach(element => {
            element.addEventListener('click', ()=> {
                ismobileopen = false;
                mbnav.classList.remove("mobile-nav-active")
                document.body.style.overflowY = "auto";
                document.documentElement.style.overflowY = "auto";
                elderSVG.style.display = "block";
                newSVG.style.display = "none";
            })
        })
        
        window.addEventListener('resize', function () {
            if (window.innerWidth > initialWindowWidth && window.innerWidth > 768 && initialWindowWidth <= 768) {
                ismobileopen = false;
                document.body.style.overflowY = "auto";
                document.documentElement.style.overflowY = "auto";
                mbnav.classList.remove("mobile-nav-active")
                elderSVG.style.display = "block";
                newSVG.style.display = "none";
                initialWindowWidth = window.innerWidth;
            } else {
                initialWindowWidth = window.innerWidth;
            }
        })
        const elderSVG = document.querySelector(".older_svg");
        const newSVG= document.querySelector(".new_svg");
        barss.addEventListener("click", () => {
            if (elderSVG.style.display !== "none") {
                elderSVG.style.display = "none";
                newSVG.style.display = "block";
            } else {
                elderSVG.style.display = "block";
                newSVG.style.display = "none";
            }
          });
    // barss.addEventListener('click', ()=> {
    //         ismobileopen = true;
    //         mbnav.style.right = '0%' ;
    //         document.body.style.overflowY= 'hidden' ;
    // })
    // cross.addEventListener('click', () => {
    //     mbnav.style.right = '-100%' ;
    //     document.body.style.overflowY= '' ;
    // })
    // linkss.forEach(element => {
    //     element.addEventListener('click', ()=> {
    //         mbnav.style.right = '-100%' ;
    //         document.body.style.overflowY= '' ;
    //     })
    // })

    // setInterval(checkMobileOpen, 100);
    // barss.addEventListener('click', toggleBurger);
    
    // function toggleBurger() {
    //     window.scrollTo(0, 0);
    //     body.classList.toggle('lock');
    //     mbnav.classList.toggle('mobile-nav-active');
    
    // }
    
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