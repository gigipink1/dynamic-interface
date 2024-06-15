
import './style.css';

function makeDrop(divName, className) {
    const menu = document.querySelector(`${className}`);
    const Title = document.querySelector(`${divName}`);
    Title.addEventListener('click', () => {
        if(menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            menu.classList.add('showing');
        }
        else {
            menu.classList.remove('showing');
            menu.classList.add('hidden')
            
        }
        
    })

}




function changeSlide(slideNum) {
    const slide = document.querySelectorAll('.slides img');
    slide.forEach((slide) => {
        if (slide.classList.contains ('showing')) {
            slide.classList.remove('showing')
        }
    })
    const chosenSlide = document.querySelector(`img.${slideNum}`);
    chosenSlide.classList.add('showing');
}

function changeDot(slideNum) {
  const dots = document.querySelectorAll('.dot'); 
  dots.forEach((dot) => {
    if (dot.classList[1] === slideNum && !dot.classList.contains('current')) {
        dot.classList.add('current');
    }
    else {
        dot.classList.remove('current');
    }

  })
}


function dotButton() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot)=> {
        dot.addEventListener('click', (e) => {
        const slideNumber = e.target.classList[1];
        changeSlide(slideNumber);
        changeDot(slideNumber);
        
        });
    })
}


function moveRight() {
    const currentSlide = document.querySelector('img.showing');
    if (currentSlide.nextElementSibling !== null) {
        const slideNumber = currentSlide.nextElementSibling.classList[0];
         changeSlide(slideNumber);
         changeDot(slideNumber); };
    
}

function moveLeft() {
 const currentSlide = document.querySelector('img.showing');
    if (currentSlide.previousElementSibling !== null) {
        const slideNumber = currentSlide.previousElementSibling.classList[0];
        changeSlide(slideNumber);
        changeDot(slideNumber);
    }

}





makeDrop('.menu', '.dropdown');

const slide = document.querySelector('.direction.right');
slide.addEventListener('click', ()=>{
    moveRight();
})


const left = document.querySelector('.direction.left');
left.addEventListener('click', ()=>{
    moveLeft();
}) 

dotButton();

