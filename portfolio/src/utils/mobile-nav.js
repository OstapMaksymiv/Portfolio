const mobilenav = () => {
    const barss = document.querySelector('.header__bars');
    const mbnav = document .querySelector('.mobile-nav')
    const linkss = document.querySelectorAll('.mobile-nav__link')
    const target = document.getElementById('header');
    const header__links = document.querySelectorAll('.header__link')
    let ismobileopen = false;
    let initialWindowWidth = window.innerWidth;
    barss.addEventListener("click", () => {
        ismobileopen = !ismobileopen;
        window.scrollTo(0, 0);
        if(ismobileopen){

            mbnav.classList.add("mobile-nav-active")
            document.body.style.overflowY = "hidden";
            // document.documentElement.style.overflowY = "hidden";
        }
        else{
            mbnav.classList.remove("mobile-nav-active")
            document.body.style.overflowY = "auto";
            // document.documentElement.style.overflowY = "auto";
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
                // document.documentElement.style.overflowY = "auto";
                elderSVG.style.display = "block";
                newSVG.style.display = "none";
            })
        })
        window.addEventListener('resize', function () {
            if (window.innerWidth > initialWindowWidth && window.innerWidth > 768 && initialWindowWidth <= 768) {
                ismobileopen = false;
                document.body.style.overflowY = "auto";
                // document.documentElement.style.overflowY = "auto";
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
}
export default mobilenav;