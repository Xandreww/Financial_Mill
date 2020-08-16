// navbar

const header = document.querySelector('header');

const liNav = document.querySelectorAll('.liNav');
const btnNav = document.querySelector('fa-bars');

header.addEventListener('click', function() {
    for (var i = 0; i < liNav.length; i++) {
        liNav[i].classList.toggle("show");
      }
})

// header fixed

window.onscroll=function(){
  const docScrollTop=document.documentElement.scrollTop;

  if(window.innerWidth>991){
    if(docScrollTop>100){
      document.querySelector("header").classList.add("fixed")
    }
    else{
    document.querySelector("header").classList.remove("fixed")	
    }
  }
}    


// navbar links

const navbar = document.querySelector(".navbar");
    a=navbar.querySelectorAll("a");
    
    a.forEach(function(element){
       element.addEventListener("click",function(){
          for(let i=0; i<a.length; i++){
            a[i].classList.remove("active");
          }
         this.classList.add("active")
         document.querySelector(".navbar").classList.toggle("show");
       })
    })

// ham-burger

const hamBurger=document.querySelector(".ham-burger");

hamBurger.addEventListener("click",function(){
     document.querySelector(".navbar").classList.toggle("show");
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
              div.setAttribute('onclick', 'indicateSlide(this)');
              div.id="1";
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

// SIDEBAR

  $(document).ready(function() {

    function toggleSidebar() {
      $(".openSidebar").toggleClass("active");
      $("main").toggleClass("move-to-left");
      $(".sidebar-item").toggleClass("active");
    }
  
    $(".button").on("click tap", function() {
      toggleSidebar();
    });
  
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        toggleSidebar();
      }
    });

    $('.test').parallaxie({
      speed: 0.5,
      offset: 50,
    });
  
  });

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

