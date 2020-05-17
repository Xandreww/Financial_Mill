// navbar

const header = document.querySelector('header');

const liNav = document.querySelectorAll('.liNav');
const btnNav = document.querySelector('fa-bars');

header.addEventListener('click', function() {
    for (var i = 0; i < liNav.length; i++) {
        liNav[i].classList.toggle("show");
      }
})

// slider home

const slides = document.querySelector('.slider').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicator = document.querySelector('.indicator');
let index = 0;

  prev.addEventListener('click', function(){
    prevSlide();
    updateCircleIndicator();
    resetTimer();
  })

  next.addEventListener('click', function(){
    nextSlide();
    updateCircleIndicator();
    resetTimer();
  })

  function circleIndicator() {
    for(let i=0; i<slides.length; i++) {
        const div = document.createElement('div');
              div.innerHTML = i+1;
              div.setAttribute('onclick', 'indicateSlide(this)')
              div.id=1;
              if(i == 0) {
                div.className='active';
              }
              indicator.appendChild(div);
    }
  }

  circleIndicator();

  function indicateSlide(element) {
    index = element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
  }

  function updateCircleIndicator() {
    for(let i=0; i < indicator.children.length; i++) {
      indicator.children[i].classList.remove('active');
    }
    indicator.children[index].classList.add('active');
  }

  function prevSlide(){
    if(index == 0){
      index=slides.length-1;
    } else {
      index--;
    }
    changeSlide();
  }

  function nextSlide(){
    if(index == slides.length-1) {
      index=0;
    } else {
      index++;
    }
    changeSlide();
  }

  function changeSlide() {
    for(let i=0; i<slides.length; i++) {
      slides[i].classList.remove('active');
    }

    slides[index].classList.add('active');
  }

  function resetTimer(){
    clearInterval(timer);

    timer=setInterval(autoPlay,6000);
  }

  function autoPlay(){
    nextSlide();
    updateCircleIndicator();
  }

  let timer=setInterval(autoPlay,6000);
