'use strict';

// navbar를 투명하게 만들고 navbarheight만큼 내려가면 pink로 바꾸기
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

// navbar 메뉴 클릭시 해당 메뉴로 스크롤링
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
    const target=event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:'smooth'});
});

// contact me 버튼 클릭시 contact 섹션으로 이동
const home_contact = document.querySelector('.home__contact');
home_contact.addEventListener('click', ()=>{
    // const target = event2.target;
    // const contact = target.dataset.contact;
    // if(contact == null){return;}
    // console.log(contact); 불필요...!!!
    const scrollToContact = document.querySelector('#contact');
    scrollToContact.scrollIntoView({behavior:'smooth'});
});

// 스크롤링시 페이드아웃 되듯이 올라가는 홈페이지가 투명해짐
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    console.log(homeHeight); //960.4000244140625
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤링 시 arrowup버튼 보이도록 하기
const arrow__up = document.querySelector('.arrow__up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight / 2){
        arrow__up.classList.add('visible');
    }
    else{
        arrow__up.classList.remove('visible');
    }
})

// arrow up 버튼 클릭시 홈 화면으로 이동
arrow__up.addEventListener('click', ()=>{
    const scrollToHome = document.querySelector('#home');
    scrollToHome.scrollIntoView({behavior:'smooth'});
});