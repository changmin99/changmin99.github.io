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
    console.log(1 - window.scrollY / homeHeader)
    
    //만약 homehewader높이가 100 y의좌표는0 opacity값은1로 불투명하게...
    //1 -  y의값을  homeHeader 나눈값을 우리가 원하는 opacity값이나옴
    home.style.opacity=1 - window.scrollY / homeHeader;
})
