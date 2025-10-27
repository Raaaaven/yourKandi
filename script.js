var isLateralNavAnimating = false;
var $trigger = document.querySelector('.cd-nav-trigger');
var $body = document.querySelector('body');

	//open/close lateral navigation
$trigger.addEventListener('click', function(event){
      event.preventDefault();
      //stop if nav animation is running 
      if( !isLateralNavAnimating ) {
        $trigger.classList.add('open');
     				   isLateralNavAnimating = true;   
      }else{
        $trigger.classList.remove('open');
        isLateralNavAnimating = false;
      }
	});

function menuOpen() {
    const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}


// images moves 

let img1 = document.querySelectorAll('.first1');
let img2 = document.querySelectorAll('.first2');
let mainBet = document.querySelectorAll('.between-main');

document.addEventListener('mousemove', (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25; 

  img1.forEach((img, i) => {
    const translateX = y * (i + 1) * 0.3;
    const translateY = -x * (i + 1) * 0.3;
      img.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });

  img2.forEach((img, i) => {
    const translateX = y * (i + 1) * 0.3;
    const translateY = -x * (i + 1) * 0.3;
      img.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
  mainBet.forEach((img, i) => {
    const translateX = y * (i + 1) * 0.3;
    const translateY = -x * (i + 1) * 0.3;
      img.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
});

document.addEventListener('mouseleave', () => {
  img1.forEach(box => box.style.transform = 'translate(0, 0)');
  img2.forEach(box => box.style.transform = 'translate(0, 0)');
  mainBet.forEach(box => box.style.transform = 'translate(0, 0)');
});