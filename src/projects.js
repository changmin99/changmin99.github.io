// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (event) => {
   //console.log(event);

  //이벤트가 발생한 타겟안에있는 카테고리값을 가져오기
  const filter = event.target.dataset.category;

  //여백이 클릭이되면은 filter가 출력되지않음
  //filter가 있는요소가 클릭됬을떄만 출력됨
  if (filter == null) {
    return;
  }
  handleActiveSelection(event.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  //Active 메뉴를 재설정
  //현재 활성화된버튼을 읽어와주면서 category--selected요소를 제거해주고
  //event가 발생한부분에 위치로 가주면서 category--selected추가  
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter) {
   //프록젝트 필터링 로직
  projects.forEach((project) => {
    //console.log(project.dataset.type);
    //모든 프로젝트를 보일경우 or 프로젝트의타입이 같은경우
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  projectsContainer.classList.add('anim-out');
  //프로젝트가 클릭했을 때 슬며서 니타나며 크기가 달라지는 set
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
}