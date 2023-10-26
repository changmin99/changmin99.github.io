

// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
const sectionIds = [
    '#home',
    '#about',
    '#skills',
    '#work',
    '#testimonial',
    '#contact',
  ];

  //각각 sectinsIds를 돌면서 querySelector를 통해  id를 찾고 sections로 받아옴 
  const sections = sectionIds.map((id) => document.querySelector(id));
  //sectionIds를 돌면서 querySelector를 통해  
  //id를 갖고올텐데 속성에 href에 현제 지금설정된 id로 찾을수있도록.. 
  const navItems = sectionIds.map((id) =>
    document.querySelector(`[href="${id}"]`)
  );

  //현제 섹션들이 보여지고있는지 아닌지..
  const visibleSections = sectionIds.map(() => false);
  let activeNavItem = navItems[0];
  

  // 2. IntersectionObserver를 사용해서 모든 섹션들을 관찰해야 한다.
  const options = {
    rootMargin: '-20% 0px 0px 0px',
    threshold: [0, 0.98],
  };
  const observer = new IntersectionObserver(observerCallback, options);
  sections.forEach((section) => observer.observe(section));
  

 // 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
// 보여지는 섹션:
// - 다수의 섹션이 동시에 보여진다면, 가장 첫번째 섹션을 선택
// - 마지막 contact 섹션이 보여진다면, 그러면 가장 마지막 섹션을 선택

  function observerCallback(entries) {
    let selectLastOne; //flag 변수
    entries.forEach((entry) => {
      //현재 id를 가지고 있는 sectionIds배열중에 현재 entry에 관련된 index가 무엇인지..
      const index = sectionIds.indexOf(`#${entry.target.id}`);    
      //지금 현재 entry가 isIntersecting 인지 아닌지 boolean으로 저장
      visibleSections[index] = entry.isIntersecting;
     //entries 마다 마지막것을 select해야될지 말지를 결정
     //entry 가장 마지막이고
     //마지막entry 보여지고 
     //entry 99%그러면 selectLastOne true가 설정 세가지조건중 한가지조건이라도 만족하지못한다면은 false
      selectLastOne =
        index === sectionIds.length - 1 &&
        entry.isIntersecting &&
        entry.intersectionRatio >= 0.95;
    });
    
    const navIndex = selectLastOne
      ? sectionIds.length - 1
      : findFirstIntersecting(visibleSections);
    selectNavItem(navIndex);
  }
  
  //첫번쨰 true인 item의 인덱스를 만드는 함수
  function findFirstIntersecting(intersections) {
    const index = intersections.indexOf(true);
    return index >= 0 ? index : 0;
  }
  
 
