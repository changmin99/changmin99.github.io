//Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector(".header");
//getBoundingClientRect(): 요소의높이 측정
const hederHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    //스크롤되는 Y 좌표가 headerHeight보다 크다면 다른 스타일링!
    // console.log(window.screenY);

    if(window.screenY > hederHeight){
        header.classList.add('header--dark');
    } else{
        header.classList.remove('header--dark')
    }
})

//Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector(".home__container")
const homeHeader = home.getBoundingClientRect().height;

document.addEventListener("scroll" , ()=>{
    //console.log(1 - window.scrollY / homeHeader)
    
    //만약 homehewader높이가 100 y의좌표는0 opacity값은1로 불투명하게...
    //1 -  y의값을  homeHeader 나눈값을 우리가 원하는 opacity값이나옴
    home.style.opacity=1 - window.scrollY / homeHeader;
})

//Arrow up버튼을 아래로 스크롤시 투명하게 처리함
const arrowup = document.querySelector(".arrow-up");
document.addEventListener('scroll', ()=>{

    console.log(arrowup)
    if(window.screenY >homeHeader /2) {
        arrowup.style.opacity=1;
    } else {
        arrowup.style.opacity=0;
    }
})

//Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click" , ()=>{
    //toggle이라는 함수를 사용해서 보여줬다가 안보여주고
    //기존의 open에 클래스가 있다면 클래스를 제거
    navbarMenu.classList.toggle('open');
})


//Navbar 메뉴 클리시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener("click" , ()=>{
    navbarMenu.classList.remove('open');
})