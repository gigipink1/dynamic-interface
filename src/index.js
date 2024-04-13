
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

function setPosition() {
    const slide = document.querySelector('.slides');
    slide.style.right = '0%';
    // console.log(slide.style.right);
} 


function getPosition () {
    const slide = document.querySelector('.slides');
    return(slide.style.right);
    
}

function moveRight() {
    const slides = document.querySelector('.slides');
    const currentPos = getPosition();
    const str = currentPos.replace('%','');
    // console.log(str);
    const newPic = parseInt(str) + 100;
    // console.log(newPic);
    slides.style.right = `${newPic}%`;
}

function moveLeft() {
    const slides = document.querySelector('.slides');
    const currentPos = getPosition();
    const str = currentPos.replace('%','');
    // console.log(str);
    const newPic = parseInt(str) - 100;
    // console.log(newPic);
    slides.style.right = `${newPic}%`;
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


function dotButton() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot)=> {
        dot.addEventListener('click', (e) => {
        const slideNumber = e.target.classList[1];
        changeSlide(slideNumber);
        });
    })
}



makeDrop('.menu', '.dropdown');
setPosition();

const slide = document.querySelector('.direction.right');
slide.addEventListener('click', ()=>{
    moveRight();
})


const left = document.querySelector('.direction.left');
left.addEventListener('click', ()=>{
    moveLeft();
})

dotButton();