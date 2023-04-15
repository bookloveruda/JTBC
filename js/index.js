'use strict';

var a_link = document.querySelectorAll(".a-link");
// Handle mouse over/out event on links
a_link.forEach(e => e.addEventListener('mouseenter', handleMouseEnter));
a_link.forEach(e => e.addEventListener('mouseleave', handleMouseLeave));
window.addEventListener('mousemove', handleMouseMove);
// Move the cursor in dom/window
function handleMouseMove(event) {
  console.log(event);
  var top = event.pageY - (cursor.clientHeight / 2);
  var left = event.pageX - (cursor.clientWidth / 2);
  cursor.style.top = top + 'px';
  cursor.style.left = left + 'px';
}
// event: mouse enter on link
function handleMouseEnter() {
  cursor.classList.add('hovered');
}
// event: mouse leave on link
function handleMouseLeave() {
  cursor.classList.remove('hovered');
}


const sec = document.querySelector('.section.sec');
const secCon = sec.querySelector('.sec-con');
const secConUl = secCon.querySelector('ul');
const secConUlLi = secConUl.querySelectorAll('li');

const popUp = document.querySelector('.popUp');
const popUpCon = popUp.querySelector('.popUp-con');
const popUpConImg = popUpCon.querySelector('img');



// ul에게 한 번만 이벤트 주는.. 이벤트위임
// 격자 이미지 누르면 팝업으로 뜸
secConUl.addEventListener('click',(e)=>{
  const eTarget = e.target;
  const liTag = eTarget.parentElement;
  
    secConUlLi.forEach((el,idx)=>{
      if(liTag===el){
        const imgSrc = el.children[0].getAttribute('src');
        const imgAlt = el.children[0].getAttribute('alt');
        console.log(imgSrc, imgAlt);

        popUpConImg.setAttribute('src',imgSrc);
        popUpConImg.setAttribute('alt',imgAlt);
        
        popUp.style.display='flex';
        popUp.classList.add('pop-animation');
      }
    });
    
  });
  popUp.addEventListener('click',(e)=>{
  popUp.style.display='none';
  popUp.classList.remove('pop-animation');
});
