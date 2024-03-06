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

makeDrop('.menu', '.dropdown');