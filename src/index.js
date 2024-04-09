import { add } from 'lodash';
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
    console.log(slide.style.right);
} 


function getPosition () {
    const slide = document.querySelector('.slides');
    return(slide.style.right);
    
}

function moveRight() {
    const slides = document.querySelector('.slides');
    const currentPos = getPosition();
    const str = currentPos.replace('%','');
    console.log(str);
    const newPic = parseInt(str) + 100;
    console.log(newPic);
    slides.style.right = `${newPic}%`;
}

function moveLeft() {
    const slides = document.querySelector('.slides');
    const currentPos = getPosition();
    const str = currentPos.replace('%','');
    console.log(str);
    const newPic = parseInt(str) - 100;
    console.log(newPic);
    slides.style.right = `${newPic}%`;
}


makeDrop('.menu', '.dropdown');
setPosition();

const slide = document.querySelector('.direction.right');
slide.addEventListener('click', ()=>{
    moveRight();
    /* console.log(e.target.style)
    const currentPos = getPosition();
    const str = currentPos.replace('%','');
    console.log(str);
    const newPic = parseInt(str) + 100;
    console.log(newPic);
    slide.style.right = `${newPic}%`; */
})


const left = document.querySelector('.direction.left');
left.addEventListener('click', ()=>{
    moveLeft();
})