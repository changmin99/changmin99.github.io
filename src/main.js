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
