

const headerMenuIcon = document.querySelector('.header__menu__icon i'),
mobileHeaderNav = document.querySelector('.mobile__header__nav'),
header = document.querySelector('.header'),
aboutHeader = document.querySelector('.about__header'),
serviceHeader = document.querySelector('.service__header');

headerMenuIcon.addEventListener("click", ()=>{
    if(headerMenuIcon.classList.contains('bx-menu-alt-right')){
        headerMenuIcon.classList.replace('bx-menu-alt-right', 'bx-x');
        mobileHeaderNav.style.display = 'flex'
    }else{
        headerMenuIcon.classList.replace('bx-x', 'bx-menu-alt-right');
        mobileHeaderNav.style.display = 'none'
    }
})



// On scroll the the header box-shadow should show

window.addEventListener('scroll', ()=>{
    let windowScroll = window.scrollY;
    if (windowScroll > 20){
        header.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
        aboutHeader.style.background = 'var(--first-color)';
        serviceHeader.style.background = 'var(--first-color)';
    }else{
        header.style.boxShadow = 'none';
        aboutHeader.style.background = 'transparent';
        serviceHeader.style.background = 'transparent';
    }
})